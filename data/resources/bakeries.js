import facts from '../applications/facts.json';
import bakeryFacts from './bakeries-facts.json';
import texts from './texts/bakeries.en.js';
import { BAKERY_ROUTES } from './bakeries-routes.js';
import { siteTokens } from './topics';
import { fillStrict, fmt, gramStyle, faqItems, whereToBuy } from '../applications/index';
import { PACK_LABELS } from '../applications/ui';
import { applicationJsonLd } from '../../lib/application-jsonld';

const products = '/buy-aquafaba/';
const contact = `${products}#contact`;
const r = facts.shared.powder_reconstitution;
const recipe = bakeryFacts.dacquoise;
const ex = bakeryFacts.examples;
const packs = Object.fromEntries(facts.shared.packs.map((p) => [p.id, p]));
const number = (n) => fmt('en', n, 2);
const t = siteTokens('en', contact);
const powderSize = (id) => packs[id].egg_whites * r.egg_white_powder_g;

Object.assign(t, {
  ...Object.fromEntries(Object.entries(BAKERY_ROUTES).map(([key, href]) => [`${key}_href`, href])),
  liquid_1l_label: PACK_LABELS.en.liquid_1l, liquid_10l_label: PACK_LABELS.en.bib_10l, liquid_1t_label: PACK_LABELS.en.ibc_1t,
  liquid_10l_whites: t.bib_10l_whites, liquid_1t_whites: t.ibc_1t_whites,
  small_pouch_g: number(powderSize('powder_30g')),
  medium_pouch_g: number(powderSize('powder_200g')),
  large_pouch_kg: number(powderSize('powder_3kg') / 1000),
  small_meringue_batches: number(Math.floor(powderSize('powder_30g') / Number(t.meringue_powder))),
  small_mousse_batches: number(Math.floor(powderSize('powder_30g') / Number(t.chocolate_mousse_powder))),
  small_macarons_batches: number(Math.floor(powderSize('powder_30g') / Number(t.macarons_powder))),
  // A production run of 50 egg whites (3kg pouch page): powder in g, water in litres.
  run_whites: number(ex.run_egg_whites),
  run_powder: number(ex.run_egg_whites * r.egg_white_powder_g),
  run_water_l: number(ex.run_egg_whites * r.egg_white_water_ml / 1000),
  pouches_200g_in_3kg: number(powderSize('powder_3kg') / powderSize('powder_200g')),
  tetrapaks_in_10l: number(packs.bib_10l.egg_whites / packs.liquid_1l.egg_whites),
  eu_allergens: number(facts.foamers.eu_allergens.value),
  allergen_href: '/resources/applications/cocktails/is-aquafaba-an-allergen/',
  liquid_1l_meringues: number(Number(t.meringue_batches_1l) * facts.applications.meringue.yield.count),
  weekly_meringue_batches: number(ex.meringue_batches_per_week),
  weekly_meringue_powder: number(ex.meringue_batches_per_week * Number(t.meringue_powder)),
  meringue_weeks: number(Number(t.meringue_batches_200g) / ex.meringue_batches_per_week),
  weekly_mayonnaise_batches: number(ex.mayonnaise_batches_per_week),
  weekly_mayonnaise_powder: number(ex.mayonnaise_batches_per_week * Number(t.mayonnaise_powder)),
  mayonnaise_weeks: number(Number(t.mayonnaise_batches_200g) / ex.mayonnaise_batches_per_week),
  stock_whites: number(ex.stock_egg_whites_per_week),
  stock_liquid: number(ex.stock_egg_whites_per_week * facts.shared.ratio.egg_white_liquid_g),
  stock_powder: number(ex.stock_egg_whites_per_week * r.egg_white_powder_g),
  stock_water: number(ex.stock_egg_whites_per_week * r.egg_white_water_ml),
});
const weekly = ex.meringue_batches_per_week * Number(t.meringue_powder) + ex.mayonnaise_batches_per_week * Number(t.mayonnaise_powder);
Object.assign(t, {
  combined_weekly_powder: number(weekly),
  combined_full_weeks: number(Math.floor(powderSize('powder_200g') / weekly)),
  combined_powder_left: number(powderSize('powder_200g') % weekly),
});
for (const key of ['meringue', 'chocolate_mousse', 'macarons', 'mayonnaise']) {
  // Prepared mass includes the dry powder. It is not the liquid recipe's dose.
  t[`${key}_prepared`] = number(Number(t[`${key}_powder`]) * r.egg_white_total_g / r.egg_white_powder_g);
}

const ingredients = [
  ['VERY AQUAFABA', 'aquafaba_g'], ['Sugar', 'sugar_g'], ['Icing sugar', 'icing_sugar_g'],
  ['Ground almonds', 'ground_almonds_g'], ['Baking powder', 'baking_powder_g'], ['Cornflour', 'cornflour_g'],
];
// Prepare enough at the published ratio, then weigh the recipe dose. Never round an
// approximate egg-white count to derive a powder dose, as the plan's sample did.
const preparedPowder = Math.ceil(recipe.aquafaba_g / r.egg_white_total_g) * r.egg_white_powder_g;
const preparedWater = preparedPowder * r.egg_white_water_ml / r.egg_white_powder_g;
const preparedMass = preparedPowder * r.egg_white_total_g / r.egg_white_powder_g;
const method = [
  'Pour the aquafaba into the bowl of a mixer and whip until it stiffens.',
  'Add the sugar to make a meringue.',
  'Once the meringue holds, add the ground almonds, icing sugar, baking powder and cornflour little by little.',
  'Mix to combine.',
  `Pour into a frame or ring and bake for ${recipe.bake_minutes} minutes at ${recipe.oven_c} °C.`,
];
Object.assign(t, {
  dacquoise_aquafaba: number(recipe.aquafaba_g),
  dacquoise_whites_floor: number(Math.floor(recipe.aquafaba_g / facts.shared.ratio.egg_white_liquid_g)),
  dacquoise_minutes: number(recipe.bake_minutes), dacquoise_oven: number(recipe.oven_c),
  dacquoise_powder: number(preparedPowder), dacquoise_water: number(preparedWater), dacquoise_prepared: number(preparedMass),
  dacquoise_double_aquafaba: number(recipe.aquafaba_g * ex.recipe_scale),
  dacquoise_double_powder: number(preparedPowder * ex.recipe_scale),
  dacquoise_double_water: number(preparedWater * ex.recipe_scale),
  dacquoise_double_prepared: number(preparedMass * ex.recipe_scale),
  dacquoise_ingredients: `<ul>${ingredients.map(([name, key]) => `<li>${name}: ${number(recipe[key])}g</li>`).join('')}</ul>`,
  dacquoise_method: `<ol>${method.map((step) => `<li>${step}</li>`).join('')}</ol>`,
  dacquoise_double_table: `<table class="va-guide-grid va-guide-grid--wrap"><thead><tr><th scope="col">Ingredient</th><th scope="col">One batch</th><th scope="col">Double batch</th></tr></thead><tbody>${ingredients.map(([name, key]) => `<tr><td data-label="Ingredient">${name}</td><td data-label="One batch">${number(recipe[key])}g</td><td data-label="Double batch">${number(recipe[key] * ex.recipe_scale)}g</td></tr>`).join('')}</tbody></table>`,
});

const fill = (s) => fillStrict(s, t, 'bakeries.en');
const label = (key) => fill(texts[key].crumb);

function build(key, text) {
  const route = BAKERY_ROUTES[key];
  const content = gramStyle({
    locale: 'en', route, type: 'editorial', section: 'bakeries', key,
    updated: bakeryFacts.updated,
    updatedLabel: 'Updated',
    updatedText: new Date(`${bakeryFacts.updated}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
    seo: { title: fill(text.title), description: fill(text.description), image: '/wp-content/uploads/2025/09/PHOTO_CHICKPEAS-1227x1536.webp' },
    // No stock pastry photo is presented as the new dacquoise recipe.
    heroImage: false,
    hero: { eyebrow: text.eyebrow, title: fill(text.h1), text: fill(text.lead) },
    sections: text.sections.map((s) => ({ ...s, type: 'rich-text', title: fill(s.title), html: fill(s.html) })),
    faq: { title: 'Frequently asked questions', items: faqItems(fill, text.faq) },
    whereToBuy: whereToBuy('en', null, contact, route, label(key)),
    related: {
      title: 'Go further',
      items: [
        ...text.links.map((other) => ({ href: BAKERY_ROUTES[other], label: label(other) })),
        { href: '/resources/applications/meringue/', label: 'Meringue method and troubleshooting' },
        { href: '/aquafaba-recipes/meringues/', label: 'The meringue recipe' },
        { href: '/aquafaba-recipes/', label: 'Recipes with aquafaba' },
        { href: '/resources/', label: 'Resources and practical guides' },
        { href: products, label: 'Products and formats' },
      ],
    },
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Resources', href: '/resources/' },
      ...(['pouch', 'small_pouch', 'large_pouch'].includes(key) ? [{ name: label('powder'), href: BAKERY_ROUTES.powder }] : []),
      ...(['tetrapak', 'bib', 'ibc'].includes(key) ? [{ name: label('liquid'), href: BAKERY_ROUTES.liquid }] : []),
      ...(key === 'choose' ? [{ name: label('reference'), href: BAKERY_ROUTES.reference }] : []),
      { name: label(key), href: route },
    ],
  });
  content.jsonLd = applicationJsonLd(content);
  if (key === 'dacquoise') {
    const url = `https://veryaquafaba.com${route}`;
    content.jsonLd['@graph'].push({
      '@type': 'Recipe', '@id': `${url}#recipe`, name: content.hero.title,
      description: content.hero.text, url, inLanguage: 'en-GB', dateModified: content.updated,
      mainEntityOfPage: { '@id': url }, recipeCategory: 'Pastry',
      cookTime: `PT${recipe.bake_minutes}M`,
      recipeIngredient: ingredients.map(([name, field]) => `${number(recipe[field])}g ${name}`),
      recipeInstructions: method.map((step) => ({ '@type': 'HowToStep', text: step })),
    });
  }
  return content;
}

export const bakeryPages = Object.fromEntries(Object.entries(texts).map(([key, text]) => [BAKERY_ROUTES[key], build(key, text)]));
export const bakeryCards = (keys = Object.keys(BAKERY_ROUTES)) => keys.map((key) => {
  const page = bakeryPages[BAKERY_ROUTES[key]];
  return { href: page.route, title: page.hero.title, text: page.hero.text, label: 'Read the guide' };
});
