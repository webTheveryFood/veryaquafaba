// Checks a translation of the cocktail texts against the English: same pages, sections, FAQ,
// steps and checks; the same {tokens} and the same number of links in every string (country
// links may switch from _en_ to the page's own language); no dashes; titles of 60 characters
// at most. Usage: node scripts/applications/check-cocktail-locale.mjs de
const locale = process.argv[2];
if (!locale) { console.error('usage: check-cocktail-locale.mjs <de|fr|nl>'); process.exit(2); }
const EN = (await import('../../data/resources/texts/cocktails.en.js')).default;
const T = (await import(`../../data/resources/texts/cocktails.${locale}.js`)).default;
let bad = 0;
const fail = (where, msg) => { bad++; console.log(`FAIL ${where}: ${msg}`); };
const tokens = (s) => [...String(s).matchAll(/\{([a-z0-9_]+)\}/g)].map((m) => m[1].replace(/_(en|de|fr|nl)_href$/, '_LOC_href')).sort().join(',');
const links = (s) => (String(s).match(/<a |\]\(/g) || []).length;
function compare(where, en, tr) {
  if (tr == null || tr === '') return fail(where, 'missing');
  if (tokens(en) !== tokens(tr)) fail(where, `tokens differ\n   en: ${tokens(en)}\n   ${locale}: ${tokens(tr)}`);
  if (links(en) !== links(tr)) fail(where, `links ${links(en)} in English, ${links(tr)} here`);
  if (/[–—]/.test(tr)) fail(where, 'en or em dash');
  if (/\s-\s/.test(tr.replace(/<[^>]+>/g, ''))) fail(where, 'hyphen used as a separator');
  if (/\d\s*-\s*\d/.test(tr.replace(/<[^>]+>|\{[^}]+\}|href="[^"]*"/g, ''))) fail(where, 'hyphen between numbers');
  if (/italicus/i.test(tr)) fail(where, 'brand of the bergamot liqueur');
  for (const m of String(tr).matchAll(/\{([a-z0-9_]+)_(en|de|fr|nl)_href\}/g)) if (m[2] !== locale) fail(where, `country link {${m[0]}} should use _${locale}_`);
}
function walk(where, en, tr) {
  if (typeof en === 'string') return compare(where, en, tr);
  if (Array.isArray(en)) {
    if (!Array.isArray(tr) || tr.length !== en.length) return fail(where, `expected ${en.length} items, got ${Array.isArray(tr) ? tr.length : 'none'}`);
    en.forEach((e, i) => walk(`${where}[${e?.id || i}]`, e, tr[i]));
    if (en[0]?.id) en.forEach((e, i) => { if (tr[i]?.id !== e.id) fail(`${where}[${i}]`, `section id ${tr[i]?.id} instead of ${e.id}`); });
    return;
  }
  if (en && typeof en === 'object') {
    if (!tr || typeof tr !== 'object') return fail(where, 'missing');
    for (const k of Object.keys(en)) { if (k === 'id') continue; walk(`${where}.${k}`, en[k], tr[k]); }
    for (const k of Object.keys(tr)) if (!(k in en)) fail(`${where}.${k}`, 'not in the English');
  }
}
walk(locale, EN, T);
for (const group of ['guides', 'topics', 'calculator', 'process']) for (const [k, p] of Object.entries(T[group] || {})) {
  if (p.title && p.title.length > 60) fail(`${group}.${k}.title`, `${p.title.length} characters (max 60)`);
}
console.log(bad ? `${bad} problem(s)` : `cocktails.${locale}.js matches the English structure`);
process.exit(bad ? 1 : 0);
