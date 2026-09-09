// Double audit of data/applications/copy.*.json.
//   audit 1 (always): mechanical gates (validate.mjs), 6 x 4 matrix, unique
//            titles/descriptions, em dash grep over the application files.
//   audit 2 (--llm): independent LLM auditor through Tontin (prompts.mjs AUDITOR),
//            verdict + issues saved per page in data/applications/audit-llm.json.
//   --similar: embeddings (Tontin rag/embed) to flag near-duplicate sections
//            between different applications of the same locale (thin-content guard).
// Usage: node scripts/applications/audit-copy.mjs [--llm] [--similar] [--locale fr] [--apps a,b] [--strict]
// Exit 1 on any invalid entry, any high-severity auditor issue, any dash, or
// (--strict) any missing entry. Claude reads what passes; nobody edits copy by hand.
import fs from 'node:fs';
import path from 'node:path';
import { AUDITOR, buildAuditPrompt, loadFacts, loadSiteContext } from './prompts.mjs';
import { validateCopy, formatProblems, readJson, writeJson, loadTitles, strip, LOCALES, APPS } from './validate.mjs';
import { ROOT, requireToken, complete, embed, cosine, logPage, sleep, AUDIT_PROVIDERS } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const strict = opt('strict') === true;
const withLlm = opt('llm') === true;
const withSimilar = opt('similar') === true;
const locales = typeof opt('locale') === 'string' ? [opt('locale')] : LOCALES;
const apps = typeof opt('apps') === 'string' ? opt('apps').split(',') : APPS;
const TITLES = await loadTitles();
const facts = loadFacts();
const auditFile = path.join(ROOT, 'data/applications/audit-llm.json');
const auditLlm = fs.existsSync(auditFile) ? readJson(auditFile) : {};

let invalid = 0;
let missing = 0;
let high = 0;
const descriptions = new Map();
const titles = new Map();
const entries = [];

// ---- audit 1: mechanical ----
for (const locale of locales) {
  const file = path.join(ROOT, 'data/applications', `copy.${locale}.json`);
  const copy = fs.existsSync(file) ? readJson(file) : {};
  for (const app of apps) {
    const key = `${locale}/${app}`;
    const t = TITLES[locale][app];
    if (titles.has(t.title)) console.log(`DUP title: ${key} == ${titles.get(t.title)}`); else titles.set(t.title, key);
    if (t.title.length > 60) console.log(`WARN ${key}: title ${t.title.length} chars`);
    const entry = copy[app];
    if (!entry) { missing++; console.log(`MISSING ${key}`); continue; }
    const problems = validateCopy(entry, locale, app, t);
    if (problems.length) { invalid++; console.log(`INVALID ${key}`); for (const p of formatProblems(problems)) console.log('   -', p); }
    else { console.log(`ok      ${key}`); entries.push({ key, locale, app, entry, t }); }
    const d = entry.seo?.description;
    if (d) { if (descriptions.has(d)) { invalid++; console.log(`DUP description: ${key} == ${descriptions.get(d)}`); } else descriptions.set(d, key); }
  }
}

// Em/en dash gate over every application data + component file.
const targets = ['data/applications', 'components/applications', 'components/templates/ApplicationTemplate.jsx', 'components/recipes/ApplicationLinks.jsx', 'lib/application-jsonld.js'];
let dashes = 0;
for (const d of targets) {
  const p = path.join(ROOT, d);
  // Audit records (auditor issues quote the recipes, which contain en dashes) and unpublished
  // candidates are not published copy: only copy/facts/ui/routes/index are gated.
  const files = fs.statSync(p).isDirectory() ? fs.readdirSync(p).filter((f) => !/^(audit-llm|generation-log|pending)/.test(f)).map((f) => path.join(p, f)) : [p];
  for (const f of files) fs.readFileSync(f, 'utf8').split('\n').forEach((l, i) => { if (/[—–]/.test(l)) { dashes++; console.log(`DASH ${path.relative(ROOT, f)}:${i + 1}`); } });
}

// ---- audit 2: independent LLM auditor (only entries that passed audit 1) ----
if (withLlm && entries.length) {
  requireToken();
  console.log(`\n=== AUDIT 2 (LLM auditor) on ${entries.length} page(s) ===`);
  const contexts = {};
  for (const { key, locale, app, entry, t } of entries) {
    contexts[locale] ||= await loadSiteContext(locale);
    const prompt = buildAuditPrompt({ locale, app, entry, facts, keyword: t.keyword, recipeText: contexts[locale].recipes[app] });
    let res = await complete({ system: AUDITOR, prompt, providers: AUDIT_PROVIDERS, fresh: true, temperature: 0.1, maxTokens: 2000 });
    // The first auditor (groq) is the reliable one; if the chain fell through to another
    // provider (rate limit), wait and try once more before accepting a weaker verdict.
    if (res && res.provider !== AUDIT_PROVIDERS[0]) { await sleep(20000); res = (await complete({ system: AUDITOR, prompt, providers: AUDIT_PROVIDERS, fresh: true, temperature: 0.1, maxTokens: 2000 })) || res; }
    if (!res) { console.log(`AUDIT2 ${key}: no verdict (Tontin)`); high++; continue; }
    const v = res.json || {};
    const issues = Array.isArray(v.issues) ? v.issues : [];
    const nHigh = issues.filter((i) => i.severity === 'high').length;
    high += nHigh;
    auditLlm[key] = { at: new Date().toISOString(), provider: res.provider, model: res.model, verdict: v.verdict, language_quality: v.language_quality, summary: v.summary, issues };
    writeJson(auditFile, auditLlm);
    logPage(key, { audit2: v.verdict, audit2_high: nHigh, audit2_model: `${res.provider}/${res.model}` });
    console.log(`AUDIT2 ${key}: ${v.verdict} (${res.provider}/${res.model}, language ${v.language_quality}, ${issues.length} issue(s), ${nHigh} high)`);
    for (const i of issues) console.log(`   [${i.severity}] ${i.path}: ${i.issue}${i.suggestion ? ` -> ${i.suggestion}` : ''}`);
    await sleep(1500);
  }
}

// ---- --similar: near-duplicate sections across applications of the same locale ----
if (withSimilar && entries.length) {
  requireToken();
  console.log('\n=== SIMILARITY (embeddings) ===');
  const items = entries.flatMap(({ key, locale, app, entry }) => entry.sections.map((s) => ({ key, locale, app, section: s.key, text: strip(s.html) })));
  const vectors = await embed(items.map((i) => i.text));
  if (vectors) {
    let flagged = 0;
    for (let a = 0; a < items.length; a++) for (let b = a + 1; b < items.length; b++) {
      if (items[a].locale !== items[b].locale || items[a].app === items[b].app) continue;
      const sim = cosine(vectors[a], vectors[b]);
      if (sim >= 0.93) { flagged++; console.log(`NEAR-DUPLICATE ${sim.toFixed(3)} ${items[a].key}#${items[a].section} ~ ${items[b].key}#${items[b].section}`); }
    }
    console.log(`section pairs flagged (>= 0.93, same locale, different application): ${flagged}`);
    if (flagged) invalid += flagged;
  } else console.log('similarity skipped: embeddings unavailable');
}

console.log(`\nentries: valid ${entries.length}, invalid ${invalid}, missing ${missing}, dashes ${dashes}${withLlm ? `, audit2 high issues ${high}` : ''}`);
process.exitCode = invalid || dashes || high || (strict && missing) ? 1 : 0;
