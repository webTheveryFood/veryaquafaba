import { pageRegistry, getTranslations } from '../../lib/page-registry';
import { contentPages } from '../pages/content-pages';
import { localeChrome } from '../locale-chrome';
import facts from './facts.json';
import copyEn from './copy.en.json';
import copyDe from './copy.de.json';
import copyFr from './copy.fr.json';
import copyNl from './copy.nl.json';
import { APPLICATION_KEYS, APPLICATION_LOCALES, applicationRoute } from './routes';
import {
  LOCALE_TAGS, TITLES, APP_PHRASE, APP_NAMES, ANSWER, YIELD_UNITS, UNIT_WORDS, ROW_LABELS,
  PACK_LABELS, STORAGE_LABELS, UI, WHERE_TO_BUY, RECIPE_TO_APPLICATION,
} from './ui';

// Composes the 24 application decision pages (6 applications x 4 locales).
// Figures come from facts.json only; prose from copy.<locale>.json (Tontin);
// derived figures (powder equivalent, batches per pack) are computed here from
// the Products-page ratio: 30 g liquid = 1 egg white = 2 g powder.

const SITE = 'https://veryaquafaba.com';
// Hero + og:image fallback for applications whose related page has no photo (baking
// guide): the recipes hub's pavlova photo (no text baked into the image).
const DEFAULT_IMAGE = '/wp-content/uploads/2025/09/RESOURCES_AND_RECIPES_HEROIMAGE_PAVLOVA.webp';
const COPY = { en: copyEn, de: copyDe, fr: copyFr, nl: copyNl };
const { ratio } = facts.shared;
const POWDER_PER_LIQUID_G = ratio.egg_white_powder_g / ratio.egg_white_liquid_g;
const APP_TO_RECIPE_KEY = Object.fromEntries(Object.entries(RECIPE_TO_APPLICATION).map(([k, v]) => [v, k]));

const fmt = (locale, n, digits = 1) => Number(n).toLocaleString(LOCALE_TAGS[locale], { maximumFractionDigits: digits });
const fmtValue = (locale, value) => {
  if (Array.isArray(value)) return value.map((v) => fmt(locale, v)).join('-');
  return typeof value === 'number' ? fmt(locale, value) : String(value);
};
const withUnit = (locale, value, unit) => (unit ? `${fmtValue(locale, value)} ${UNIT_WORDS[locale][unit] || unit}` : fmtValue(locale, value));
const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => String(vars[k]));

const findRoute = (locale, type, translationKey) =>
  pageRegistry.find((p) => p.locale === locale && p.type === type && (!translationKey || p.translationKey === translationKey))?.route || null;

function derived(f) {
  if (!f.dose_g) return null;
  // Egg-white equivalence only when it is a whole number (never a rounded figure).
  const exact = f.dose_g % ratio.egg_white_liquid_g === 0 ? f.dose_g / ratio.egg_white_liquid_g : null;
  const powderG = f.dose_g * POWDER_PER_LIQUID_G;
  return {
    eggWhites: f.egg_whites ?? exact,
    powderG,
    batches1l: Math.floor(1000 / f.dose_g),
    batches200g: Math.floor(200 / powderG),
  };
}

function yieldText(locale, y) {
  const u = YIELD_UNITS[locale];
  return `${y.approx ? `${u.approx} ` : ''}${fmt(locale, y.count, 0)} ${u[y.unit]}`;
}

export function answerSentence(locale, key, f = facts.applications[key]) {
  const t = ANSWER[locale];
  if (!f.dose_g) {
    return fill(t.equivalence, {
      egg: fmt(locale, ratio.egg_liquid_g),
      white: fmt(locale, ratio.egg_white_liquid_g),
      powderWhite: fmt(locale, ratio.egg_white_powder_g),
    });
  }
  const d = derived(f);
  return fill(d.eggWhites ? t.withDose : t.withDoseNoEggs, {
    phrase: APP_PHRASE[locale][key],
    dose: fmt(locale, f.dose_g),
    yield: yieldText(locale, f.yield),
    eggs: d.eggWhites == null ? '' : fmt(locale, d.eggWhites, 0),
    powder: fmt(locale, d.powderG),
  });
}

export function figureRows(locale, f) {
  const L = ROW_LABELS[locale];
  const rows = [];
  if (f.dose_g) {
    const d = derived(f);
    rows.push([L.liquid_dose, withUnit(locale, f.dose_g, 'g')]);
    if (d.eggWhites != null) rows.push([L.egg_whites, fmt(locale, d.eggWhites, 0)]);
    rows.push([L.powder_equiv, withUnit(locale, d.powderG, 'g')]);
    rows.push([L.batches_1l, fmt(locale, d.batches1l, 0)]);
    rows.push([L.batches_200g, fmt(locale, d.batches200g, 0)]);
  } else {
    rows.push([L.egg_liquid, withUnit(locale, ratio.egg_liquid_g, 'g')]);
    rows.push([L.white_liquid, withUnit(locale, ratio.egg_white_liquid_g, 'g')]);
    rows.push([L.white_powder, withUnit(locale, ratio.egg_white_powder_g, 'g')]);
    rows.push([L.eggs_1l, fmt(locale, Math.floor(1000 / ratio.egg_liquid_g), 0)]);
    rows.push([L.whites_1l, fmt(locale, Math.floor(1000 / ratio.egg_white_liquid_g), 0)]);
    rows.push([L.whites_200g, fmt(locale, Math.floor(200 / ratio.egg_white_powder_g), 0)]);
  }
  for (const p of f.process || []) {
    if (p.value == null) continue;
    rows.push([L[p.key] || p.key, withUnit(locale, p.value, p.unit)]);
  }
  return rows.map(([label, value]) => ({ label, value }));
}

// Source line under each table. The recorded source URL is the EN page; the link goes to
// the same page in the reader's language when a translation exists (same-locale interlink).
function localizedHref(locale, url) {
  if (!url) return null;
  const route = url.replace(SITE, '');
  const page = pageRegistry.find((p) => p.route === route);
  return (page && getTranslations(page)[locale]) || route;
}

const source = (locale, s) => ({
  label: UI[locale].sourceLabel,
  // Only the first sentence is shown (the rest of `fuente` is the data record's note).
  text: s.fuente.split('. ')[0],
  href: localizedHref(locale, s.fuente_url),
  period: s.periodo,
});

function packItems(locale) {
  const P = PACK_LABELS[locale];
  return facts.shared.packs.map((p) => ({
    label: P[p.id],
    value: p.egg_whites ? P.eggWhites.replace('{n}', fmt(locale, p.egg_whites, 0)) : P.onRequest,
  }));
}

// Storage and shelf life: only what is published (unopened: client flyers; liquid after
// opening: the site's storage guide). Powder after opening stays null and is not shown.
function storageRows(locale) {
  const s = facts.shared.shelf_life;
  const L = STORAGE_LABELS[locale];
  const rows = [];
  if (s.unopened_months) rows.push({ label: L.unopened, value: withUnit(locale, s.unopened_months, 'months') });
  if (s.liquid_opened_days) rows.push({ label: L.liquidOpened, value: withUnit(locale, s.liquid_opened_days, 'days') });
  return { title: L.title, items: rows, source: source(locale, s._fuente) };
}

function whereToBuy(locale, key, contact) {
  const w = WHERE_TO_BUY[locale];
  const ov = w.overrides?.[key] || {};
  const ui = UI[locale];
  return {
    title: ui.buyTitle,
    goal: w.goal,
    links: w.links.map((l) => ({ ...l, ...(ov[l.id] || {}) })),
    sampleCta: ui.sampleCta,
    sheetCta: ui.sheetCta,
    otherCountries: w.links.length ? ui.otherCountries : null,
    contact,
  };
}

function buildPage(locale, key) {
  const route = applicationRoute(locale, key);
  const f = facts.applications[key];
  const copy = COPY[locale][key] || {};
  const ui = UI[locale];
  const t = TITLES[locale][key];
  const recipeRoute = findRoute(locale, 'recipe', APP_TO_RECIPE_KEY[key]);
  const recipe = (recipeRoute && contentPages[recipeRoute]) || {};
  const hub = findRoute(locale, 'recipe-index');
  const products = findRoute(locale, 'buy');
  const home = localeChrome(locale).logoHref;
  const contact = `${products}#contact`;
  const answer = answerSentence(locale, key, f);
  const heroImage = recipe.heroImage || null;

  return {
    locale,
    route,
    type: 'application',
    appKey: key,
    keyword: t.keyword,
    updated: facts._meta.generado,
    updatedLabel: ui.updatedLabel,
    updatedText: new Date(facts._meta.generado).toLocaleDateString(LOCALE_TAGS[locale], { year: 'numeric', month: 'long', day: 'numeric' }),
    seo: { title: t.title, description: copy.seo?.description || answer, image: heroImage || DEFAULT_IMAGE },
    heroImage,
    hero: {
      eyebrow: ui.eyebrow,
      title: t.h1,
      text: [answer, copy.answer].filter(Boolean).join(' '),
      image: heroImage ? { src: heroImage, alt: t.h1 } : undefined,
    },
    figures: { title: ui.figuresTitle, rows: figureRows(locale, f), source: source(locale, f._fuente) },
    packs: { title: ui.packsTitle, items: packItems(locale), source: source(locale, facts.shared.packs_fuente) },
    storage: storageRows(locale),
    sections: (copy.sections || []).map((s) => ({ type: 'rich-text', id: s.key, title: s.title, html: s.html })),
    faq: { title: ui.faqTitle, items: copy.faq || [] },
    whereToBuy: whereToBuy(locale, key, contact),
    related: {
      title: ui.relatedTitle,
      items: [
        recipeRoute ? { href: recipeRoute, label: copy.relatedLabel || ui.recipeLink } : null,
        hub ? { href: hub, label: ui.hubLink } : null,
        products ? { href: products, label: ui.productsLink } : null,
      ].filter(Boolean),
    },
    breadcrumbs: [
      { name: ui.home, href: home },
      hub ? { name: ui.hubName, href: hub } : null,
      { name: APP_NAMES[locale][key], href: route },
    ].filter(Boolean),
  };
}

export const applicationPages = Object.fromEntries(
  APPLICATION_LOCALES.flatMap((locale) => APPLICATION_KEYS.map((key) => {
    const page = buildPage(locale, key);
    return [page.route, page];
  }))
);

// Recipe page -> its application guide (rendered at the end of the recipe).
export function applicationForRecipe(translationKey, locale) {
  const key = RECIPE_TO_APPLICATION[translationKey];
  if (!key || !APPLICATION_LOCALES.includes(locale)) return null;
  return { href: applicationRoute(locale, key), label: UI[locale].recipeToApp };
}

// Recipe hub -> the six application guides of the same locale.
export function applicationHubLinks(locale) {
  if (!APPLICATION_LOCALES.includes(locale)) return null;
  return {
    title: UI[locale].hubBlockTitle,
    items: APPLICATION_KEYS.map((key) => ({ href: applicationRoute(locale, key), label: `${APP_NAMES[locale][key]}: ${TITLES[locale][key].h1.split(':').slice(1).join(':').trim()}` })),
  };
}
