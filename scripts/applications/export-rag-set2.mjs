// Exports the approved set-2 pages as RAG documents for Tontin's `veryaquafaba` corpus,
// one JSON per batch under seo/rag/ (gitignored). The text is the same citable text the
// site serves at /llms-full.txt (figures with source and date), split per page.
// The ingestion itself (POST /api/internal/rag/ingest, X-Internal-Key) is run by the user,
// never by this script: it only writes the payload.
// Usage: node scripts/applications/export-rag-set2.mjs <batch> [http://localhost:3058] [pathPrefix ...]
// (Git Bash on Windows rewrites arguments that start with "/": run it with MSYS_NO_PATHCONV=1.)
//   e.g. node scripts/applications/export-rag-set2.mjs tanda-1 http://localhost:3058 /resources/applications/meringue/ /de/ressourcen/anwendungen/baiser/
import fs from 'node:fs';

const [batch, ...rest] = process.argv.slice(2);
if (!batch) { console.error('usage: export-rag-set2.mjs <batch> [base] [pathPrefix ...]'); process.exit(1); }
const BASE = rest.find((a) => a.startsWith('http')) || 'http://localhost:3058';
const prefixes = rest.filter((a) => a.startsWith('/'));
const SITE = 'https://veryaquafaba.com';

const full = await (await fetch(`${BASE}/llms-full.txt`)).text();
const docs = full.split('\n---\n').map((chunk) => chunk.trim()).filter((c) => c.startsWith('#'))
  .map((text) => {
    const url = text.match(/^URL: (\S+)$/m)?.[1] || '';
    const path = url.replace(SITE, '');
    return {
      document_id: `veryaquafaba-set2-${batch}-${path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'root'}`,
      title: text.split('\n')[0].replace(/^# /, ''),
      url,
      locale: text.match(/^Language: (\w+)$/m)?.[1] || 'en',
      text,
      approved: false, // the user approves in Tontin after reading
      metadata: { batch, source: 'llms-full.txt', exported: new Date().toISOString().slice(0, 10) },
    };
  })
  .filter((d) => !prefixes.length || prefixes.some((p) => d.url.replace(SITE, '').startsWith(p)));

if (/[—–]/.test(JSON.stringify(docs))) { console.error('em/en dash in the export, fix the source first'); process.exit(1); }
fs.mkdirSync('seo/rag', { recursive: true });
const out = `seo/rag/veryaquafaba-set2-${batch}.json`;
fs.writeFileSync(out, JSON.stringify({ corpus: 'veryaquafaba', replace: true, documents: docs }, null, 2));
console.log(`${docs.length} documents -> ${out}`);
for (const d of docs) console.log(`  ${d.locale} ${d.url}`);
