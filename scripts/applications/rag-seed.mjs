// Feed the Tontin RAG corpus `veryaquafaba` (grounding for every future batch).
// WRITES TO THE DATABASE through Tontin: the user runs it, after creating the
// corpus in tontin (node --env-file=.env.local scripts/rag-new-corpus.mjs veryaquafaba --vertical alimentacion).
//   node scripts/applications/rag-seed.mjs            # facts + recipes + positioning (replace: idempotent)
//   node scripts/applications/rag-seed.mjs --approved # + the validated copy entries (source_type approved_copy)
//   node scripts/applications/rag-seed.mjs --dry-run  # print the docs, send nothing
import fs from 'node:fs';
import path from 'node:path';
import { factsProse, loadFacts } from './prompts.mjs';
import { readJson, strip, LOCALES, APPS } from './validate.mjs';
import { ROOT, TONTIN_URL, requireToken } from './tontin.mjs';

const CORPUS = process.env.RAG_CORPUS || 'veryaquafaba';
const dry = process.argv.includes('--dry-run');
const withApproved = process.argv.includes('--approved');
const facts = loadFacts();
const docs = [];

// 1. Facts sheet, one doc per application (prose from the same builder the writer sees).
for (const app of APPS) {
  const f = facts.applications[app];
  docs.push({
    document_id: `veryaquafaba-facts-${app}`, title: `Facts: ${app}`, source_type: 'facts',
    source_url: f._fuente?.fuente_url || null,
    content: `${factsProse(facts, app)}\nSource: ${f._fuente?.fuente} (${f._fuente?.periodo}).`,
    metadata: { project: 'veryaquafaba', application: app, kind: 'facts' },
  });
}
// 2. Products positioning + packs (Products page).
docs.push({
  document_id: 'veryaquafaba-positioning', title: 'VERY AQUAFABA positioning', source_type: 'site',
  source_url: 'https://veryaquafaba.com/buy-aquafaba/',
  content: 'VERY AQUAFABA (The Very Food Co., France). Two formats of chickpea aquafaba. Powder: easy to store and measure, best for factories, bakeries and professional kitchens. Liquid: ready to pour and use, perfect for bakeries, bars and kitchens. Plant-based, allergen-free (no egg), shelf-stable before opening, functional egg-white replacement (foaming, emulsifying, binding). Packs with published equivalence: 1 L Tetrapak = 33 egg whites (1 egg white = 30 g liquid); 200 g powder = 100 egg whites (1 egg white = 2 g powder); 1 T IBC for industry on request. Not published: powder preparation, shelf life after opening, prices, industrial specs. Technical sheets and free samples on request via the contact form.',
  metadata: { project: 'veryaquafaba', kind: 'positioning' },
});
// 3. Existing recipes (EN text) so the writer stays consistent with them.
const { contentPages } = await import('../../data/pages/content-pages.js');
const { RECIPE_TO_APPLICATION } = await import('../../data/applications/ui.js');
for (const [tk, app] of Object.entries(RECIPE_TO_APPLICATION)) {
  const route = `/aquafaba-recipes/${tk.replace('recipe:', '')}/`;
  const page = contentPages[route];
  if (!page) continue;
  docs.push({
    document_id: `veryaquafaba-recipe-${app}`, title: page.hero?.title, source_type: 'site', source_url: `https://veryaquafaba.com${route}`,
    content: page.sections.map((s) => `${s.title ? s.title + ': ' : ''}${strip(s.html)}`).join('\n'),
    metadata: { project: 'veryaquafaba', application: app, kind: 'recipe', locale: 'en' },
  });
}
// 4. Validated copy (after both audits) as approved examples for the next batches.
if (withApproved) {
  const log = fs.existsSync(path.join(ROOT, 'data/applications/generation-log.json')) ? readJson(path.join(ROOT, 'data/applications/generation-log.json')) : {};
  for (const locale of LOCALES) {
    const file = path.join(ROOT, 'data/applications', `copy.${locale}.json`);
    if (!fs.existsSync(file)) continue;
    const copy = readJson(file);
    for (const [app, e] of Object.entries(copy)) {
      const l = log[`${locale}/${app}`];
      if (l?.status !== 'valid' || l?.audit2 !== 'pass') continue;
      docs.push({
        document_id: `veryaquafaba-copy-${locale}-${app}`, title: `Approved copy ${locale}/${app}`, source_type: 'approved_copy',
        content: [e.answer, ...e.sections.map((s) => `${s.title}: ${strip(s.html)}`), ...e.faq.map((f) => `Q: ${f.q} A: ${f.a}`)].join('\n'),
        metadata: { project: 'veryaquafaba', application: app, locale, kind: 'approved_copy' },
      });
    }
  }
}

console.log(`${docs.length} doc(s) for corpus ${CORPUS}`);
if (dry) { for (const d of docs) console.log(`- ${d.document_id} (${d.content.length} chars)`); process.exit(0); }
requireToken();
const r = await fetch(`${TONTIN_URL}/api/internal/rag/ingest`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'X-Internal-Key': process.env.TONTIN_TOKEN_EMBED || process.env.TONTIN_TOKEN },
  body: JSON.stringify({ corpus: CORPUS, docs, approved: true, replace: true }),
});
const data = await r.json().catch(() => ({}));
console.log(r.status, JSON.stringify(data).slice(0, 300));
process.exitCode = r.ok && data.ok ? 0 : 1;
