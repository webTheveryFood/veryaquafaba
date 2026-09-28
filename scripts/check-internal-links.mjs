// Internal-link audit for the built site.
// Crawls every route in data/routes.json on a running build and reports:
//  - <a href> values that depend on a redirect (308 trailing slash, legacy 301,
//    www host), are relative/broken, or return non-200
//  - canonical mismatches
//  - language switcher: each page must link exactly to its hreflang alternates
//  - recipe hubs: each must link directly to every recipe of its own locale
// Usage:  npx next build && npx next start -p 3058   (in another shell)
//         node scripts/check-internal-links.mjs [http://localhost:3058]
import fs from 'node:fs';

const BASE = process.argv[2] || 'http://localhost:3058';
const routes = JSON.parse(fs.readFileSync('data/routes.json', 'utf8'));
const ASSET = /\.(css|js|svg|webp|png|jpe?g|gif|ico|xml|txt|woff2?|json|pdf)(\?|$)/i;
const ROOTS = { en: '/aquafaba-recipes/', fr: '/fr/aquafaba-recettes/', de: '/de/rezepte/', nl: '/nl/aquafaba-recepten/' };
const loc = (r) => (r.startsWith('/es/') ? 'es' : r.startsWith('/fr/') ? 'fr' : r.startsWith('/de/') ? 'de' : r.startsWith('/nl/') ? 'nl' : 'en');

const links = new Map(); // key -> { path, tag, pages }
const canon = new Map();
const alternates = new Map();
let crawled = 0;

for (const r of routes) {
  const res = await fetch(BASE + r, { redirect: 'manual' });
  if (res.status !== 200) { console.log('PAGINA', r, '->', res.status, res.headers.get('location') || ''); continue; }
  const html = await res.text();
  crawled++;
  const c = html.match(/<link rel="canonical" href="([^"]+)"/);
  canon.set(r, c ? c[1] : null);
  alternates.set(r, [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((m) => m[2].replace('https://veryaquafaba.com', '')));
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]*)"/g)) {
    let h = m[1].replace(/&amp;/g, '&');
    let tag = '';
    if (/^(mailto:|tel:|javascript:|#)/.test(h)) continue;
    if (/^https?:\/\//.test(h)) {
      if (!/^https?:\/\/(www\.)?veryaquafaba\.com/.test(h) && !h.startsWith(BASE)) continue;
      if (/^https?:\/\/www\./.test(h)) tag = 'host www -> 301 al dominio canonico';
      h = h.replace(/^https?:\/\/[^/]+/, '');
    }
    if (ASSET.test(h)) continue;
    let path = h.split('#')[0].split('?')[0];
    if (!h.startsWith('/')) { path = new URL(h, BASE + r).pathname; tag = `relativo -> ${path}`; }
    const key = tag ? `${h}  [${tag}]` : h;
    if (!links.has(key)) links.set(key, { path, tag, pages: new Set() });
    links.get(key).pages.add(r);
  }
}
console.log(`paginas rastreadas: ${crawled}/${routes.length}, hrefs internos unicos: ${links.size}`);

const bad = [];
for (const [key, { path, tag, pages }] of links) {
  const res = await fetch(BASE + path, { redirect: 'manual' });
  const loc2 = res.headers.get('location');
  let issue = null;
  if (tag.startsWith('host www')) issue = tag;
  else if (res.status >= 300 && res.status < 400) issue = `${res.status} -> ${loc2}`;
  else if (res.status !== 200) issue = `${res.status}`;
  else if (!path.endsWith('/')) issue = 'sin trailing slash';
  if (issue) bad.push({ key, issue, n: pages.size, sample: [...pages].slice(0, 3).join(' ') });
}
bad.sort((a, b) => b.n - a.n);
console.log('\n=== HREFS QUE DEPENDEN DE REDIRECT / ROTOS ===');
if (!bad.length) console.log('ninguno');
for (const b of bad) console.log(`${b.key.padEnd(44)} ${b.issue.padEnd(40)} en ${String(b.n).padStart(2)} pags  ej: ${b.sample}`);

console.log('\n=== CANONICAL vs ruta ===');
let okc = 0;
for (const [r, c] of canon) { if (c === 'https://veryaquafaba.com' + r) okc++; else console.log('canonical distinta:', r, '->', c); }
console.log('canonical ok en', okc, 'paginas');

const byPage = new Map();
for (const [, { path, pages }] of links) for (const p of pages) { if (!byPage.has(p)) byPage.set(p, new Set()); byPage.get(p).add(path); }

console.log('\n=== SWITCHER: cada pagina enlaza exactamente a sus alternates hreflang? ===');
let okp = 0;
for (const [page, alts] of alternates) {
  if (loc(page) === 'es') continue;
  const set = byPage.get(page) || new Set();
  const missing = alts.filter((a) => a !== page && !set.has(a));
  if (missing.length) console.log(page.padEnd(44), 'NO enlaza a:', missing.join(' ')); else okp++;
}
console.log('paginas con switcher exacto:', okp);

console.log('\n=== HUBS: enlazan directo a todas las recetas de su idioma? ===');
for (const [, root] of Object.entries(ROOTS)) {
  const recipes = routes.filter((r) => r.startsWith(root) && r !== root);
  const set = byPage.get(root) || new Set();
  const missing = recipes.filter((r) => !set.has(r));
  console.log(`${root.padEnd(26)} recetas=${recipes.length} enlazadas directo=${recipes.length - missing.length} faltan=${missing.join(' ') || '-'}`);
}

console.log('\n=== RECETAS: enlazan a su hub? ===');
let badHub = 0;
for (const r of routes) {
  const l = loc(r);
  if (l === 'es') continue;
  const root = ROOTS[l];
  if (!r.startsWith(root) || r === root) continue;
  if (!(byPage.get(r) || new Set()).has(root)) { badHub++; console.log(r, 'no enlaza a su hub'); }
}
console.log('recetas sin link al hub:', badHub);

console.log('\n=== APLICACIONES: hub -> recursos -> 6 guias; guia -> hub + receta ===');
const APP_ROOTS = { en: '/resources/applications/', fr: '/fr/ressources/applications/', de: '/de/ressourcen/anwendungen/', nl: '/nl/bronnen/toepassingen/' };
let badApp = 0;
for (const [l, appRoot] of Object.entries(APP_ROOTS)) {
  // Set-2: the root itself is the applications index; one segment below, a guide; two, a child.
  const under = routes.filter((r) => r.startsWith(appRoot) && r !== appRoot);
  const depth = (r) => r.slice(appRoot.length).split('/').filter(Boolean).length;
  const apps = under.filter((r) => depth(r) === 1);
  const children = under.filter((r) => depth(r) === 2);
  const resRoot = appRoot.replace(/[^/]+\/$/, '');
  if (!(byPage.get(ROOTS[l]) || new Set()).has(resRoot)) { badApp++; console.log(`${ROOTS[l]} no enlaza a ${resRoot}`); }
  const hubSet = byPage.get(resRoot) || new Set();
  const missing = apps.filter((r) => !hubSet.has(r));
  if (apps.length !== 6 || missing.length) { badApp++; console.log(`${ROOTS[l]} guias=${apps.length} faltan en hub: ${missing.join(' ') || '-'}`); }
  if (routes.includes(appRoot)) {
    if (!hubSet.has(appRoot)) { badApp++; console.log(`${resRoot} no enlaza al indice ${appRoot}`); }
    const idx = byPage.get(appRoot) || new Set();
    const miss = apps.filter((r) => !idx.has(r));
    if (miss.length) { badApp++; console.log(`${appRoot} faltan guias: ${miss.join(' ')}`); }
  }
  for (const r of apps) {
    const set = byPage.get(r) || new Set();
    const toRecipe = [...set].some((p) => p.startsWith(ROOTS[l]) && p !== ROOTS[l]);
    if (!set.has(ROOTS[l]) || !toRecipe) { badApp++; console.log(r, 'sin link a', !set.has(ROOTS[l]) ? 'hub' : '', !toRecipe ? 'receta' : ''); }
    // Each child is linked from its guide and links back to it.
    for (const c of children.filter((x) => x.startsWith(r))) {
      if (!set.has(c)) { badApp++; console.log(r, 'no enlaza a su hija', c); }
      if (!(byPage.get(c) || new Set()).has(r)) { badApp++; console.log(c, 'no enlaza a su guia', r); }
    }
  }
}
console.log('problemas en aplicaciones:', badApp);
if (badApp) process.exitCode = 1;
process.exitCode = bad.length ? 1 : 0;
