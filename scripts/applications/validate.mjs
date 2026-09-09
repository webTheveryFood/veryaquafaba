// Mechanical validation (audit 1) of Tontin-generated copy for one application
// page. Shared by generate-copy.mjs (gate before saving, field-level repair)
// and audit-copy.mjs. Returns problems as { path, message, structural }:
// `path` is the JSON path the repair step must rewrite; `structural` means the
// shape is wrong and the page has to be generated again.
// Rules (plan + LIBRERIA DE DATA): no digits and no spelled-out numbers (the
// app renders every figure), no em/en dash, no competitor brands, no
// placeholders, no unsupported claims (powder preparation, cost, shelf-life
// comparisons), expected shape, keyword present, sane language.
import fs from 'node:fs';

export const LOCALES = ['en', 'de', 'fr', 'nl'];
export const APPS = ['meringue', 'chocolate-mousse', 'mayonnaise', 'baking', 'cocktails', 'macarons'];
export const SECTION_KEYS = ['liquid', 'powder', 'when', 'pro'];

// Post-process from LIBRERIA DE DATA/referencia/regla-no-guion-largo.md: em/en dash
// never survives generation; the sentence is rewritten with a comma.
export function noEmdash(text) {
  return String(text)
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/,\s*,/g, ',')
    .replace(/\(\s*,\s*/g, '(')
    .replace(/,\s*\)/g, ')')
    .replace(/\s+,/g, ',');
}

export const COMPETITORS = ['yumgo', 'oggs', 'saheli', 'casa amella', 'vegg white', 'fee foam', 'fee brothers', 'onego', "bob's red mill", 'just egg', 'ms flip'];

// Spelled-out numbers are figures too. "two/deux/zwei/twee" are deliberately
// absent: "both formats" ("les deux formats") is idiom, not a figure; the LLM
// audit and Claude's read catch a real "two egg whites".
const NUMERALS = {
  en: ['zero', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'fifteen', 'twenty', 'thirty', 'forty', 'fifty', 'hundred', 'thousand', 'half', 'third', 'quarter', 'double', 'triple'],
  de: ['null', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'fünfzehn', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'hundert', 'tausend', 'hälfte', 'halbe', 'drittel', 'viertel', 'doppelt', 'dreifach'],
  fr: ['zéro', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'quinze', 'vingt', 'trente', 'quarante', 'cinquante', 'cent', 'mille', 'moitié', 'demi', 'tiers', 'quart', 'double', 'triple'],
  nl: ['nul', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'elf', 'twaalf', 'vijftien', 'twintig', 'dertig', 'veertig', 'vijftig', 'honderd', 'duizend', 'helft', 'halve', 'derde', 'kwart', 'dubbel', 'driedubbel'],
};

// The only digits allowed in copy: the pack names whose equivalence is
// published on the Products page (facts with a source, rendered in the table anyway).
const PACK_TOKENS = /\b(1 ?L|200 ?g|1 ?T)\b/g;

// Claims the site cannot back (facts.json has them as null, or no source at all).
const UNSUPPORTED = [
  [/dispers|reconstitu|dissol|dilu|r[ée]hydrat|rehydrat|anr[üu]hr|aufl[öo]s|aufgel[öo]st|oplos|aanmaak|aangemaakt/i, 'powder preparation (reconstitution) is not published'],
  // kosten(?!los|loos): "kostenlose Muster" / "kosteloos" mean free samples, not a cost claim.
  [/[ée]conomi|co[uû]t|\bcost|cheap|\bprice|\bprix|preis|g[üu]nstig|kosten(?!los|loos)|goedkoop|prijs|budget|rentab|sparen|bespar|savings/i, 'price or cost claim'],
  [/plus longtemps|longer shelf|l[äa]nger haltbar|langer houdbaar|durée de conservation (plus|prolong)|conservation prolong|longue conservation|conserve plus|extended shelf|shelf life of|l[äa]ngere haltbarkeit|langere houdbaarheid/i, 'shelf-life comparison or duration is not published'],
  [/gaspillage|\bwaste\b|verschwendung|verspilling|derroche/i, 'waste-reduction claim (not published)'],
  [/facile à préparer|easy to prepare|einfach zuzubereiten|makkelijk te bereiden|simple à préparer/i, 'preparation ease claim (preparation not published)'],
  [/optimal|\brecord\b|meilleurs? résultats?|meilleure option|best results?|beste ergebnisse|beste resultaten|texture parfaite|perfect texture|perfekte textur|perfecte textuur|stabilité optimale|en un clin d'œil|temps record/i, 'superlative claim (not backed)'],
  [/se conserve au frais|conserver au (frais|réfrigérateur)|à conserver au réfrigérateur|keep refrigerated|store (it )?refrigerated|im kühlschrank (auf)?bewahr|koel bewaren|in de koelkast bewaren/i, 'storage condition claim (the product is shelf-stable before opening; after opening see the technical sheet)'],
  [/guarantee|garanti|garantie|garantier|gewährleist|waarborg/i, 'guarantee wording (no guarantees)'],
  [/m[êe]mes? [ée]tapes|same steps|gleichen schritte|dezelfde stappen|comme (pour )?le liquide|like the liquid|wie (bei|mit) der fl[üu]ssig|zoals (bij )?de vloei|[ée]tapes?[^.]{0,40}communes|steps?[^.]{0,30}(common|identical)|schritte[^.]{0,30}(gleich|identisch)|stappen[^.]{0,30}(gelijk|hetzelfde|identiek)/i, 'implies the powder is processed like the liquid (preparation not published)'],
];

const STOPWORDS = {
  en: ['the', 'and', 'with', 'for', 'of'],
  de: ['und', 'der', 'die', 'das', 'mit', 'für'],
  fr: ['le', 'la', 'les', 'et', 'de', 'pour'],
  nl: ['de', 'het', 'een', 'en', 'met', 'voor'],
};

const ALLOWED_TAG = /^<\/?(p|ul|li|strong)>$/;
const PLACEHOLDER = /\[[^\]]*\]|\{\{|\$X|TODO|lorem|xxx/i;

export const strip = (html) => String(html ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const words = (text) => strip(text).split(/\s+/).filter(Boolean);

// Every string of the entry with its JSON path (sections[1].html, faq[0].a, ...).
export function allStrings(entry) {
  const out = [];
  const walk = (v, p) => {
    if (typeof v === 'string') out.push([p, v]);
    else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}[${i}]`));
    else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => walk(x, p ? `${p}.${k}` : k));
  };
  walk(entry, '');
  return out;
}

/** @returns {{ path: string, message: string, structural: boolean }[]} */
export function validateCopy(entry, locale, app, { keyword, h1, title } = {}) {
  const problems = [];
  const push = (path, message, structural = false) => problems.push({ path, message, structural });
  if (!entry || typeof entry !== 'object') return [{ path: '', message: 'entry is not an object', structural: true }];

  // Shape
  if (!entry.seo?.description) push('seo.description', 'missing');
  if (typeof entry.answer !== 'string' || !entry.answer.trim()) push('answer', 'missing');
  if (!Array.isArray(entry.sections) || entry.sections.length !== 4) push('sections', 'must have exactly 4 items', true);
  else entry.sections.forEach((s, i) => {
    if (s.key !== SECTION_KEYS[i]) push(`sections[${i}].key`, `must be ${SECTION_KEYS[i]} (got ${s.key})`, true);
    if (!s.title) push(`sections[${i}].title`, 'missing');
    const n = words(s.html || '').length;
    const min = s.key === 'when' ? 50 : 70; // the decision list is bullets, shorter by nature
    if (n < min || n > 220) push(`sections[${i}].html`, `${n} words (expected ${min}-220)`);
    const bad = (s.html || '').match(/<[^>]+>/g)?.filter((t) => !ALLOWED_TAG.test(t));
    if (bad?.length) push(`sections[${i}].html`, `disallowed HTML: ${[...new Set(bad)].slice(0, 3).join(' ')}`);
  });
  if (!Array.isArray(entry.faq) || entry.faq.length < 4 || entry.faq.length > 6) push('faq', 'must have 4 to 6 items', true);
  else entry.faq.forEach((f, i) => {
    if (!f.q || !f.a) push(`faq[${i}]`, 'needs q and a', true);
    if (/<[^>]+>/.test(f.a || '')) push(`faq[${i}].a`, 'must be plain text');
    if (words(f.a || '').length < 15) push(`faq[${i}].a`, 'too short');
  });
  if (!entry.relatedLabel) push('relatedLabel', 'missing');

  // Length: models cannot count characters; 100 fits two sentences, 165 is the SERP cap.
  const desc = entry.seo?.description || '';
  if (desc && desc.length > 165) push('seo.description', `too long (${desc.length} characters): shorten to at most twenty words, keep the keyword`);
  else if (desc && desc.length < 100) push('seo.description', `too short (${desc.length} characters): make it two short sentences with the keyword`);

  // Content rules over every string
  const numerals = NUMERALS[locale] || [];
  for (const [path, s] of allStrings(entry)) {
    const digits = s.replace(PACK_TOKENS, '').match(/\d[\d.,]*/g);
    if (digits) push(path, `contains a digit (${[...new Set(digits)].slice(0, 4).join(' ')})`);
    if (/[—–]/.test(s)) push(path, 'contains an em/en dash');
    if (PLACEHOLDER.test(s)) push(path, 'placeholder text');
    const plain = strip(s);
    const low = ` ${plain.toLowerCase()} `;
    for (const c of COMPETITORS) if (low.includes(` ${c} `) || low.includes(` ${c},`)) push(path, `names a competitor (${c})`);
    for (const n of numerals) if (new RegExp(`(^|[^a-zà-ÿ])${n}([^a-zà-ÿ]|$)`, 'i').test(low)) push(path, `spelled-out number "${n}"`);
    for (const [re, why] of UNSUPPORTED) { const m = re.exec(plain); if (m) push(path, `${why} ("${m[0]}")`); }
    if (/very aquafaba/i.test(s) && !/VERY AQUAFABA/.test(s)) push(path, 'brand must be written VERY AQUAFABA');
  }

  // Language sanity: the sections must contain the locale's stopwords.
  const body = (entry.sections || []).map((s) => strip(s.html)).join(' ').toLowerCase();
  const hits = (STOPWORDS[locale] || []).filter((w) => new RegExp(`\\b${w}\\b`).test(body)).length;
  if (body && hits < 2) push('sections', `language check failed for ${locale} (stopword hits ${hits})`, true);

  // Keyword: in the hand-written title or h1 (manual), and somewhere in the copy (repairable via answer).
  if (keyword) {
    const k = keyword.toLowerCase();
    if (!(String(title || '').toLowerCase().includes(k) || String(h1 || '').toLowerCase().includes(k))) push('title', `keyword "${keyword}" not in title/h1 (ui.js)`, true);
    const inCopy = [entry.answer, desc, ...(entry.sections || []).map((s) => s.html)].some((t) => strip(t).toLowerCase().includes(k));
    if (!inCopy) push('answer', `keyword "${keyword}" missing from answer/description/sections: use it in the answer`);
  }
  return problems;
}

export const formatProblems = (list) => list.map((p) => `${p.path}: ${p.message}`);

export function sanitizeEntry(entry) {
  const walk = (v) => {
    if (typeof v === 'string') return noEmdash(v).trim();
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(entry);
}

// JSON path helpers (sections[1].html, faq[0].a, seo.description).
const segments = (p) => [...p.matchAll(/([^.[\]]+)|\[(\d+)\]/g)].map((m) => (m[2] !== undefined ? Number(m[2]) : m[1]));
export const getPath = (obj, p) => segments(p).reduce((o, s) => (o == null ? undefined : o[s]), obj);
export function setPath(obj, p, value) {
  const segs = segments(p);
  let o = obj;
  for (const s of segs.slice(0, -1)) { if (o[s] == null) o[s] = typeof segs[segs.indexOf(s) + 1] === 'number' ? [] : {}; o = o[s]; }
  o[segs.at(-1)] = value;
}

export const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
export const writeJson = (file, data) => fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);

export async function loadTitles() {
  const mod = await import('../../data/applications/ui.js');
  return mod.TITLES;
}
