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
import { SYSTEM, buildPrompt, buildRepairPrompt, loadFacts } from './prompts.mjs';
import { validateCopy, formatProblems, sanitizeEntry, readJson, writeJson, loadTitles, getPath, setPath, LOCALES, APPS } from './validate.mjs';
import { ROOT, requireToken, complete, ragContext, logPage, sleep, GENERATION_PROVIDERS } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const locale = opt('locale');
const apps = typeof opt('apps') === 'string' ? opt('apps').split(',') : APPS;
const force = opt('force') === true;
const repairOnly = opt('repair') === true;
const fresh = opt('fresh') === true;
const RAG_CORPORA = (process.env.RAG_CORPORA || 'veryaquafaba,generacion_marketing,seo_general').split(',').map((s) => s.trim()).filter(Boolean);

if (!LOCALES.includes(locale)) { console.error('usage: --locale en|de|fr|nl [--apps a,b] [--repair|--force] [--fresh]'); process.exit(2); }
for (const a of apps) if (!APPS.includes(a)) { console.error('unknown app', a); process.exit(2); }
requireToken();

const facts = loadFacts();
const TITLES = await loadTitles();
const copyFile = path.join(ROOT, 'data/applications', `copy.${locale}.json`);
const copy = fs.existsSync(copyFile) ? readJson(copyFile) : {};
const auditFile = path.join(ROOT, 'data/applications/audit-llm.json');
const auditLlm = fs.existsSync(auditFile) ? readJson(auditFile) : {};
const context = await loadContext(locale);
const providers = GENERATION_PROVIDERS(locale);

let failures = 0;
for (const app of apps) {
  const key = `${locale}/${app}`;
  const t = TITLES[locale][app];
  const existing = copy[app];
  if (existing && !force && !repairOnly) { console.log(`[skip] ${key} already generated (--repair to fix fields, --force to redo)`); continue; }
  if (repairOnly && !existing) { console.log(`[skip] ${key} nothing to repair`); continue; }

  const steps = [];
  let candidate = null;
  let problems = [];

  if (repairOnly) {
    candidate = sanitizeEntry(existing);
    problems = validateCopy(candidate, locale, app, t);
    // Audit 2 (LLM auditor) high-severity issues are repaired too.
    for (const issue of auditLlm[key]?.issues || []) if (issue.severity === 'high' && issue.path) problems.push({ path: issue.path, message: `${issue.issue} (${issue.suggestion || 'rewrite'})`, structural: false });
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
      const res = await complete({ system: SYSTEM, prompt: buildRepairPrompt({ locale, app, candidate, problems, facts }), providers, fresh: true, temperature: 0.2 });
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
    console.log(`[FAIL] ${key} not saved`);
    logPage(key, { status: 'failed', steps });
    continue;
  }
  copy[app] = candidate;
  writeJson(copyFile, copy);
  logPage(key, { status: 'valid', mode: repairOnly ? 'repair' : force ? 'force' : 'generate', steps, audit1: 'ok', audit2: repairOnly ? auditLlm[key]?.verdict || 'pending' : 'pending' });
  console.log(`[saved] ${key} -> ${path.relative(ROOT, copyFile)}`);
  await sleep(2000);
}
process.exitCode = failures ? 1 : 0;

async function loadContext(loc) {
  // Recipe summaries from the site's own data (text only, no HTML).
  const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const { contentPages } = await import('../../data/pages/content-pages.js');
  const { RECIPE_TO_APPLICATION } = await import('../../data/applications/ui.js');
  const recipeKeyFor = Object.fromEntries(Object.entries(RECIPE_TO_APPLICATION).map(([k, v]) => [v, k.replace('recipe:', '')]));
  const aliases = { en: {}, fr: { meringues: 'meringues', 'chocolate-mousse': 'mousse-au-chocolat', 'how-to-use-aquafaba-in-baking': 'comment-utiliser-laquafaba-en-patisserie-et-boulangerie' },
    de: { meringues: 'baiser', 'chocolate-mousse': 'schokoladenmousse', 'how-to-use-aquafaba-in-baking': 'wie-man-aquafaba-beim-backen-verwendet' },
    nl: { meringues: 'aquafaba-meringues', 'chocolate-mousse': 'chocolademousse', mayonnaise: 'mayonaise', 'how-to-use-aquafaba-in-baking': 'hoe-aquafaba-in-het-bakken-gebruiken' } };
  const roots = { en: '/aquafaba-recipes/', fr: '/fr/aquafaba-recettes/', de: '/de/rezepte/', nl: '/nl/aquafaba-recepten/' };
  const recipes = {};
  for (const app of APPS) {
    const slug = aliases[loc][recipeKeyFor[app]] || recipeKeyFor[app];
    const page = contentPages[`${roots[loc]}${slug}/`] || contentPages[`${roots.en}${recipeKeyFor[app]}/`];
    recipes[app] = page ? `${page.hero?.title}. ${page.sections.map((s) => `${s.title ? s.title + ': ' : ''}${strip(s.html)}`).join(' ').slice(0, 1800)}` : '(no recipe found)';
  }
  // Products positioning (same text on every locale of the site; context only).
  const products = 'Powder: easy to store and measure, best for factories, bakeries and professional kitchens. Liquid: ready to pour and use, perfect for bakeries, bars and kitchens. Both are plant-based, allergen-free (no egg), shelf-stable before opening, a functional egg-white replacement for foaming, emulsifying and binding. Technical sheets and free samples on request through the contact form.';
  return { recipes, products };
}
