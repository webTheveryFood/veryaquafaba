import facts from '../applications/facts.json';
import { PACK_LABELS } from '../applications/ui';
import { fmt, fmtValue } from '../applications/index';
import { bakeryRoute } from './bakeries-routes.js';

// The one comparison table of the site: every comparison page, for pastry or for bars, sets
// VERY AQUAFABA beside the other product on the same rows (client review, November 2026). The
// other brand's values come from facts.json and bakeries-facts.json; what its sources leave
// out reads "Not stated", never a guess. Sources are named, never linked.
const COPY = {
  en: {
    head: 'What you check', made: 'Made from', format: 'Format', dose: 'Dose', shelf: 'Shelf life', allergens: 'Allergens', packs: 'Packs', alcohol: 'Alcohol', source: 'Source',
    veryFormat: 'Liquid or powder',
    perWhite: '{liquid} g of liquid, or {powder} g of powder with {water} ml of water, per egg white',
    perDrink: '{dose} ml per drink, or {powder} g of powder with {water} ml of water',
    veryShelf: 'Sealed: at least {months} months at room temperature. Opened liquid: {days} days at {temp} °C. Opened powder: dry and closed until its best-before date',
    veryPacks: 'Liquid: {l1}, {l10} and {t1}. Powder: {p30} g, {p200} g and {p3} kg pouches',
    composition: "What's in VERY AQUAFABA", storage: 'and the storage guide', unopened: 'Unopened: {n} months.', wholeEgg: 'ml per whole egg',
  },
  de: {
    head: 'Prüfpunkt', made: 'Zutaten', format: 'Form', dose: 'Dosierung', shelf: 'Haltbarkeit', allergens: 'Allergene', packs: 'Gebinde', alcohol: 'Alkohol', source: 'Quelle',
    veryFormat: 'Flüssig oder Pulver',
    perWhite: '{liquid} g Flüssigkeit oder {powder} g Pulver mit {water} ml Wasser je Eiweiß',
    perDrink: '{dose} ml pro Drink oder {powder} g Pulver mit {water} ml Wasser',
    veryShelf: 'Verschlossen: mindestens {months} Monate bei Raumtemperatur. Flüssig, geöffnet: {days} Tage bei {temp} °C. Pulver, geöffnet: trocken und verschlossen bis zum Mindesthaltbarkeitsdatum',
    veryPacks: 'Flüssig: {l1}, {l10} und {t1}. Pulver: Beutel mit {p30} g, {p200} g und {p3} kg',
    composition: 'Zusammensetzung von VERY AQUAFABA', storage: 'und Hinweise zur Lagerung', unopened: 'Ungeöffnet: {n} Monate.', wholeEgg: 'ml pro ganzem Ei',
  },
  fr: {
    head: 'Point à vérifier', made: 'Composition', format: 'Forme', dose: 'Dose', shelf: 'Conservation', allergens: 'Allergènes', packs: 'Formats', alcohol: 'Alcool', source: 'Source',
    veryFormat: 'Liquide ou poudre',
    perWhite: '{liquid} g de liquide, ou {powder} g de poudre avec {water} ml d’eau, par blanc d’œuf',
    perDrink: '{dose} ml par cocktail, ou {powder} g de poudre avec {water} ml d’eau',
    veryShelf: 'Fermé : au moins {months} mois à température ambiante. Liquide ouvert : {days} jours à {temp} °C. Poudre ouverte : au sec et bien fermée jusqu’à sa date de durabilité minimale',
    veryPacks: 'Liquide : {l1}, {l10} et {t1}. Poudre : sachets de {p30} g, {p200} g et {p3} kg',
    composition: 'Composition de VERY AQUAFABA', storage: 'et conseils de conservation', unopened: 'Fermé : {n} mois.', wholeEgg: 'ml par œuf entier',
  },
  nl: {
    head: 'Wat u controleert', made: 'Samenstelling', format: 'Vorm', dose: 'Dosering', shelf: 'Houdbaarheid', allergens: 'Allergenen', packs: 'Verpakkingen', alcohol: 'Alcohol', source: 'Bron',
    veryFormat: 'Vloeibaar of poeder',
    perWhite: '{liquid} g vloeibare aquafaba, of {powder} g poeder met {water} ml water, per eiwit',
    perDrink: '{dose} ml per drankje, of {powder} g poeder met {water} ml water',
    veryShelf: 'Gesloten: minstens {months} maanden op kamertemperatuur. Vloeibaar, geopend: {days} dagen bij {temp} °C. Poeder, geopend: droog en gesloten bewaren tot de ten minste houdbaar tot-datum',
    veryPacks: 'Vloeibaar: {l1}, {l10} en {t1}. Poeder: zakjes van {p30} g, {p200} g en {p3} kg',
    composition: 'Samenstelling van VERY AQUAFABA', storage: 'en bewaaradvies', unopened: 'Ongeopend: {n} maanden.', wholeEgg: 'ml per heel ei',
  },
};

const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k]);

// What the VERY AQUAFABA column says whatever the page; only the dose follows the page's unit.
function veryCells(locale, doseVars) {
  const C = COPY[locale];
  const { ratio, powder_reconstitution: r, shelf_life: s, packs } = facts.shared;
  const L = PACK_LABELS[locale];
  const grams = (id) => packs.find((p) => p.id === id).egg_whites * r.egg_white_powder_g;
  // The French label opens with a capital: lower case inside the sentence.
  const pack = (key) => L[key].replace('Bag-in-box', 'bag-in-box');
  return {
    format: C.veryFormat,
    dose: doseVars
      ? fill(C.perDrink, doseVars)
      : fill(C.perWhite, { liquid: fmt(locale, ratio.egg_white_liquid_g, 0), powder: fmt(locale, r.egg_white_powder_g, 0), water: fmt(locale, r.egg_white_water_ml, 0) }),
    shelf: fill(C.veryShelf, { months: fmt(locale, s.unopened_months, 0), days: fmtValue(locale, s.liquid_opened_days), temp: fmtValue(locale, s.liquid_opened_temp_c) }),
    packs: fill(C.veryPacks, { l1: pack('liquid_1l'), l10: pack('bib_10l'), t1: pack('ibc_1t'), p30: fmt(locale, grams('powder_30g'), 0), p200: fmt(locale, grams('powder_200g'), 0), p3: fmt(locale, grams('powder_3kg') / 1000, 0) }),
    source: `<a href="${bakeryRoute(locale, 'composition')}">${C.composition}</a>, ${C.storage}`,
  };
}

// very: { made, allergens, alcohol? }; doseVars: { dose, powder, water } on a bar page, none on
// a pastry page; brands: [{ name, made, format, dose, shelf, allergens, packs, source, alcohol? }].
export function comparisonTable(locale, very, brands, doseVars) {
  const C = COPY[locale];
  const columns = [{ name: 'VERY AQUAFABA', ...very, ...veryCells(locale, doseVars) }, ...brands];
  const keys = ['made', 'format', 'dose', 'shelf', 'allergens', 'packs', ...(brands.some((b) => b.alcohol) ? ['alcohol'] : []), 'source'];
  const heads = [C.head, ...columns.map((c) => c.name)];
  return `<table class="va-guide-grid va-guide-grid--wrap va-guide-grid--sides">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${keys.map((k) => `<tr>${[C[k], ...columns.map((c) => c[k])].map((v, i) => `<td data-label="${heads[i]}">${v}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
}

// A pastry brand of bakeries-facts.json as table cells; word translates its English values.
export function foodBrand(locale, brand, word, source) {
  const C = COPY[locale];
  const unopened = brand.unopened_months ? `${C.unopened.replace('{n}', fmt(locale, brand.unopened_months, 0))} ` : '';
  return {
    name: brand.name,
    made: word(brand.label),
    format: word(brand.format),
    dose: brand.dose ? word(brand.dose) : `${fmt(locale, brand.ml_per_egg, 0)} ${C.wholeEgg}`,
    shelf: `${unopened}${word(brand.opened)}`,
    allergens: word(brand.allergens),
    packs: word(brand.formats),
    source,
  };
}
