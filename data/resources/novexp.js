import facts from '../applications/facts.json';
import bakeryFacts from './bakeries-facts.json';
import NOV_EN from './texts/novexp.en.json';
import FEST_EN from './texts/fest.en.json';
import FEST_DE from './texts/fest.de.json';
import FEST_FR from './texts/fest.fr.json';
import FEST_NL from './texts/fest.nl.json';
import { FEST_PHOTOS } from './fest-routes.js';
import CALC_EN from './texts/novcalc.en.json';
import TEXT_DE from './texts/novexp.de.json';
import TEXT_FR from './texts/novexp.fr.json';
import TEXT_NL from './texts/novexp.nl.json';
import CALC_DE from './texts/novcalc.de.json';
import CALC_FR from './texts/novcalc.fr.json';
import CALC_NL from './texts/novcalc.nl.json';
import { NOVEXP, NOVEXP_I18N } from './novexp-routes.js';
import { BAKERY_ROUTES, bakeryRoute } from './bakeries-routes.js';
import { derived, fillStrict, findRoute, fmtValue, whereToBuy, gramStyle } from '../applications/index';
import { UI, LOCALE_TAGS, APP_NAMES, PACK_LABELS } from '../applications/ui';
import { RES_UI } from './ui';
import { COUNTRY_SHOPS } from '../applications/country-shops';
import { purchaseHref, purchaseGoal, PURCHASE_REL } from '../applications/tracking';
import { localeChrome } from '../locale-chrome';
import { dated } from '../updated';
import { RESOURCES_ROOTS, TOOLS_ROOTS, APPLICATION_ROOTS, SECTION_ROOTS, cocktailsRoot, cocktailRoute, isProfessionalRoute } from '../applications/routes';
import { applicationJsonLd } from '../../lib/application-jsonld';
import { getPageModel, getTranslations } from '../../lib/page-registry';
import ROUTES from '../routes.json';

// November expansion, English pages (16 November 2026). The copy is FULL OPENAI's (SEO Programático MCP, generador
// openai), stored as it came in texts/novexp.en.json with its event id; Inés reviews it. This module only lays it out:
// paragraphs and lists, the hyphens of compound words the model dropped, each link on its own anchor text the first
// time that text appears, and the site's unit style. The H1 is the approved title of the plan of 3 and 4 November.
const ui = UI.en;
const R = RES_UI.en;
const products = findRoute('en', 'buy');
const contact = `${products}#contact`;
// The December pages (fest) go through the same builder; their copy is in texts/fest.en.json.
const GENERATED = { ...NOV_EN, ...FEST_EN };
// A link is placed only toward a page that is built (a December page waits for its copy, so nothing links to a 404).
const KNOWN = new Set([...ROUTES, ...Object.keys(GENERATED).filter((id) => NOVEXP[id]).map((id) => NOVEXP[id][0]), ...Object.values(NOVEXP_I18N).flatMap((pages) => Object.values(pages).map(([route]) => route))]);

// The figures the calculators work with, from the facts files.
const ratio = facts.shared.ratio;
const recon = facts.shared.powder_reconstitution;
const shelf = facts.shared.shelf_life;
const packs = Object.fromEntries(facts.shared.packs.map((p) => [p.id, p]));
const dose = facts.applications.cocktails.dose_g;
const perWhite = (n) => n / ratio.egg_white_liquid_g;
const TOOL_FACTS = {
  white: ratio.egg_white_liquid_g, egg: ratio.egg_liquid_g, yolk: ratio.egg_yolk_liquid_g, yolkOil: ratio.egg_yolk_oil_g,
  wPowder: recon.egg_white_powder_g, wWater: recon.egg_white_water_ml, wTotal: recon.egg_white_total_g,
  egPowder: recon.egg_white_powder_g * perWhite(ratio.egg_liquid_g), egWater: recon.egg_white_water_ml * perWhite(ratio.egg_liquid_g),
  ykPowder: recon.egg_white_powder_g * perWhite(ratio.egg_yolk_liquid_g), ykWater: recon.egg_white_water_ml * perWhite(ratio.egg_yolk_liquid_g),
  liquidCut: facts.shared.formulation.reduce_other_liquids_pct,
  meringueChill: facts.applications.meringue.process.find((p) => p.key === 'chill').value,
  pouches: [['powder_30g', 'small_pouch', CALC_EN.pack.pouch30], ['powder_200g', 'pouch', CALC_EN.pack.pouch200], ['powder_3kg', 'large_pouch', CALC_EN.pack.pouch3kg]]
    .map(([id, key, label]) => ({ g: packs[id].egg_whites * recon.egg_white_powder_g, href: BAKERY_ROUTES[key], label })),
  dose, drinksPerLitre: 1000 / dose,
  openedDays: shelf.liquid_opened_days, openedTemp: shelf.liquid_opened_temp_c, unopenedMonths: shelf.unopened_months,
  recipes: { meringue: facts.applications.meringue.dose_g, mousse: facts.applications['chocolate-mousse'].dose_g, macarons: facts.applications.macarons.dose_g, pavlova: bakeryFacts.pavlova.aquafaba_g },
  tetrapakWhites: packs.liquid_1l.egg_whites, pouch200Whites: packs.powder_200g.egg_whites,
};
// The words of the calculators (section title, labels, units, notes) live in texts/novcalc.<locale>.json.
const TOOL_TITLES = CALC_EN.toolTitle;

const pavlova = bakeryFacts.pavlova;
const marshmallows = bakeryFacts.marshmallows;
const macarons = facts.applications.macarons;
const meringue = facts.applications.meringue;
const mousse = facts.applications['chocolate-mousse'];
const mayonnaise = facts.applications.mayonnaise;
const macaronFormat = derived(macarons);
const freezing = facts.shared.freezing;
const processTokens = (recipe, prefix = '') => Object.fromEntries(
  recipe.process.map(({ key, value }) => [prefix + key, value]),
);
const cocktailTokens = {
  dose, ...processTokens(facts.applications.cocktails),
  drinks_per_litre: Math.floor(1000 / dose),
  dose_6: 6 * dose, dose_12: 12 * dose, dose_20: 20 * dose,
};
const meringueProcess = processTokens(meringue, 'meringue_');
const mousseProcess = processTokens(mousse, 'mousse_');
const bigBake = meringue.dose_g + pavlova.aquafaba_g + mousse.dose_g;
const consumerCopyTokens = {
  opened_days: shelf.liquid_opened_days, opened_temp: shelf.liquid_opened_temp_c, unopened_months: shelf.unopened_months,
  freeze_temp: freezing.temp_c, freeze_months: freezing.months,
  freeze_small_g: freezing.portion_g[0], freeze_large_g: freezing.portion_g[1],
  egg_white_g: ratio.egg_white_liquid_g, whole_egg_g: ratio.egg_liquid_g,
  two_eggs_g: 2 * ratio.egg_liquid_g, three_eggs_g: 3 * ratio.egg_liquid_g,
  powder_white_g: recon.egg_white_powder_g, powder_white_water: recon.egg_white_water_ml,
  prepared_white_g: recon.egg_white_total_g,
  liquid_cut: facts.shared.formulation.reduce_other_liquids_pct,
  liquid_pack: gramStyle(PACK_LABELS.en.liquid_1l),
  powder_pack: gramStyle(PACK_LABELS.en.powder_200g),
  mayo_g: mayonnaise.dose_g,
  big_bake_g: bigBake, menu_total: bigBake + mousse.dose_g, dessert_total: bigBake + macarons.dose_g,
  pavlova_g: pavlova.aquafaba_g, pavlova_cm: pavlova.diameter_cm,
  macaron_g: macarons.dose_g, macaron_yield: macarons.yield.count, macaron_mature: processTokens(macarons).mature,
  ...meringueProcess,
  meringue_g: meringue.dose_g, meringue_yield: meringue.yield.count,
  meringue_oven: meringueProcess.meringue_bake, meringue_hours: meringueProcess.meringue_bake_time,
  meringue_powder: derived(meringue).powderG, meringue_water: meringue.egg_whites * recon.egg_white_water_ml,
  ...mousseProcess,
  mousse_g: mousse.dose_g, mousse_yield: mousse.yield.count, mousse_2g: 2 * mousse.dose_g, mousse_4g: 4 * mousse.dose_g,
  mousse_choc_double: 2 * mousseProcess.mousse_chocolate, mousse_choc_quad: 4 * mousseProcess.mousse_chocolate,
  mousse_sugar_double: 2 * mousseProcess.mousse_sugar, mousse_sugar_quad: 4 * mousseProcess.mousse_sugar,
  mousse_fold: mousseProcess.mousse_fold_temp, mousse_set: mousseProcess.mousse_set_time,
  ...Object.fromEntries(Object.entries({ meringue, mousse, macaron: macarons, mayo: mayonnaise }).flatMap(([key, recipe]) => {
    const { batches1l, batches200g } = derived(recipe);
    return [[`${key}_batches_liquid`, batches1l], [`${key}_batches_powder`, batches200g]];
  })),
};
const numericFacts = (recipe) => Object.fromEntries(Object.entries(recipe)
  .filter(([, value]) => typeof value === 'number' || Array.isArray(value)));
const recipeTokens = {
  'D-103': cocktailTokens,
  'D-121': {
    liquid_g: macarons.dose_g,
    egg_whites: macaronFormat.eggWhites,
    powder_g: macaronFormat.powderG,
    water_ml: macaronFormat.eggWhites * recon.egg_white_water_ml,
    macarons: macarons.yield.count,
    shells: 2 * macarons.yield.count,
    batches_1l: macaronFormat.batches1l,
    ...Object.fromEntries([...macarons.process, ...macarons.ingredients].map(({ key, value }) => [key, value])),
  },
  'D-122': numericFacts(pavlova),
  'D-123': cocktailTokens,
  'D-124': numericFacts(marshmallows),
  'D-205': cocktailTokens,
  'D-207': cocktailTokens,
  'D-213': {
    ...Object.fromEntries(mayonnaise.ingredients.map(({ key, value }) => [key, value])),
    oil: processTokens(mayonnaise).oil,
  },
  'D-216': cocktailTokens,
};

function consumerCopy(id, locale) {
  const localePacks = PACK_LABELS[locale];
  const vars = {
    ...consumerCopyTokens,
    ...recipeTokens[id],
    ...(locale !== 'en' ? { liquid_pack: localePacks.liquid_1l, powder_pack: localePacks.powder_200g } : {}),
  };
  const values = Object.fromEntries(Object.entries(vars)
    .map(([key, value]) => [key, fmtValue(locale, value).replace(/^-(?=\d)/, '−')]));
  return (value) => fillStrict(value, values, id);
}

// Hero photos: the site's own pictures, by subject.
const U = '/wp-content/uploads/2026/10/';
const C = '/wp-content/uploads/2025/09/VERYAQUAFABA_RECIPES_HD_';
const W = '/wp-content/uploads/2026/where-to-buy/';
const PHOTOS = {
  'P4-042': `${U}egg-white.webp`, 'P4-061': `${U}whole-egg.webp`, 'P4-062': `${U}aquafaba-powder.webp`, 'P4-063': `${U}baking-powder.webp`,
  'P4-078': `${U}dacquoise.webp`, 'P4-079': `${U}marshmallows.webp`, 'P4-068': `${U}which-aquafaba-to-buy.webp`, 'P4-069': `${U}200g-pouch.webp`,
  'P4-073': `${U}before-you-use-aquafaba.webp`, 'P4-072': `${U}liquid-aquafaba.webp`, 'P4-075': `${U}aquafaba-composition.webp`,
  'P4-071': `${U}1l-tetrapak.webp`, 'P4-074': `${U}reference-index.webp`, 'P4-038': `${C}THE-SUNSET.webp`,
  'P4-040': `${C}GIN-FIZZ.webp`, 'P4-039': `${U}liquid-aquafaba-1t.webp`, 'P4-067': `${U}macarons-powder.webp`,
  'P4-059': `${U}egg-yolk.webp`, 'P4-060': `${U}how-to-whip-aquafaba.webp`, 'P4-056': `${U}aquafaba-vs-egg-white.webp`,
  'P4-025': `${C}WHITE-LADY.webp`, 'P4-029': `${U}aquafaba-food-manufacturing.webp`, 'P4-026': `${U}aquafaba-pastry-bakery.webp`,
  'P4-027': `${U}mayonnaise-powder.webp`, 'P4-028': `${C}GIN-FIZZ.webp`, 'P4-092': `${U}egg-white-supply.webp`, 'P4-031': `${U}aquafaba-wholesale.webp`,
  'P4-035': `${U}which-aquafaba-to-buy.webp`, 'P4-036': `${U}aquafaba-food-manufacturing.webp`, 'P4-049': `${U}liquid-aquafaba-10l.webp`,
  'P4-050': `${U}liquid-aquafaba-10l.webp`, 'P4-051': `${U}liquid-aquafaba-1t.webp`, 'P4-053': `${U}3kg-pouch.webp`, 'P4-054': `${U}liquid-aquafaba-1t.webp`,
  'P4-001': `${C}PISCO-SOUR.webp`, 'P4-002': `${C}AMARETTO-SOUR.webp`, 'P4-003': `${C}WHITE-LADY.webp`, 'P4-004': `${C}LA-ROSEE.webp`,
  'P4-006': `${C}AMARETTO-SOUR.webp`, 'P4-043': `${C}PISCO-SOUR.webp`, 'P4-044': `${C}WHITE-LADY.webp`, 'P4-045': `${C}LA-ROSEE.webp`,
  'P4-046': `${C}THE-SUNSET.webp`, 'P4-047': `${C}GIN-FIZZ.webp`, 'P4-007': `${C}AMARETTO-SOUR.webp`, 'P4-011': `${C}THE-SUNSET.webp`,
  'P4-008': `${C}LA-ROSEE.webp`, 'P4-009': `${C}GIN-FIZZ.webp`, 'P4-010': `${C}PISCO-SOUR.webp`, 'P4-012': `${C}WHITE-LADY.webp`,
  'P4-081': `${C}GIN-FIZZ.webp`, 'P4-013': `${U}meringue-powder.webp`, 'P4-014': `${U}raspberry-macarons.webp`, 'P4-015': `${U}aquafaba-pastry-bakery.webp`,
  'P4-016': `${U}baking-powder.webp`, 'P4-017': `${U}pavlova.webp`, 'P4-018': `${U}aquafaba-pastry-bakery.webp`,
  'P4-019': `${U}aquafaba-foodservices-central-kitchen.webp`, 'P4-020': `${U}catering-events.webp`, 'P4-021': `${U}aquafaba-foodservices-central-kitchen.webp`,
  'P4-022': `${U}chocolate-mousse-powder.webp`, 'P4-023': `${U}chocolate-mousse-powder.webp`, 'P4-032': `${U}egg-white-supply.webp`,
  'P4-033': `${U}aquafaba-food-manufacturing.webp`, 'P4-034': `${U}liquid-aquafaba-10l.webp`, 'P4-082': `${W}macaron-chocolate.webp`,
  'P4-083': `${W}macaron-pistachio.webp`, 'P4-084': `${W}macaron-orange.webp`, 'P4-085': `${W}macaron-lavender.webp`,
  'P4-086': `${W}macaron-pink.webp`, 'P4-087': `${W}macaron-coffee.webp`, 'P4-077': `${U}reference-index.webp`, 'P4-089': `${U}aquafaba-wholesale.webp`,
};
Object.assign(PHOTOS, FEST_PHOTOS);

// The branch of each route: breadcrumb parent and eyebrow.
function branch(route) {
  if (route.startsWith(TOOLS_ROOTS.en)) return [{ name: R.toolsPage.crumb, href: TOOLS_ROOTS.en }];
  if (route.startsWith(cocktailsRoot('en'))) return [{ name: R.applicationsName, href: APPLICATION_ROOTS.en }, { name: 'Cocktails', href: cocktailsRoot('en') }];
  if (route.startsWith(BAKERY_ROUTES.powder)) return [{ name: 'Aquafaba powder', href: BAKERY_ROUTES.powder }];
  if (route.startsWith(APPLICATION_ROOTS.en)) return [{ name: R.applicationsName, href: APPLICATION_ROOTS.en }];
  for (const section of ['professional', 'reference', 'egg-substitutes', 'where-to-buy']) {
    if (route.startsWith(SECTION_ROOTS[section].en)) return [{ name: R.sections[section], href: SECTION_ROOTS[section].en }];
  }
  return [];
}

// Compound words the generator wrote without their hyphen (the site keeps them, editorial guidelines).
const HYPHENS = [
  [/\bbag in box(es)?\b/gi, (m, s) => `${m[0] === 'B' ? 'B' : 'b'}ag-in-box${s || ''}`],
  [/\bready made\b/gi, (m) => `${m[0]}eady-made`],
  [/\begg free\b/gi, (m) => `${m[0]}gg-free`],
  [/\bbest before\b(?= date)/gi, (m) => `${m[0]}est-before`],
  [/\bpre ?batch(ed|es|ing)?\b/gi, (m, s) => `${m[0]}re-batch${s || ''}`],
  [/\bnon negotiable\b/gi, (m) => `${m[0]}on-negotiable`],
  [/\bcheck ins\b/gi, (m) => `${m[0]}heck-ins`],
  [/\bhotel wide\b/gi, (m) => `${m[0]}otel-wide`],
  [/\bco packer\b/gi, (m) => `${m[0]}o-packer`],
  // Unit style: cm and ml keep their space ("20 cm", "120 ml"); the generator sometimes drops it.
  [/(\d)(cm|ml)\b/g, '$1 $2'],
];
const fixWords = (s) => HYPHENS.reduce((t, [re, to]) => t.replace(re, to), String(s || ''));
// A FAQ answer is printed as text and copied into the FAQPage JSON-LD: the tags the model wrote in it are dropped.
const plain = (s) => fixWords(s).replace(/<[^>]+>/g, '');

// Blank-line paragraphs; a block that is already HTML (table, list) stays as it is; single breaks inside a paragraph
// are line breaks (a short list the model wrote line by line).
// Keep links to routes that exist in the site.
const knownLinks = (html) => html.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) => (
  KNOWN.has(href.split('#')[0]) ? `<a href="${href}">${inner}</a>` : inner
));
const blocks = (text) => knownLinks(fixWords(text)).split(/\n{2,}/).map((b) => b.trim()).filter(Boolean)
  .map((b) => (/^<(table|ul|ol|p|h3|div)\b/i.test(b) ? b : `<p>${b.replace(/\n+/g, '<br>')}</p>`)).join('\n');

// A Go further label is the anchor keyword as a short line: capital first letter, and a question mark on a question.
const linkLabel = (s) => { const t = s.charAt(0).toUpperCase() + s.slice(1); return /^Is /.test(t) && !t.endsWith('?') ? `${t}?` : t; };

// Each anchor goes on its own text, the first time that text appears outside a tag or a link; the rest go to Go further.
function placeLinks(htmls, anchors, route) {
  const left = [];
  for (const anchor of anchors) {
    const href = anchor.url;
    if (!href || href.split('#')[0] === route || !KNOWN.has(href.split('#')[0])) continue;
    const text = String(anchor.text || '').trim();
    const re = new RegExp(`(^|[^\\w-])(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\w-])`, 'i');
    let placed = false;
    for (let i = 0; i < htmls.length && !placed; i++) {
      let inLink = 0;
      htmls[i] = htmls[i].split(/(<[^>]+>)/).map((part) => {
        if (placed) return part;
        if (part.startsWith('<')) { if (/^<a\b/i.test(part)) inLink++; if (/^<\/a>/i.test(part)) inLink--; return part; }
        if (inLink || !text || !re.test(part)) return part;
        placed = true;
        return part.replace(re, (m, pre, word) => `${pre}<a href="${href}">${word}</a>`);
      }).join('');
    }
    if (!placed) left.push({ href, label: linkLabel(text) });
  }
  return left;
}

// The words that name a page of the site or of our network link to it, whatever the anchors list (which links a name
// once per page, and only the names the model chose): in the prose the first time the name appears on the page, in every
// table the first time it appears in that table. Our pages: the six cocktails and the whiskey sour, the five recipes, every
// pack, the six countries with a shop. Our network: the shops of those countries, with the purchase rel and click goal
// of every shop link (data/applications/tracking.js). Headings and existing links are left alone.
const SHOP_LINKS = { ...Object.fromEntries(Object.values(COUNTRY_SHOPS).filter((s) => s.name !== 'Amazon').map((s) => [s.name, s.href])) };
const AMAZON = { en: COUNTRY_SHOPS.US.href, de: COUNTRY_SHOPS.DE.href, fr: COUNTRY_SHOPS.DE.href, nl: COUNTRY_SHOPS.DE.href };
// English "Amazon" alone is the US shop, except where the copy names the German shop or the page is the Germany or
// Austria page of any language: Austria orders from Amazon Germany (country-shops.js).
const AMAZON_DE_NAMES = { 'Amazon Germany': COUNTRY_SHOPS.DE.href, 'Amazon in Germany': COUNTRY_SHOPS.DE.href, 'Amazon.de': COUNTRY_SHOPS.DE.href };
const AMAZON_DE_PAGE = /\/(germany|austria|allemagne|autriche|deutschland|oesterreich|duitsland|oostenrijk)\/$/;
const WORD_NAMES = {
  en: {
    recipes: { 'whiskey sour': '/aquafaba-recipes/whiskey-sour/', meringues: '/aquafaba-recipes/meringues/', 'chocolate mousse': '/aquafaba-recipes/chocolate-mousse/', macarons: '/aquafaba-recipes/macarons/', mayonnaise: '/aquafaba-recipes/mayonnaise/', pavlova: '/aquafaba-recipes/pavlova/' },
    packs: { '1L Tetrapak': '/resources/liquid-aquafaba/1l-tetrapak/', '10L bag-in-box': '/resources/liquid-aquafaba/10l-bag-in-box/', '1T IBC': '/resources/liquid-aquafaba/1t-ibc/', ...Object.fromEntries(['30g', '200g', '3kg'].flatMap((g) => [[`${g} pouch`, `/resources/aquafaba-powder/${g}-pouch/`], [`${g} powder pouch`, `/resources/aquafaba-powder/${g}-pouch/`]])) },
    countries: { 'United States': 'united-states', Germany: 'germany', Austria: 'austria', France: 'france', Switzerland: 'switzerland', Canada: 'canada' },
    countryRoot: '/resources/where-to-buy/',
    extra: { 'Send us an enquiry': '/buy-aquafaba/#contact' },
  },
  fr: {
    recipes: { 'whiskey sour': '/fr/aquafaba-recettes/whiskey-sour/', meringues: '/fr/aquafaba-recettes/meringues/', 'mousse au chocolat': '/fr/aquafaba-recettes/mousse-au-chocolat/', macarons: '/fr/aquafaba-recettes/macarons/', mayonnaise: '/fr/aquafaba-recettes/mayonnaise/', pavlova: '/fr/aquafaba-recettes/pavlova/' },
    packs: { 'Tetrapak de 1 L': '/fr/ressources/aquafaba-liquide/tetrapak-1l/', 'bag-in-box de 10 L': '/fr/ressources/aquafaba-liquide/bag-in-box-10l/', 'IBC de 1 T': '/fr/ressources/aquafaba-liquide/ibc-1t/', 'sachet de 30 g': '/fr/ressources/aquafaba-en-poudre/sachet-30g/', 'sachet de 200 g': '/fr/ressources/aquafaba-en-poudre/sachet-200g/', 'sachet de 3 kg': '/fr/ressources/aquafaba-en-poudre/sachet-3kg/' },
    countries: { 'États-Unis': 'etats-unis', Allemagne: 'allemagne', Autriche: 'autriche', France: 'france', Suisse: 'suisse', Canada: 'canada' },
    countryRoot: '/fr/ressources/ou-acheter/',
  },
  de: {
    recipes: { 'whiskey sour': '/de/rezepte/whiskey-sour/', baiser: '/de/rezepte/baiser/', schokoladenmousse: '/de/rezepte/schokoladenmousse/', macarons: '/de/rezepte/macarons/', mayonnaise: '/de/rezepte/mayonnaise/', pavlova: '/de/rezepte/pavlova/' },
    packs: { '1 L Tetrapak': '/de/ressourcen/fluessiges-aquafaba/1l-tetrapak/', '10 L Bag-in-Box': '/de/ressourcen/fluessiges-aquafaba/10l-bag-in-box/', '1 T IBC': '/de/ressourcen/fluessiges-aquafaba/1t-ibc/', '30 g Beutel': '/de/ressourcen/aquafaba-pulver/30g-beutel/', '200 g Beutel': '/de/ressourcen/aquafaba-pulver/200g-beutel/', '3 kg Beutel': '/de/ressourcen/aquafaba-pulver/3kg-beutel/', '3 kg Sack': '/de/ressourcen/aquafaba-pulver/3kg-beutel/' },
    countries: { USA: 'usa', 'Vereinigten Staaten': 'usa', Deutschland: 'deutschland', 'Österreich': 'oesterreich', Frankreich: 'frankreich', Schweiz: 'schweiz', Kanada: 'kanada' },
    countryRoot: '/de/ressourcen/wo-kaufen/',
  },
  nl: {
    recipes: { 'whiskey sour': '/nl/aquafaba-recepten/whiskey-sour/', meringues: '/nl/aquafaba-recepten/aquafaba-meringues/', chocolademousse: '/nl/aquafaba-recepten/chocolademousse/', macarons: '/nl/aquafaba-recepten/macarons/', mayonaise: '/nl/aquafaba-recepten/mayonaise/', pavlova: '/nl/aquafaba-recepten/pavlova/' },
    packs: { '1 L Tetrapak': '/nl/bronnen/vloeibare-aquafaba/1l-tetrapak/', '10 L bag-in-box': '/nl/bronnen/vloeibare-aquafaba/10l-bag-in-box/', '1 T IBC': '/nl/bronnen/vloeibare-aquafaba/1t-ibc/', ...Object.fromEntries(['30', '200'].flatMap((g) => [[`zakje van ${g} g`, `/nl/bronnen/aquafabapoeder/zakje-${g}g/`], [`zakjes van ${g} g`, `/nl/bronnen/aquafabapoeder/zakje-${g}g/`]])), 'zakje van 3 kg': '/nl/bronnen/aquafabapoeder/zakje-3kg/' },
    countries: { 'Verenigde Staten': 'verenigde-staten', Duitsland: 'duitsland', Oostenrijk: 'oostenrijk', Frankrijk: 'frankrijk', Zwitserland: 'zwitserland', Canada: 'canada' },
    countryRoot: '/nl/bronnen/waar-kopen/',
  },
};
// The dishes a page names on their own ("Mousse", "Cake with 3 eggs", "brownies"): each to its recipe, guide or page.
const MORE_WORDS = {
  en: {
    mousse: '/aquafaba-recipes/chocolate-mousse/', meringue: '/aquafaba-recipes/meringues/', mayo: '/aquafaba-recipes/mayonnaise/',
    cake: '/resources/applications/baking/', cakes: '/resources/applications/baking/',
    brownies: '/resources/egg-substitutes/egg-free-brownies/', muffins: '/resources/egg-substitutes/egg-free-muffins/',
    pancakes: '/resources/egg-substitutes/egg-free-pancakes/', brioche: '/resources/egg-substitutes/egg-free-brioche/',
    cookies: '/resources/egg-substitutes/egg-free-christmas-cookies/', 'meringue cookies': '/resources/applications/meringue-cookies/',
    'meringue buttercream': '/resources/applications/meringue-buttercream/', 'lemon meringue pie': '/resources/applications/lemon-meringue-pie/',
    marshmallows: '/resources/aquafaba-powder/marshmallows/', dacquoise: '/resources/aquafaba-powder/dacquoise/',
    'whipped cream': '/resources/applications/aquafaba-whipped-cream/', 'egg wash': '/resources/egg-substitutes/vegan-egg-wash/',
  },
  fr: {
    meringue: '/fr/aquafaba-recettes/meringues/', // not "mousse" alone: in French it is also the foam of a drink
    'gâteau': '/fr/ressources/applications/patisserie/', 'gâteaux': '/fr/ressources/applications/patisserie/',
    dacquoise: '/fr/ressources/aquafaba-en-poudre/dacquoise/', guimauves: '/fr/ressources/aquafaba-en-poudre/guimauves/',
  },
  de: {
    mousse: '/de/rezepte/schokoladenmousse/', meringues: '/de/rezepte/baiser/', kuchen: '/de/ressourcen/anwendungen/backen/',
    dacquoise: '/de/ressourcen/aquafaba-pulver/dacquoise/', marshmallows: '/de/ressourcen/aquafaba-pulver/marshmallows/',
  },
  nl: {
    mousse: '/nl/aquafaba-recepten/chocolademousse/', meringue: '/nl/aquafaba-recepten/aquafaba-meringues/',
    cake: '/nl/bronnen/toepassingen/bakken/', taart: '/nl/bronnen/toepassingen/bakken/', taarten: '/nl/bronnen/toepassingen/bakken/',
    dacquoise: '/nl/bronnen/aquafabapoeder/dacquoise/', marshmallows: '/nl/bronnen/aquafabapoeder/marshmallows/',
  },
};
const key = (name) => name.toLowerCase().replace(/\s+/g, ' ');
const shopTag = (href) => `<a href="${purchaseHref(href)}" rel="${PURCHASE_REL}" target="_blank" data-goal="${purchaseGoal(href)}">`;
const WORDS = Object.fromEntries(Object.entries(WORD_NAMES).map(([locale, w]) => {
  const internal = [
    ...Object.entries(facts.cocktail_recipes).filter(([, c]) => c?.name).map(([k, c]) => [c.name, cocktailRoute(locale, k)]),
    ...Object.entries(w.recipes), ...Object.entries(w.packs),
    ...Object.entries(w.countries).map(([n, slug]) => [n, `${w.countryRoot}${slug}/`]),
    ...Object.entries(w.extra || {}), ...Object.entries(MORE_WORDS[locale]),
  ].filter(([, href]) => KNOWN.has(href.split('#')[0])).map(([n, href]) => [key(n), { href, tag: `<a href="${href}">` }]);
  const shops = Object.entries({ ...SHOP_LINKS, Amazon: AMAZON[locale], ...AMAZON_DE_NAMES }).map(([n, href]) => [key(n), { href, tag: shopTag(href) }]);
  const map = new Map([...internal, ...shops]);
  const re = new RegExp(`(^|[^\\w-])(${[...map.keys()].sort((a, b) => b.length - a.length).map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ /g, '\\s')).join('|')})(?![\\w-])`, 'gi');
  return [locale, { map, re }];
}));
function wordLinks(htmls, locale, route) {
  const { map, re } = WORDS[locale];
  const pageUsed = new Set(htmls.flatMap((h) => [...String(h).matchAll(/<a\b[^>]*href="([^"]*)"/g)].map((m) => m[1])));
  return htmls.map((html) => {
    let inLink = 0; let inTable = false; let inTd = false; let inHead = false; let tableUsed = new Set();
    return String(html).split(/(<[^>]+>)/).map((part) => {
      if (part.startsWith('<')) {
        if (/^<a\b/i.test(part)) { inLink++; if (inTable) tableUsed.add((part.match(/href="([^"]*)"/) || [])[1]); } else if (/^<\/a>/i.test(part)) inLink--;
        else if (/^<table\b/i.test(part)) { inTable = true; tableUsed = new Set(); } else if (/^<\/table>/i.test(part)) inTable = false;
        else if (/^<td\b/i.test(part)) inTd = true; else if (/^<\/td>/i.test(part)) inTd = false;
        else if (/^<h[1-6]\b/i.test(part)) inHead = true; else if (/^<\/h[1-6]>/i.test(part)) inHead = false;
        return part;
      }
      if (inLink || inHead || (inTable && !inTd)) return part;
      const used = inTable ? tableUsed : pageUsed;
      return part.replace(re, (all, pre, name) => {
        const l = key(name) === 'amazon' && AMAZON_DE_PAGE.test(route) ? map.get('amazon germany') : map.get(key(name));
        if (!l || l.href === route || used.has(l.href)) return all;
        used.add(l.href);
        return `${pre}${l.tag}${name}</a>`;
      });
    }).join('');
  });
}

// An enquiry in the copy opens the form of the page itself, never the Products page: every one of these pages has the CTA
// dialog. A professional page opens the B2B form straight away, any other page the "Get in touch" choice (home or business).
const ownCta = (html, locale, route) => html.replace(new RegExp(`<a\\b[^>]*href="${findRoute(locale, 'buy')}#contact"[^>]*>`, 'g'),
  isProfessionalRoute(locale, route) ? '<a href="#enquiry-form" data-cta-open="contact" data-cta="contact-pro">' : '<a href="#contact" data-cta-open="contact" data-cta="contact-open">');

// The same words and enquiries on every other page under Resources, in the four languages (guides, children, topics,
// cocktails, bakeries, hubs): the body, the lead and the HTML FAQ answers. The original pages (home, Products, recipes,
// legal) are not under Resources and stay as they are. A page without the CTA dialog keeps its enquiry links.
const RESOURCE_PREFIXES = Object.values(RESOURCES_ROOTS);
export function addWordLinks(pages) {
  for (const [route, page] of Object.entries(pages)) {
    if (page.section === 'novexp' || !WORDS[page.locale] || !RESOURCE_PREFIXES.some((r) => route.startsWith(r))) continue;
    const slots = [];
    if (typeof page.hero?.html === 'string') slots.push([page.hero, 'html']);
    for (const s of page.sections || []) {
      if (typeof s.html === 'string') slots.push([s, 'html']);
      for (const i of s.items || []) if (typeof i.aHtml === 'string') slots.push([i, 'aHtml']);
    }
    for (const i of page.faq?.items || []) if (typeof i.aHtml === 'string') slots.push([i, 'aHtml']);
    const dialog = page.whereToBuy?.cta || page.stockists?.cta;
    wordLinks(slots.map(([o, k]) => o[k]), page.locale, route).forEach((h, n) => {
      const [o, k] = slots[n];
      o[k] = dialog ? ownCta(h, page.locale, route) : h;
    });
  }
}

function build(id, gen) {
  const [route, title, tool] = NOVEXP[id];
  const d = gen.data;
  const consumer = gen.audience === 'consumer';
  const copy = consumer ? consumerCopy(id, 'en') : (value) => value;
  const intro = blocks(copy(d.intro.texto));
  const sections = d.content.secciones.map((s, i) => ({ type: 'rich-text', id: `s${i + 1}`, title: fixWords(copy(s.h2)), html: blocks(copy(s.texto)) }));
  if (d.end.cierre) sections.at(-1).html += `\n${blocks(copy(d.end.cierre))}`;
  const htmls = [intro, ...sections.map((s) => s.html)];
  const left = placeLinks(htmls, d.end.anchors || [], route);
  const [introHtml, ...sectionHtml] = wordLinks(htmls, 'en', route).map((h) => ownCta(h, 'en', route));
  sections.forEach((s, i) => { s.html = sectionHtml[i]; });
  const parents = branch(route);
  const seen = new Set([route]);
  const related = [...left, ...parents.map((p) => ({ href: p.href, label: p.name })), { href: RESOURCES_ROOTS.en, label: ui.resourcesLink || 'Resources' }, { href: products, label: ui.productsLink }]
    .filter((l) => l.href && !seen.has(l.href) && seen.add(l.href));
  const seoTitle = consumer || title.length > 60 ? fixWords(copy(d.intro.title)) : title;
  const content = {
    locale: 'en', route, type: 'editorial', section: 'novexp', key: id,
    source: { event: gen.id, lote: gen.lote },
    ...(consumer ? { audience: 'consumer' } : {}),
    ...dated('en'),
    seo: { title: seoTitle, description: fixWords(copy(d.intro.description)), image: PHOTOS[id] },
    heroImage: PHOTOS[id],
    hero: { eyebrow: parents.at(-1)?.name || R.sections.professional, title, text: '', html: introHtml },
    sections: [
      ...(tool ? [{ type: 'nov-tool', id: 'tool', title: TOOL_TITLES[tool], kind: tool, facts: TOOL_FACTS, strings: CALC_EN, localeTag: 'en-GB' }] : []),
      ...sections,
    ],
    faq: { title: ui.faqTitle, items: (d.end.faq || []).map((f) => ({ q: plain(copy(f.question)), a: plain(copy(f.answer)) })) },
    whereToBuy: whereToBuy('en', null, contact, route, title),
    related: { title: ui.relatedTitle, items: related },
    breadcrumbs: [
      { name: ui.home, href: localeChrome('en').logoHref },
      { name: ui.resourcesName, href: RESOURCES_ROOTS.en },
      ...parents,
      { name: title, href: route },
    ],
  };
  content.jsonLd = applicationJsonLd(content);
  return gramStyle(content);
}

// Earlier translations supply rendered HTML. The November 26 consumer translations keep
// the English sources' fact tokens and link targets so the builder can localize them.
const TEXTS = {
  de: { ...TEXT_DE, ...FEST_DE },
  fr: { ...TEXT_FR, ...FEST_FR },
  nl: { ...TEXT_NL, ...FEST_NL },
};
const CALC = { de: CALC_DE, fr: CALC_FR, nl: CALC_NL };
const noTags = (s) => String(s || '').replace(/<[^>]+>/g, '');
// Keep links to registered pages.
const LIVE = new Set(ROUTES);
const liveLinks = (html) => String(html || '').replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, href, inner) => (LIVE.has(href.split('#')[0]) ? `<a href="${href}">${inner}</a>` : inner));

function branchOf(route, locale) {
  const r = RES_UI[locale];
  if (route.startsWith(TOOLS_ROOTS[locale])) return [{ name: r.toolsPage.crumb, href: TOOLS_ROOTS[locale] }];
  if (route.startsWith(cocktailsRoot(locale))) return [{ name: r.applicationsName, href: APPLICATION_ROOTS[locale] }, { name: APP_NAMES[locale].cocktails, href: cocktailsRoot(locale) }];
  if (route.startsWith(bakeryRoute(locale, 'powder'))) return [{ name: r.tabs['aquafaba-powder'], href: bakeryRoute(locale, 'powder') }];
  if (route.startsWith(APPLICATION_ROOTS[locale])) return [{ name: r.applicationsName, href: APPLICATION_ROOTS[locale] }];
  for (const section of ['professional', 'reference', 'egg-substitutes', 'where-to-buy']) {
    if (route.startsWith(SECTION_ROOTS[section][locale])) return [{ name: r.sections[section], href: SECTION_ROOTS[section][locale] }];
  }
  return [];
}

function localizedHref(href, locale) {
  const hash = href.indexOf('#');
  const path = hash === -1 ? href : href.slice(0, hash);
  const translated = getTranslations(getPageModel(path))[locale];
  return translated ? translated + href.slice(path.length) : href;
}

// The calculator's figures are the same in every language; only the pouch it names and links to is the language's own.
const toolFacts = (locale) => ({
  ...TOOL_FACTS,
  pouches: [['powder_30g', 'small_pouch', 'pouch30'], ['powder_200g', 'pouch', 'pouch200'], ['powder_3kg', 'large_pouch', 'pouch3kg']]
    .map(([id, key, label]) => ({ g: packs[id].egg_whites * recon.egg_white_powder_g, href: bakeryRoute(locale, key), label: CALC[locale].pack[label] })),
});

function buildTranslated(id, gen, locale) {
  const [route, title] = NOVEXP_I18N[locale][id];
  const tool = NOVEXP[id][2];
  const l = UI[locale];
  const r = RES_UI[locale];
  const buy = findRoute(locale, 'buy');
  const d = gen.data;
  const consumer = gen.audience === 'consumer';
  const copy = consumer ? consumerCopy(id, locale) : (value) => value;
  const parents = branchOf(route, locale);
  const seen = new Set([route]);
  const own = (d.end.anchors || []).filter((a) => a.url && LIVE.has(a.url.split('#')[0]))
    .map((a) => ({ href: consumer ? localizedHref(a.url, locale) : a.url, label: noTags(copy(a.text)) }));
  const related = [...own, ...parents.map((p) => ({ href: p.href, label: p.name })), { href: RESOURCES_ROOTS[locale], label: l.resourcesLink || l.resourcesName }, { href: buy, label: l.productsLink }]
    .filter((x) => x.href && !seen.has(x.href) && seen.add(x.href));
  const html = [d.intro.texto, ...d.content.secciones.map((s) => s.texto)].map((value) => (
    consumer
      ? liveLinks(blocks(copy(value)).replace(/href="([^"]*)"/g, (_, href) => `href="${localizedHref(href, locale)}"`))
      : liveLinks(value)
  ));
  const [heroHtml, ...sectionHtml] = wordLinks(html, locale, route).map((h) => ownCta(h, locale, route));
  const content = {
    locale, route, type: 'editorial', section: 'novexp', key: id,
    source: { event: gen.id, lote: gen.lote },
    ...(consumer ? { audience: 'consumer' } : {}),
    ...dated(locale),
    seo: { title: noTags(copy(d.intro.title)), description: noTags(copy(d.intro.description)), image: PHOTOS[id] },
    heroImage: PHOTOS[id],
    hero: { eyebrow: parents.at(-1)?.name || r.sections.professional, title, text: '', html: heroHtml },
    sections: [
      ...(tool ? [{ type: 'nov-tool', id: 'tool', title: CALC[locale].toolTitle[tool], kind: tool, facts: toolFacts(locale), strings: CALC[locale], localeTag: LOCALE_TAGS[locale] }] : []),
      ...d.content.secciones.map((s, i) => ({ type: 'rich-text', id: `s${i + 1}`, title: noTags(copy(s.h2)), html: sectionHtml[i] })),
    ],
    faq: { title: l.faqTitle, items: (d.end.faq || []).map((f) => ({ q: noTags(copy(f.question)), a: noTags(copy(f.answer)) })) },
    whereToBuy: whereToBuy(locale, null, `${buy}#contact`, route, title),
    related: { title: l.relatedTitle, items: related },
    breadcrumbs: [
      { name: l.home, href: localeChrome(locale).logoHref },
      { name: l.resourcesName, href: RESOURCES_ROOTS[locale] },
      ...parents,
      { name: title, href: route },
    ],
  };
  content.jsonLd = applicationJsonLd(content);
  return content;
}

// A translated page is built once its text is in and, for a tool page, once the calculator has the texts of that language.
const translated = Object.entries(TEXTS).flatMap(([locale, texts]) => Object.entries(texts)
  .filter(([id]) => NOVEXP_I18N[locale][id] && NOVEXP[id] && (!NOVEXP[id][2] || CALC[locale].toolTitle))
  .map(([id, gen]) => [NOVEXP_I18N[locale][id][0], buildTranslated(id, gen, locale)]));

// Only the topics whose copy has come back are built; the routes of the others wait.
export const novexpPages = Object.fromEntries([
  ...Object.entries(GENERATED).filter(([id]) => NOVEXP[id]).map(([id, gen]) => [NOVEXP[id][0], build(id, gen)]),
  ...translated,
]);
export const novexpBuilt = new Set(Object.keys(novexpPages));
