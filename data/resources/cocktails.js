import facts from '../applications/facts.json';
import { localeChrome } from '../locale-chrome';
import {
  APPLICATION_ROOTS, RESOURCES_ROOTS, COCKTAIL_SLUGS, COCKTAIL_TOPIC_SLUGS, CHILD_KEYS,
  applicationRoute, cocktailRoute, cocktailChildRoute, cocktailTopicRoute, topicRoute,
} from '../applications/routes';
import { LOCALE_TAGS, UI, APP_NAMES, PACK_LABELS, ENQUIRY_FORM } from '../applications/ui';
import { DEFAULT_IMAGE, fmt, fmtValue, findRoute, source, whereToBuy, fillStrict, faqItems, gramStyle, packItems, storageRows } from '../applications/index';
import { RES_UI } from './ui';
import { siteTokens } from './topics';
import TEXTS_EN from './texts/cocktails.en.js';
import TEXTS_DE from './texts/cocktails.de.js';
import TEXTS_FR from './texts/cocktails.fr.js';
import TEXTS_NL from './texts/cocktails.nl.js';
import { COCKTAIL_PHOTOS } from './cocktail-photos.js';
import { cocktailTopicLinks, cocktailCards } from './section-links.js';

// Cocktail expansion (October 2026, English, then German, French and Dutch): a guide per cocktail of the VERY
// AQUAFABA recipe book with its quantity calculator and process sheet, plus the question
// pages beside them, all under the live cocktails guide. Every figure comes from
// facts.cocktail_recipes and the shared facts through the tokens below; the copy in
// texts/cocktails.<locale>.js never carries a number of its own. A page exists only where
// its slug (routes.js) and its text exist.

const TEXTS = { en: TEXTS_EN, de: TEXTS_DE, fr: TEXTS_FR, nl: TEXTS_NL };
const C = facts.cocktail_recipes;
const { ratio } = facts.shared;
const rec = facts.shared.powder_reconstitution;
const POWDER_PER_ML = ratio.egg_white_powder_g / ratio.egg_white_liquid_g; // 2 g of powder per 30 g of liquid
const WATER_PER_G = rec.egg_white_water_ml / rec.egg_white_powder_g; // 30 ml of water per 2 g of powder
const EXAMPLE = 40; // the Saturday-night example of the calculators and the powder page
const KEYS = Object.keys(COCKTAIL_SLUGS);
// Every cocktail of the set uses the same dose (recipe book): the question pages quote it.
const DOSE = C[KEYS[0]].dose_ml;

// Drinks a pack makes. Computed on whole numbers so 200 g at 1.33 g a drink gives 150, not 149.
const drinksLiquid = (packMl, dose) => Math.floor(packMl / dose + 1e-9);
const drinksPowder = (packG, dose) => Math.floor((packG * ratio.egg_white_liquid_g) / (dose * ratio.egg_white_powder_g) + 1e-9);

const PHOTOS = COCKTAIL_PHOTOS;
// Question pages borrow a cocktail photo: the pisco sour by default.
const TOPIC_PHOTOS = { 'how-to-make': PHOTOS['white-lady'], 'pre-batching': PHOTOS['the-sunset'] };
const topicPhoto = (key) => TOPIC_PHOTOS[key] || PHOTOS['pisco-sour'];

const has = (locale, map, key) => Boolean(map[key]?.[locale]);

// Tokens of the dose, the packs and the storage for a dose in ml, and of the recipe when given.
function doseTokens(locale, dose, recipe) {
  const powder = dose * POWDER_PER_ML;
  const t = {
    dose: fmt(locale, dose, 0),
    powder: fmt(locale, powder, 1),
    water: fmt(locale, powder * WATER_PER_G, 0),
    drinks_1l: fmt(locale, drinksLiquid(1000, dose), 0),
    drinks_10l: fmt(locale, drinksLiquid(10000, dose), 0),
    drinks_30g: fmt(locale, drinksPowder(30, dose), 0),
    drinks_200g: fmt(locale, drinksPowder(200, dose), 0),
    drinks_3kg: fmt(locale, drinksPowder(3000, dose), 0),
    ice: fmtValue(locale, C.method.ice_cubes),
    ex_batches: fmt(locale, EXAMPLE, 0),
    ex_dose: fmt(locale, dose * EXAMPLE, 0),
    ex_powder: fmt(locale, powder * EXAMPLE, 0),
    ex_water: fmt(locale, powder * WATER_PER_G * EXAMPLE, 0),
    ex_ice: fmtValue(locale, C.method.ice_cubes.map((n) => n * EXAMPLE)),
    ex_left_1l: fmt(locale, 1000 - dose * EXAMPLE, 0),
    p10: fmt(locale, powder * 10, 0),
    w10: fmt(locale, powder * WATER_PER_G * 10, 0),
  };
  for (const i of recipe?.ingredients || []) {
    t[i.key] = fmt(locale, i.value, 0);
    t[`ex_${i.key}`] = fmt(locale, i.value * EXAMPLE, 0);
  }
  // One pour of the pre-batch: every ingredient measured in ml (drops stay out).
  if (recipe) t.batch_pour = fmt(locale, recipe.ingredients.filter((i) => i.unit === 'ml').reduce((s, i) => s + i.value, 0), 0);
  return t;
}

function hrefTokens(locale) {
  const t = { cocktails_href: applicationRoute(locale, 'cocktails'), whiskey_recipe_href: findRoute(locale, 'recipe', 'recipe:whiskey-sour') };
  for (const key of KEYS) {
    if (!has(locale, COCKTAIL_SLUGS, key)) continue;
    t[`${key.replace(/-/g, '_')}_href`] = cocktailRoute(locale, key);
    t[`${key.replace(/-/g, '_')}_calc_href`] = cocktailChildRoute(locale, key, 'calculator');
  }
  for (const key of Object.keys(COCKTAIL_TOPIC_SLUGS)) if (has(locale, COCKTAIL_TOPIC_SLUGS, key)) t[`${key.replace(/-/g, '_')}_page_href`] = cocktailTopicRoute(locale, key);
  return t;
}

// The cocktail pages carry the date of their own source, not the site-wide facts date.
const updated = () => C._fuente.actualizado || facts._meta.generado;
const dated = (locale) => ({ updated: updated(), updatedLabel: UI[locale].updatedLabel, updatedText: new Date(updated()).toLocaleDateString(LOCALE_TAGS[locale], { year: 'numeric', month: 'long', day: 'numeric' }) });

function trail(locale, extra) {
  const ui = UI[locale];
  return [
    { name: ui.home, href: localeChrome(locale).logoHref },
    { name: ui.resourcesName, href: RESOURCES_ROOTS[locale] },
    { name: RES_UI[locale].applicationsName, href: APPLICATION_ROOTS[locale] },
    { name: APP_NAMES[locale].cocktails, href: applicationRoute(locale, 'cocktails') },
    ...extra,
  ];
}

// Links every cocktail page offers: the question pages, the cocktails guide, the bars page.
// The cocktails themselves are linked through their photo cards (cocktailCards).
function cocktailLinks(locale, route) {
  const T = TEXTS[locale];
  return [
    ...cocktailTopicLinks(locale),
    { href: applicationRoute(locale, 'cocktails'), label: T.labels.cocktailsGuide },
    { href: topicRoute(locale, 'professional', 'bars'), label: T.labels.barsPage },
  ].filter((l) => l.href !== route);
}

function closing(locale, route) {
  const ui = UI[locale];
  const products = findRoute(locale, 'buy');
  const hub = findRoute(locale, 'recipe-index');
  return [
    { href: APPLICATION_ROOTS[locale], label: RES_UI[locale].applicationsLink },
    { href: RESOURCES_ROOTS[locale], label: ui.resourcesLink },
    hub ? { href: hub, label: ui.hubLink } : null,
    products ? { href: products, label: ui.productsLink } : null,
  ].filter((l) => l && l.href !== route);
}

// Key figures of a cocktail guide: liquid and powder per drink and per pack, packs, storage.
function cocktailFigures(locale, t) {
  const ui = UI[locale];
  const L = TEXTS[locale].labels;
  const P = PACK_LABELS[locale];
  return {
    figures: {
      title: ui.figuresTitle,
      groups: [
        { key: 'liquid', title: RES_UI[locale].calc.liquid, rows: [{ label: L.perDrink, value: `${t.dose} ml` }, { label: P.liquid_1l, value: L.drinks.replace('{n}', t.drinks_1l) }, { label: P.bib_10l || '10 L bag-in-box', value: L.drinks.replace('{n}', t.drinks_10l) }] },
        { key: 'powder', title: RES_UI[locale].calc.powder, rows: [{ label: L.perDrink, value: `${t.powder} g + ${t.water} ml` }, { label: P.powder_200g, value: L.drinks.replace('{n}', t.drinks_200g) }, { label: P.powder_3kg || '3 kg pouch', value: L.drinks.replace('{n}', t.drinks_3kg) }] },
      ],
      source: source(locale, C._fuente),
    },
    packs: { title: ui.packsTitle, groups: packItems(locale), source: source(locale, facts.shared.packs_fuente) },
    storage: storageRows(locale),
  };
}

function pageBase(locale, route, text, vars, where) {
  const g = (tpl) => fillStrict(tpl, vars, where);
  return { g, seo: { title: g(text.title), description: g(text.description) } };
}

function buildGuide(locale, key) {
  const T = TEXTS[locale];
  const text = T.guides[key];
  const route = cocktailRoute(locale, key);
  const products = findRoute(locale, 'buy');
  const contact = `${products}#contact`;
  const calc = T.calculator[key] ? cocktailChildRoute(locale, key, 'calculator') : null;
  const sheet = T.process[key] ? cocktailChildRoute(locale, key, 'process') : null;
  const vars = { ...siteTokens(locale, contact), ...hrefTokens(locale), ...doseTokens(locale, C[key].dose_ml, C[key]), guide_href: route, calculator_href: calc, process_href: sheet };
  const { g, seo } = pageBase(locale, route, text, vars, `cocktails.${locale}.js guides.${key}`);
  const heroImage = PHOTOS[key] || null;
  return {
    locale, route, type: 'cocktail', section: 'cocktails', key, ...dated(locale),
    seo: { ...seo, image: heroImage || DEFAULT_IMAGE },
    heroImage,
    hero: { eyebrow: text.eyebrow, title: g(text.h1), text: g(text.lead) },
    sections: text.sections.map((s) => ({ type: 'rich-text', id: s.id, title: g(s.title), html: g(s.html) })),
    ...cocktailFigures(locale, vars),
    faq: { title: UI[locale].faqTitle, items: faqItems(g, text.faq) },
    whereToBuy: whereToBuy(locale, 'cocktails', contact, route),
    cocktailCards: cocktailCards(locale, key),
    enquiryCard: { title: ENQUIRY_FORM[locale].title, text: null, contact, form: whereToBuy(locale, 'cocktails', contact, route).enquiry },
    related: {
      title: UI[locale].relatedTitle,
      items: [
        calc ? { href: calc, label: T.labels.calculatorLink } : null,
        sheet ? { href: sheet, label: T.labels.processLink } : null,
        ...cocktailLinks(locale, route),
        ...closing(locale, route),
      ].filter(Boolean),
    },
    responsible: T.labels.responsible,
    breadcrumbs: trail(locale, [{ name: g(text.crumb), href: route }]),
  };
}

function buildTopic(locale, key) {
  const T = TEXTS[locale];
  const text = T.topics[key];
  const route = cocktailTopicRoute(locale, key);
  const products = findRoute(locale, 'buy');
  const contact = `${products}#contact`;
  // The pisco sour recipe gives the worked examples of the question pages (the pre-batch).
  const vars = { ...siteTokens(locale, contact), ...hrefTokens(locale), ...doseTokens(locale, DOSE, C['pisco-sour']) };
  const { g, seo } = pageBase(locale, route, text, vars, `cocktails.${locale}.js topics.${key}`);
  const form = whereToBuy(locale, 'cocktails', contact, route);
  return {
    locale, route, type: 'cocktail', section: 'cocktails', key, ...dated(locale),
    seo: { ...seo, image: topicPhoto(key) },
    heroImage: topicPhoto(key),
    hero: { eyebrow: text.eyebrow, title: g(text.h1), text: g(text.lead) },
    cta: { text: null, label: ENQUIRY_FORM[locale].title, href: '#enquiry-form' },
    sections: text.sections.map((s) => ({ type: 'rich-text', id: s.id, title: g(s.title), html: g(s.html) })),
    faq: { title: UI[locale].faqTitle, items: faqItems(g, text.faq) },
    whereToBuy: form,
    cocktailCards: cocktailCards(locale),
    enquiryCard: { title: ENQUIRY_FORM[locale].title, text: null, contact, form: form.enquiry },
    related: { title: UI[locale].relatedTitle, items: [...cocktailLinks(locale, route), ...closing(locale, route)] },
    responsible: T.labels.responsible,
    breadcrumbs: trail(locale, [{ name: g(text.crumb), href: route }]),
  };
}

function buildChild(locale, key, child) {
  const T = TEXTS[locale];
  const text = T[child][key];
  const recipe = C[key];
  const route = cocktailChildRoute(locale, key, child);
  const guide = cocktailRoute(locale, key);
  const sibling = child === 'calculator' ? 'process' : 'calculator';
  const siblingRoute = T[sibling][key] ? cocktailChildRoute(locale, key, sibling) : null;
  const products = findRoute(locale, 'buy');
  const contact = `${products}#contact`;
  const vars = {
    ...siteTokens(locale, contact), ...hrefTokens(locale), ...doseTokens(locale, recipe.dose_ml, recipe), guide_href: guide,
    calculator_href: child === 'calculator' ? route : siblingRoute, process_href: child === 'process' ? route : siblingRoute,
  };
  const { g, seo } = pageBase(locale, route, text, vars, `cocktails.${locale}.js ${child}.${key}`);
  const powder = recipe.dose_ml * POWDER_PER_ML;
  const tool = child === 'calculator'
    ? {
      kind: 'calculator',
      labels: { ...RES_UI[locale].calc, ...RES_UI[locale].calcExtra, title: T.labels.calcTitle.replace('{name}', recipe.name) },
      localeTag: LOCALE_TAGS[locale],
      noSpace: locale === 'en',
      reference: {
        dose: recipe.dose_ml,
        doseUnit: 'ml',
        powder,
        water: powder * WATER_PER_G,
        eggWhites: null,
        yield: null,
        unitWord: T.labels.drinksUnit,
        ingredients: recipe.ingredients.map((i) => ({ key: i.key, label: T.labels.ingredients[i.key], value: i.value, unit: i.unit === 'drops' ? T.labels.dropsUnit : i.unit })),
      },
      fixed: [],
      source: source(locale, C._fuente),
    }
    : {
      kind: 'process',
      labels: RES_UI[locale].sheet,
      powderNote: text.powderNote ? g(text.powderNote) : null,
      steps: text.steps.map((s) => ({ step: g(s.step), reference: g(s.reference) })),
      checks: text.checks.map((c) => ({ see: g(c.see), check: g(c.check), fix: g(c.fix) })),
      source: source(locale, C._fuente),
    };
  const heroImage = PHOTOS[key] || null;
  return {
    locale, route, type: 'cocktail-child', appKey: key, child, ...dated(locale),
    seo: { ...seo, image: heroImage || DEFAULT_IMAGE },
    heroImage,
    hero: { eyebrow: RES_UI[locale].eyebrow[child], title: g(text.h1), text: g(text.lead) },
    tool,
    sections: text.sections.map((s) => ({ type: 'rich-text', id: s.id, title: g(s.title), html: g(s.html) })),
    faq: { title: UI[locale].faqTitle, items: faqItems(g, text.faq) },
    whereToBuy: whereToBuy(locale, 'cocktails', contact, route),
    cocktailCards: cocktailCards(locale, key),
    related: {
      title: UI[locale].relatedTitle,
      items: [
        { href: guide, label: T.guides[key].h1 },
        siblingRoute ? { href: siblingRoute, label: sibling === 'calculator' ? T.labels.calculatorLink : T.labels.processLink } : null,
        ...cocktailLinks(locale, route).filter((l) => l.href !== guide),
        ...closing(locale, route),
      ].filter(Boolean),
    },
    responsible: T.labels.responsible,
    breadcrumbs: trail(locale, [{ name: g(T.guides[key].crumb), href: guide }, { name: RES_UI[locale].eyebrow[child], href: route }]),
  };
}

const style = (locale, page) => (locale === 'en' ? gramStyle(page) : page);

export const cocktailPages = Object.fromEntries(Object.keys(TEXTS).flatMap((locale) => {
  const T = TEXTS[locale];
  return [
    ...KEYS.filter((k) => has(locale, COCKTAIL_SLUGS, k) && T.guides[k]).map((k) => buildGuide(locale, k)),
    ...Object.keys(COCKTAIL_TOPIC_SLUGS).filter((k) => has(locale, COCKTAIL_TOPIC_SLUGS, k) && T.topics[k]).map((k) => buildTopic(locale, k)),
    ...KEYS.filter((k) => has(locale, COCKTAIL_SLUGS, k)).flatMap((k) => CHILD_KEYS.filter((child) => T[child]?.[k]).map((child) => buildChild(locale, k, child))),
  ].map((page) => [page.route, style(locale, page)]);
}));

