// Similarity between sibling pages of the same language (library rule: pages built on one
// template must differ in their own content). Compares the 4-grams of the visible copy of
// every pair of pages under the same section, as a Jaccard percentage.
// Usage: node scripts/applications/check-similarity.mjs [http://localhost:3058] [--max 35]
import fs from 'node:fs';

const BASE = process.argv.find((a) => a.startsWith('http')) || 'http://localhost:3058';
const i = process.argv.indexOf('--max');
const MAX = i < 0 ? 35 : Number(process.argv[i + 1]);
const routes = JSON.parse(fs.readFileSync('data/routes.json', 'utf8'));
const SECTIONS = ['/resources/professional/', '/de/ressourcen/profis/', '/fr/ressources/professionnels/', '/nl/bronnen/professionals/', '/resources/reference/', '/de/ressourcen/wissen/', '/fr/ressources/reference/', '/nl/bronnen/kennis/', '/resources/egg-substitutes/', '/de/ressourcen/ei-ersatz/', '/fr/ressources/substitut-oeuf/', '/nl/bronnen/ei-vervanger/', '/resources/where-to-buy/', '/de/ressourcen/wo-kaufen/', '/fr/ressources/ou-acheter/', '/nl/bronnen/waar-kopen/', '/resources/applications/', '/de/ressourcen/anwendungen/', '/fr/ressources/applications/', '/nl/bronnen/toepassingen/'];
const text = (h) => (h.match(/<article[\s\S]*?<\/article>/)?.[0] || h).replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const grams = (t) => { const w = t.split(' '); return new Set(Array.from({ length: Math.max(0, w.length - 3) }, (_, k) => w.slice(k, k + 4).join(' '))); };
const jaccard = (a, b) => { let hit = 0; for (const g of a) if (b.has(g)) hit++; return Math.round((hit / (a.size + b.size - hit)) * 100); };

let worst = 0; let bad = 0;
for (const root of SECTIONS) {
  const pages = routes.filter((r) => r.startsWith(root) && r !== root);
  if (pages.length < 2) continue;
  const docs = new Map();
  for (const r of pages) docs.set(r, grams(text(await (await fetch(BASE + r)).text())));
  const scores = [];
  for (let a = 0; a < pages.length; a++) for (let b = a + 1; b < pages.length; b++) {
    const s = jaccard(docs.get(pages[a]), docs.get(pages[b]));
    scores.push([s, pages[a], pages[b]]);
    if (s > MAX) { bad++; console.log(`HIGH ${s}% ${pages[a]} vs ${pages[b]}`); }
    worst = Math.max(worst, s);
  }
  scores.sort((x, y) => y[0] - x[0]);
  const mean = Math.round(scores.reduce((t, s) => t + s[0], 0) / scores.length);
  console.log(`${root} pages=${pages.length} min=${scores.at(-1)[0]}% max=${scores[0][0]}% mean=${mean}%  (worst pair: ${scores[0][1].split('/').at(-2)} vs ${scores[0][2].split('/').at(-2)})`);
}
console.log(`\nworst pair overall: ${worst}%, over ${MAX}%: ${bad}`);
process.exitCode = bad ? 1 : 0;
