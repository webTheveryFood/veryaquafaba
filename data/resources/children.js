import facts from '../applications/facts.json';
import { contentPages } from '../pages/content-pages';
import { localeChrome } from '../locale-chrome';
import { APPLICATION_KEYS, APPLICATION_LOCALES, APPLICATION_ROOTS, RESOURCES_ROOTS, CHILD_KEYS, applicationRoute, childRoute } from '../applications/routes';
import { LOCALE_TAGS, APP_NAMES, ROW_LABELS, YIELD_UNITS, UI, RECIPE_TO_APPLICATION } from '../applications/ui';
import {
  DEFAULT_IMAGE, fmt, withUnit, derived, findRoute, source, whereToBuy, guideTokens, fillStrict, faqItems, gramStyle,
} from '../applications/index';
import { RES_UI } from './ui';
import { CHILD_TEXTS } from './texts/index.js';
import { sectionLinks } from './section-links.js';

// Composes the children of the application guides (set-2): the quantity calculator and
// the process sheet of each application, in the four languages. A page exists only where
// its text exists in data/resources/texts/. Every figure comes from facts.json through the
// guide tokens plus the child tokens below; the copy never carries a number of its own.

const APP_TO_RECIPE_KEY = Object.fromEntries(Object.entries(RECIPE_TO_APPLICATION).map(([k, v]) => [v, k]));
// Recipe quantities that scale with the batch (sugar, chocolate, oil); temperatures,
// times and concentrations do not.
const scalable = (p) => (p.unit === 'g' || p.unit === 'ml') && typeof p.value === 'number';
// Everything of the recipe that scales with the batch: process quantities (sugar, chocolate,
// oil) and the extra ingredients recorded for the calculators (mustard, almond, whiskey...).
const quantities = (f) => [...(f.process || []).filter(scalable), ...(f.ingredients || [])];

// Tokens of a child page: the guide's tokens, the batches per large pack, the worked
// example (text.example.batches times the recipe) and the halved batch.
function childTokens(locale, f, text, routes) {
  const base = { ...guideTokens(locale, f, routes.recipe, routes.contact), ...routes.hrefs };
  const d = derived(f);
  if (!d) return { ...base, ...substitutionTokens(locale, text) };
  const rec = facts.shared.powder_reconstitution;
  const waterPerG = rec.egg_white_water_ml / rec.egg_white_powder_g;
  const count = f.yield?.count || null;
  const ex = text.example?.batches || 1;
  const t = {
    batches_10l: fmt(locale, Math.floor(10000 / f.dose_g), 0),
    batches_3kg: fmt(locale, Math.floor(3000 / d.powderG), 0),
    ex_batches: fmt(locale, ex, 0),
    ex_dose: fmt(locale, f.dose_g * ex, 0),
    ex_powder: fmt(locale, d.powderG * ex, 0),
    ex_water: fmt(locale, d.powderG * ex * waterPerG, 0),
    half_dose: fmt(locale, f.dose_g / 2, 0),
  };
  if (d.eggWhites != null) t.ex_eggs = fmt(locale, d.eggWhites * ex, 0);
  if (count) {
    t.pieces_1l = fmt(locale, d.batches1l * count, 0);
    t.pieces_10l = fmt(locale, Math.floor(10000 / f.dose_g) * count, 0);
    t.pieces_200g = fmt(locale, d.batches200g * count, 0);
    t.pieces_3kg = fmt(locale, Math.floor(3000 / d.powderG) * count, 0);
    t.ex_pieces = fmt(locale, count * ex, 0);
    t.half_yield = fmt(locale, count / 2, 0);
  }
  for (const p of quantities(f)) {
    t[`ex_${p.key}`] = fmt(locale, p.value * ex, 0);
    t[`half_${p.key}`] = fmt(locale, p.value / 2, 0);
  }
  // The extra recipe ingredients themselves (the guide tokens only carry the process entries).
  for (const p of f.ingredients || []) t[p.key] = fmt(locale, p.value, 0);
  return { ...base, ...t };
}

// Baking has no fixed dose: the tokens are the Products-page equivalences (whole egg, egg
// white, yolk with oil), the powder per whole egg derived from the per white ratio, the
// eggs each pack replaces and the worked example (text.example.eggs and .whites).
function substitutionTokens(locale, text) {
  const { ratio } = facts.shared;
  const rec = facts.shared.powder_reconstitution;
  const perG = ratio.egg_white_powder_g / ratio.egg_white_liquid_g; // powder per g of liquid
  const waterPerG = rec.egg_white_water_ml / rec.egg_white_powder_g;
  const eggPowder = ratio.egg_liquid_g * perG;
  const ex = text.example || { eggs: 0, whites: 0 };
  const liquid = ex.eggs * ratio.egg_liquid_g + ex.whites * ratio.egg_white_liquid_g;
  const powder = liquid * perG;
  return {
    yolk_liquid: fmt(locale, ratio.egg_yolk_liquid_g),
    yolk_oil: fmt(locale, ratio.egg_yolk_oil_g),
    egg_powder: fmt(locale, eggPowder),
    egg_water: fmt(locale, eggPowder * waterPerG, 0),
    eggs_10l: fmt(locale, Math.floor(10000 / ratio.egg_liquid_g), 0),
    whites_10l: fmt(locale, Math.floor(10000 / ratio.egg_white_liquid_g), 0),
    eggs_200g: fmt(locale, Math.floor(200 / eggPowder), 0),
    eggs_3kg: fmt(locale, Math.floor(3000 / eggPowder), 0),
    whites_3kg: fmt(locale, Math.floor(3000 / ratio.egg_white_powder_g), 0),
    ex_eggs: fmt(locale, ex.eggs, 0),
    ex_whites: fmt(locale, ex.whites, 0),
    ex_liquid: fmt(locale, liquid, 0),
    ex_powder: fmt(locale, powder, 0),
    ex_water: fmt(locale, powder * waterPerG, 0),
  };
}

// Data of the substitution calculator (baking): grams of liquid or powder per whole egg,
// egg white and yolk, from the Products page ratio.
function substitutionData(locale) {
  const { ratio } = facts.shared;
  const rec = facts.shared.powder_reconstitution;
  const R = RES_UI[locale];
  return {
    labels: { ...R.calc, ...R.calcExtra },
    localeTag: LOCALE_TAGS[locale],
    noSpace: locale === 'en',
    per: {
      egg: ratio.egg_liquid_g, white: ratio.egg_white_liquid_g, yolk: ratio.egg_yolk_liquid_g, yolkOil: ratio.egg_yolk_oil_g,
      powderPerG: ratio.egg_white_powder_g / ratio.egg_white_liquid_g, waterPerPowderG: rec.egg_white_water_ml / rec.egg_white_powder_g,
    },
  };
}

// Data of the calculator (numbers, formatted by the component): the reference batch and
// the parameters that stay fixed whatever the batch size.
function calculatorData(locale, f, d) {
  const rec = facts.shared.powder_reconstitution;
  const L = ROW_LABELS[locale];
  const Y = YIELD_UNITS[locale];
  const X = RES_UI[locale].calcExtra;
  return {
    labels: { ...RES_UI[locale].calc, ...X },
    localeTag: LOCALE_TAGS[locale],
    noSpace: locale === 'en', // EN house style: "150g", "10ml"
    reference: {
      dose: f.dose_g,
      powder: d.powderG,
      water: d.powderG * (rec.egg_white_water_ml / rec.egg_white_powder_g),
      eggWhites: d.eggWhites,
      yield: f.yield ? { count: f.yield.count, unit: Y[f.yield.unit], approx: f.yield.approx ? Y.approx : '' } : null,
      ingredients: quantities(f).map((p) => ({ key: p.key, label: L[p.key] || X[p.key] || p.key, value: p.value, unit: p.unit })),
    },
    fixed: (f.process || []).filter((p) => !scalable(p) && p.value != null).map((p) => ({ label: L[p.key] || p.key, value: withUnit(locale, p.value, p.unit) })),
  };
}

function buildChild(locale, key, child) {
  const text = CHILD_TEXTS[child][locale][key];
  const f = facts.applications[key];
  const d = derived(f); // null for baking: no fixed dose, substitution calculator instead
  const ui = UI[locale];
  const R = RES_UI[locale];
  const route = childRoute(locale, key, child);
  const guideRoute = applicationRoute(locale, key);
  const recipeRoute = findRoute(locale, 'recipe', APP_TO_RECIPE_KEY[key]);
  const recipe = (recipeRoute && contentPages[recipeRoute]) || {};
  const products = findRoute(locale, 'buy');
  const hub = findRoute(locale, 'recipe-index');
  const home = localeChrome(locale).logoHref;
  const contact = `${products}#contact`;
  const sibling = child === 'calculator' ? 'process' : 'calculator';
  const siblingRoute = CHILD_TEXTS[sibling][locale]?.[key] ? childRoute(locale, key, sibling) : null;
  const hrefs = {
    guide_href: guideRoute, index_href: APPLICATION_ROOTS[locale], products_href: products,
    calculator_href: child === 'calculator' ? route : siblingRoute, process_href: child === 'process' ? route : siblingRoute,
  };
  const vars = childTokens(locale, f, text, { recipe: recipeRoute, contact, hrefs });
  const g = (tpl) => fillStrict(tpl, vars, `${child}.${locale}.js ${key}`);
  const heroImage = recipe.heroImage || null;
  const tool = child === 'calculator'
    ? (d
      ? { kind: 'calculator', ...calculatorData(locale, f, d), source: source(locale, f._fuente) }
      : { kind: 'substitution', ...substitutionData(locale), source: source(locale, facts.shared.ratio._fuente) })
    : {
      kind: 'process',
      labels: R.sheet,
      powderNote: text.powderNote ? g(text.powderNote) : null,
      steps: text.steps.map((s) => ({ step: g(s.step), reference: g(s.reference) })),
      checks: text.checks.map((c) => ({ see: g(c.see), check: g(c.check), fix: g(c.fix) })),
      source: source(locale, f._fuente),
    };
  const updated = facts._meta.generado;
  return {
    locale,
    route,
    type: 'application-child',
    appKey: key,
    child,
    updated,
    updatedLabel: ui.updatedLabel,
    updatedText: new Date(updated).toLocaleDateString(LOCALE_TAGS[locale], { year: 'numeric', month: 'long', day: 'numeric' }),
    seo: { title: text.title, description: g(text.description), image: heroImage || DEFAULT_IMAGE },
    heroImage,
    hero: { eyebrow: R.eyebrow[child], title: text.h1, text: g(text.lead) },
    tool,
    sections: text.sections.map((s) => ({ type: 'rich-text', id: s.id, title: g(s.title), html: g(s.html) })),
    faq: { title: ui.faqTitle, items: faqItems(g, text.faq) },
    whereToBuy: whereToBuy(locale, key, contact, route),
    related: {
      title: ui.relatedTitle,
      items: [
        { href: guideRoute, label: R.guideLink },
        siblingRoute ? { href: siblingRoute, label: sibling === 'calculator' ? R.calculatorLink : R.processLink } : null,
        recipeRoute ? { href: recipeRoute, label: ui.recipeLink } : null,
        ...sectionLinks(locale, key),
        { href: APPLICATION_ROOTS[locale], label: R.applicationsLink },
        { href: RESOURCES_ROOTS[locale], label: ui.resourcesLink },
        hub ? { href: hub, label: ui.hubLink } : null,
        products ? { href: products, label: ui.productsLink } : null,
      ].filter(Boolean),
    },
    breadcrumbs: [
      { name: ui.home, href: home },
      { name: ui.resourcesName, href: RESOURCES_ROOTS[locale] },
      { name: R.applicationsName, href: APPLICATION_ROOTS[locale] },
      { name: APP_NAMES[locale][key], href: guideRoute },
      { name: R.eyebrow[child], href: route },
    ],
  };
}

export const applicationChildPages = Object.fromEntries(
  APPLICATION_LOCALES.flatMap((locale) => APPLICATION_KEYS.flatMap((key) =>
    CHILD_KEYS.filter((child) => CHILD_TEXTS[child][locale]?.[key]).map((child) => {
      const page = buildChild(locale, key, child);
      return [page.route, locale === 'en' ? gramStyle(page) : page];
    })))
);
