// Verifies the client corrections of 2026-09-21 against a running build:
// 1. no "1 part : 9 parts" anywhere; the per egg white rule "2 g + 30 ml = 32 g" printed;
//    the meringue batch reads 10 g powder + 150 ml water;
// 2. "at least 12 months" before opening, both formats;
// 3. opened liquid 3 to 4 days (application guides and the storage guide, 4 languages);
// 4. lineup 1 L / 10 L / 1 T and 30 g / 200 g / 3 kg on the guides and on Products;
// plus: no em/en dash and no digit-dash-digit range in the page content.
// Usage: node scripts/applications/check-client-2026-09-21.mjs [http://localhost:3058]
import { applicationRoute, APPLICATION_KEYS, APPLICATION_LOCALES } from '../../data/applications/routes.js';

const BASE = process.argv[2] || 'http://localhost:3058';
let bad = 0;
const fail = (where, msg) => { bad++; console.log(`FAIL ${where}: ${msg}`); };
const main = (html) => (html.match(/<main[\s\S]*?<\/main>/)?.[0] || html)
  .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const get = async (path) => { const r = await fetch(BASE + path, { redirect: 'manual' }); if (r.status !== 200) throw new Error(`HTTP ${r.status}`); return r.text(); };

const NINE = /\b1\s*(part|Teil|part de|deel)\b[^.]{0,40}\b9\s*(parts|Teile|parts d|delen)|\b9\s*(parts|Teile|delen)\b|1\s*:\s*9/i;
// Pack sizes only: the mayonnaise recipe yields about 500 g of sauce, which is not a pack.
const OLD_PACKS = /\b5 ?L\b|\b5 ?kg\b|500 ?g (pouch|beutel|sachet|zakje)|sachet de 500|zakje van 500/i;
const DASH_RANGE = /\d\s?[-‐‑‒–—]\s?\d/;
const RULE = {
  en: /2\s?g powder \+ 30 ml water = 32\s?g of aquafaba, equivalent to the same mass of liquid aquafaba\. 2\s?g of powder replaces 1 egg white/,
  de: /2 g Pulver \+ 30 ml Wasser = 32 g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba\. 2 g Pulver ersetzen 1 Eiweiß/,
  fr: /2 g de poudre \+ 30 ml d'eau = 32 g d'aquafaba, soit la même masse d'aquafaba liquide\. 2 g de poudre remplacent 1 blanc d'œuf/,
  nl: /2 g poeder \+ 30 ml water = 32 g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba\. 2 g poeder vervangt 1 eiwit/,
};
const AT_LEAST = { en: /at least 12 months/, de: /mindestens 12 Monate/, fr: /au moins 12 mois/, nl: /minimaal 12 maanden/ };
const OPENED = { en: /3 to 4 days/, de: /3 bis 4 Tage/, fr: /3 à 4 jours/, nl: /3 tot 4 dagen/ };
const PACKS = {
  en: [/10\s?L bag-in-box\s*= 330 egg whites/, /1\s?T IBC\s*= 33,000 egg whites/, /30\s?g pouch\s*= 15 egg whites/, /3\s?kg pouch\s*= 1,500 egg whites/],
  de: [/10 L Bag-in-Box\s*= 330 Eiweiße/, /30 g Beutel\s*= 15 Eiweiße/, /3 kg Sack\s*= 1\.500 Eiweiße/],
  fr: [/Bag-in-box de 10 L\s*= 330 blancs/, /Sachet de 30 g\s*= 15 blancs/, /Sac de 3 kg\s*= 1\s500 blancs/],
  nl: [/10 L bag-in-box\s*= 330 eiwitten/, /Zakje van 30 g\s*= 15 eiwitten/, /Zak van 3 kg\s*= 1\.500 eiwitten/],
};

for (const locale of APPLICATION_LOCALES) {
  for (const key of APPLICATION_KEYS) {
    const path = applicationRoute(locale, key);
    let text;
    try { text = main(await get(path)); } catch (e) { fail(path, e.message); continue; }
    if (NINE.test(text)) fail(path, `still mentions 1 part : 9 parts ("${text.match(NINE)[0]}")`);
    if (!RULE[locale].test(text)) fail(path, 'reconstitution rule 2 g + 30 ml = 32 g not printed');
    if (!AT_LEAST[locale].test(text)) fail(path, 'no "at least 12 months"');
    if (!OPENED[locale].test(text)) fail(path, 'no 3 to 4 days for the opened liquid');
    if (/3 (to|bis|à|tot) 5 (days|Tage|jours|dagen)/.test(text)) fail(path, 'still 3 to 5 days');
    if (OLD_PACKS.test(text)) fail(path, `old pack size ("${text.match(OLD_PACKS)[0]}")`);
    for (const re of PACKS[locale]) if (!re.test(text)) fail(path, `pack row missing: ${re}`);
    if (/[—–]/.test(text)) fail(path, 'em/en dash in content');
    if (DASH_RANGE.test(text)) fail(path, `dash used in a range ("${text.match(DASH_RANGE)[0]}")`);
  }
}

// Meringue, per batch by egg white count: 10 g powder + 150 ml water.
const mer = main(await get(applicationRoute('en', 'meringue')));
if (!/10\s?g powder \+ 150 ml water/.test(mer)) fail('/resources/applications/meringue/', 'batch 10 g powder + 150 ml water not printed');
if (!/Water for this batch\s*150 ml/.test(mer)) fail('/resources/applications/meringue/', 'table row "Water for this batch 150 ml" missing');

// Storage guide, 4 languages: 3 to 4 days, no 3 to 5.
const STORAGE = { en: '/aquafaba-recipes/how-to-store-and-freeze-aquafaba/', fr: '/fr/aquafaba-recettes/comment-conserver-congeler-laquafaba/', nl: '/nl/aquafaba-recepten/aquafaba-bewaren-invriezen/', de: '/de/rezepte/aquafaba-lagern-einfrieren/' };
for (const [locale, path] of Object.entries(STORAGE)) {
  const html = await get(path);
  if ((html.match(OPENED[locale]) || []).length === 0) fail(path, 'storage guide does not say 3 to 4 days');
  if (/3[–-]5 (days|jours|dagen|Tagen)/.test(html)) fail(path, 'storage guide still says 3 to 5 days');
}

// Products, 4 languages: new lineup, old sizes gone.
const PRODUCTS = {
  en: ['/buy-aquafaba/', /30g POUCH/, /3kg POUCH/, /10L BAG-IN-BOX/, /= 330 egg whites/, /= 1500 egg whites/, /= 15 egg whites/],
  de: ['/de/aquafaba-kaufen/', /30g BEUTEL/, /3kg SACK/, /10L BAG-IN-BOX/, /= 330 Eiweiße/],
  fr: ['/fr/acheter-aquafaba/', /30 g SACHET/, /3kg SAC/, /10L BAG-IN-BOX/, /= 330 blancs/],
  nl: ['/nl/aquafaba-kopen/', /30g ZAK/, /3kg ZAK/, /10L BAG-IN-BOX/, /= 330 eiwitten/],
};
for (const [locale, [path, ...res]] of Object.entries(PRODUCTS)) {
  const html = await get(path);
  for (const re of res) if (!re.test(html)) fail(path, `Products missing ${re}`);
  if (/500 ?g (POUCH|BEUTEL|SACHET|ZAK)|5kg (POUCH|SACK|SAC|ZAK)|5L BAG-IN-BOX/.test(html)) fail(path, 'Products still lists an old size');
}

// Machine-readable copy.
const full = await (await fetch(`${BASE}/llms-full.txt`)).text();
if (NINE.test(full)) fail('/llms-full.txt', 'still mentions 1 part : 9 parts');
if (/3 (to|bis|à|tot) 5 (days|Tage|jours|dagen)/.test(full)) fail('/llms-full.txt', 'still 3 to 5 days');
if (OLD_PACKS.test(full)) fail('/llms-full.txt', `old pack size ("${full.match(OLD_PACKS)[0]}")`);

console.log(bad ? `\n${bad} failures` : '\nclient corrections 2026-09-21 OK: 24 guides, 4 storage guides, 4 Products pages, llms-full');
process.exitCode = bad ? 1 : 0;
