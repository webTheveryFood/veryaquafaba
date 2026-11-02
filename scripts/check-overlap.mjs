// 4-word overlap between sibling pages (editorial guideline, section 4): any pair over --max fails.
// Usage: npx next build && npx next start -p 3058   (other shell)
//        node scripts/check-overlap.mjs [http://localhost:3058] [--max 35] [/route/ ...]
// With no routes, checks every page of the bakery expansion against each other.
import { BAKERY_ROUTES } from '../data/resources/bakeries-routes.js';

const args = process.argv.slice(2);
const BASE = args.find((a) => a.startsWith('http')) || 'http://localhost:3058';
const i = args.indexOf('--max');
const MAX = i < 0 ? 35 : Number(args[i + 1]);
const routes = args.filter((a) => a.startsWith('/'));
const pages = routes.length ? routes : Object.values(BAKERY_ROUTES);

const grams = (words) => new Set(words.slice(3).map((_, k) => words.slice(k, k + 4).join(' ')));
async function words(route) {
  let html = await (await fetch(BASE + route)).text();
  html = html.replace(/<script[\s\S]*?<\/script>/g, '');
  html = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const text = html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').toLowerCase();
  return text.match(/[a-z0-9°']+/g) || [];
}

const G = Object.fromEntries(await Promise.all(pages.map(async (r) => [r, grams(await words(r))])));
let bad = 0;
for (const a of pages) {
  for (const b of pages) {
    if (a >= b) continue;
    const shared = [...G[a]].filter((g) => G[b].has(g)).length;
    const pct = Math.round(100 * shared / Math.min(G[a].size, G[b].size));
    const flag = pct > MAX ? '  <-- over' : '';
    if (pct > MAX) bad++;
    console.log(`${pct.toString().padStart(3)}%  ${a}  ~  ${b}${flag}`);
  }
}
console.log(`\npares: ${pages.length * (pages.length - 1) / 2}, sobre ${MAX}%: ${bad}`);
process.exitCode = bad ? 1 : 0;
