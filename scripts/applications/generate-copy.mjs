// Generate application-page copy through Tontin, in short resumable batches,
// grounded with the RAG, gated by validate.mjs, repaired FIELD BY FIELD.
// Usage:
//   node scripts/applications/generate-copy.mjs --locale fr --apps meringue[,macarons] [--fresh]
//   node scripts/applications/generate-copy.mjs --locale fr --apps meringue --repair   # fix only failing fields of the saved copy
//   node scripts/applications/generate-copy.mjs --locale fr --apps meringue --force    # discard and regenerate (last resort)
// Env: TONTIN_URL, TONTIN_TOKEN (.env.local, never printed), RAG_CORPORA (default veryaquafaba,generacion_marketing,seo_general).
// Hard rules: generated prose is respected (repair rewrites only rejected
// fields, everything else is copied back byte for byte); a page that still
// fails after 3 repairs is NOT saved; nothing is ever edited by hand.
import fs from 'node:fs';
import path from 'node:path';
import { SYSTEM, buildPrompt, buildRepairPrompt, buildSectionPrompt, loadFacts, loadSiteContext } from './prompts.mjs';
import { validateCopy, formatProblems, sanitizeEntry, readJson, writeJson, loadTitles, getPath, setPath, LOCALES, APPS } from './validate.mjs';
import { ROOT, requireToken, complete, ragContext, logPage, sleep, GENERATION_PROVIDERS } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const locale = opt('locale');
const apps = typeof opt('apps') === 'string' ? opt('apps').split(',') : APPS;
const force = opt('force') === true;
const repairOnly = opt('repair') === true;
const fresh = opt('fresh') === true;
// --section when|pro|liquid|powder: rewrite that one section from scratch with
// application-specific constraints (rest of the page untouched), then gate + repair.
const sectionKey = typeof opt('section') === 'string' ? opt('section') : null;
const RAG_CORPORA = (process.env.RAG_CORPORA || 'veryaquafaba,generacion_marketing,seo_general').split(',').map((s) => s.trim()).filter(Boolean);

if (!LOCALES.includes(locale)) { console.error('usage: --locale en|de|fr|nl [--apps a,b] [--repair|--force] [--fresh]'); process.exit(2); }
for (const a of apps) if (!APPS.includes(a)) { console.error('unknown app', a); process.exit(2); }
requireToken();

const facts = loadFacts();
const TITLES = await loadTitles();
const copyFile = path.join(ROOT, 'data/applications', `copy.${locale}.json`);
const copy = fs.existsSync(copyFile) ? readJson(copyFile) : {};
// A page that fails after 3 repairs is kept here (not published) so the next
// --repair continues from that prose instead of generating a new one.
const pendingFile = path.join(ROOT, 'data/applications', `pending.${locale}.json`);
const pending = fs.existsSync(pendingFile) ? readJson(pendingFile) : {};
const auditFile = path.join(ROOT, 'data/applications/audit-llm.json');
const auditLlm = fs.existsSync(auditFile) ? readJson(auditFile) : {};
const context = await loadSiteContext(locale);
const providers = GENERATION_PROVIDERS(locale);

let failures = 0;
for (const app of apps) {
  const key = `${locale}/${app}`;
  const t = TITLES[locale][app];
  // In repair mode the pending candidate (latest prose with fixes already applied) wins
  // over the saved copy, so a failed repair round is continued, not redone from scratch.
  const existing = repairOnly ? (pending[app] || copy[app]) : (copy[app] || pending[app]);
  if (copy[app] && !force && !repairOnly && !sectionKey) { console.log(`[skip] ${key} already generated (--repair to fix fields, --force to redo)`); continue; }
  if (pending[app] && !force && !repairOnly) { console.log(`[pending] ${key} has an unsaved candidate: repairing it instead of generating anew`); }
  if (repairOnly && !existing) { console.log(`[skip] ${key} nothing to repair`); continue; }
  const fromPending = !copy[app] && Boolean(pending[app]) && !force;

  const steps = [];
  let candidate = null;
  let problems = [];

  if (sectionKey && existing) {
    candidate = sanitizeEntry(existing);
    const i = candidate.sections.findIndex((s) => s.key === sectionKey);
    if (i < 0) { console.log(`[skip] ${key} has no section ${sectionKey}`); continue; }
    const res = await complete({ system: SYSTEM, prompt: buildSectionPrompt({ locale, app, key: sectionKey, current: candidate.sections[i].html, recipeText: context.recipes[app], facts }), providers, fresh: true, temperature: 0.4, maxTokens: 1200 });
    if (!res || !res.json?.html) { failures++; console.log(`[FAIL] ${key} no section from Tontin`); continue; }
    candidate.sections[i] = sanitizeEntry({ key: sectionKey, title: res.json.title || candidate.sections[i].title, html: res.json.html });
    problems = validateCopy(candidate, locale, app, t);
    steps.push({ step: `section-${sectionKey}`, provider: res.provider, model: res.model, ms: res.duration_ms, problems: formatProblems(problems) });
    console.log(`[${key}] section ${sectionKey} via ${res.provider}/${res.model}: ${problems.length ? problems.length + ' problems' : 'OK'}`);
  } else if (repairOnly || fromPending) {
    candidate = sanitizeEntry(existing);
    problems = validateCopy(candidate, locale, app, t);
    // Audit 2 (LLM auditor) high-severity issues are applied only with --from-audit: the
    // auditor has false positives, and a wrong repair damages prose that was fine.
    // By default they are a signal for Claude's read, which confirms them via --issue.
    if (opt('from-audit') === true) for (const issue of auditLlm[key]?.issues || []) if (issue.severity === 'high' && issue.path) problems.push({ path: issue.path, message: `${issue.issue} (${issue.suggestion || 'rewrite'})`, structural: false });
    // Audit 3 (Claude's read): --issue "sections[3].html: reason" (repeatable). Findings enter the
    // same repair circuit; the copy is never edited by hand.
    for (let i = 0; i < argv.length; i++) if (argv[i] === '--issue' && argv[i + 1]) { const m = /^([^:]+):\s*(.+)$/.exec(argv[i + 1]); if (m) problems.push({ path: m[1].trim(), message: m[2].trim(), structural: false }); }
    console.log(`[${key}] repair: ${problems.length} problem(s) in the saved copy`);
  } else {
    // Grounding: hybrid search in the RAG (corpora that do not exist yet are reported, not fatal).
    const rag = await ragContext([t.keyword, `${app} aquafaba liquid powder professional`], RAG_CORPORA, 4);
    for (const [c, e] of Object.entries(rag.errors)) console.log(`   rag ${c}: ${e}`);
    console.log(`   rag snippets: ${rag.snippets.length} (${Object.entries(rag.used).map(([c, n]) => `${c}=${n}`).join(' ') || 'none'})`);
    const prompt = buildPrompt({ locale, app, keyword: t.keyword, h1: t.h1, title: t.title, facts, recipeText: context.recipes[app], productsText: context.products, ragSnippets: rag.snippets });
    const res = await complete({ system: SYSTEM, prompt, providers, fresh });
    if (!res) { failures++; console.log(`[FAIL] ${key} no completion`); continue; }
    candidate = sanitizeEntry(res.json);
    problems = validateCopy(candidate, locale, app, t);
    steps.push({ step: 'generate', provider: res.provider, model: res.model, ms: res.duration_ms, problems: formatProblems(problems), rag: { used: rag.used, errors: rag.errors, snippets: rag.snippets.length } });
    console.log(`[${key}] generate via ${res.provider}/${res.model} in ${res.duration_ms} ms: ${problems.length ? problems.length + ' problems' : 'OK'}`);
  }

  // Field-level repair: only rejected paths are rewritten and copied back.
  for (let round = 1; round <= 3 && problems.length; round++) {
    for (const p of formatProblems(problems)) console.log('   -', p);
    if (problems.some((p) => p.structural)) {
      console.log(`   structural problem: regenerating the whole page`);
      const rag = await ragContext([t.keyword], RAG_CORPORA, 3);
      const res = await complete({ system: SYSTEM, prompt: buildPrompt({ locale, app, keyword: t.keyword, h1: t.h1, title: t.title, facts, recipeText: context.recipes[app], productsText: context.products, ragSnippets: rag.snippets }) + `\n\nA previous attempt was rejected: ${formatProblems(problems).join('; ')}`, providers, fresh: true });
      if (!res) break;
      candidate = sanitizeEntry(res.json);
      steps.push({ step: `regenerate-${round}`, provider: res.provider, model: res.model, ms: res.duration_ms });
    } else {
      const res = await complete({ system: SYSTEM, prompt: buildRepairPrompt({ locale, app, candidate, problems, facts, recipeText: context.recipes[app] }), providers, fresh: true, temperature: 0.2 });
      if (!res) break;
      const fixed = sanitizeEntry(res.json);
      const paths = [...new Set(problems.map((p) => p.path))].filter((p) => p !== 'title');
      let changed = 0;
      for (const p of paths) {
        const v = getPath(fixed, p);
        if (v !== undefined && JSON.stringify(v) !== JSON.stringify(getPath(candidate, p))) { setPath(candidate, p, v); changed++; }
      }
      steps.push({ step: `repair-${round}`, provider: res.provider, model: res.model, ms: res.duration_ms, paths, changed });
      console.log(`   repair ${round} via ${res.provider}/${res.model}: ${changed}/${paths.length} field(s) rewritten`);
    }
    problems = validateCopy(candidate, locale, app, t);
    steps.at(-1).problems = formatProblems(problems);
  }

  if (problems.length) {
    failures++;
    for (const p of formatProblems(problems)) console.log('   -', p);
    if (candidate) { pending[app] = candidate; writeJson(pendingFile, pending); }
    console.log(`[FAIL] ${key} not published; candidate kept in ${path.basename(pendingFile)} for the next --repair`);
    logPage(key, { status: 'failed', steps });
    continue;
  }
  copy[app] = candidate;
  writeJson(copyFile, copy);
  if (pending[app]) { delete pending[app]; writeJson(pendingFile, pending); }
  logPage(key, { status: 'valid', mode: repairOnly ? 'repair' : force ? 'force' : 'generate', steps, audit1: 'ok', audit2: repairOnly ? auditLlm[key]?.verdict || 'pending' : 'pending' });
  console.log(`[saved] ${key} -> ${path.relative(ROOT, copyFile)}`);
  await sleep(2000);
}
process.exitCode = failures ? 1 : 0;
