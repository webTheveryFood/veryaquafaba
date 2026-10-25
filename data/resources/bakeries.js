import facts from '../applications/facts.json';
import bakeryFacts from './bakeries-facts.json';
import texts from './texts/bakeries.en.js';
import { BAKERY_ROUTES, BAKERY_CHILD_KEYS } from './bakeries-routes.js';
import { siteTokens } from './topics';
import { fillStrict, fmt, fmtValue, gramStyle, faqItems, whereToBuy, source } from '../applications/index';
import { RES_UI } from './ui';
import { LOCALE_TAGS } from '../applications/ui';
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

// Pages that hang from an existing section index (topic-index pages built in topics.js).
const SECTION_PARENT = {
  whole_egg: { name: 'Egg substitutes', href: '/resources/egg-substitutes/' },
  yolk: { name: 'Egg substitutes', href: '/resources/egg-substitutes/' },
  versus: { name: 'Egg substitutes', href: '/resources/egg-substitutes/' },
  yumgo: { name: 'Egg substitutes', href: '/resources/egg-substitutes/' },
  ruf: { name: 'Egg substitutes', href: '/resources/egg-substitutes/' },
  oggs: { name: 'Egg substitutes', href: '/resources/egg-substitutes/' },
  wholesale: { name: 'For professionals', href: '/resources/professional/' },
  pavlova: { name: 'Applications', href: '/resources/applications/' },
  dacquoise: { name: 'Applications', href: '/resources/applications/' },
  marshmallows: { name: 'Applications', href: '/resources/applications/' },
  raspberry: { name: 'Applications', href: '/resources/applications/' },
  pack_finder: { name: 'Tools', href: '/resources/tools/' },
  sauces: { name: 'For professionals', href: '/resources/professional/' },
  catering: { name: 'For professionals', href: '/resources/professional/' },
};
const fz = facts.shared.freezing;
Object.assign(t, {
  freeze_temp: number(fz.temp_c), freeze_months: number(fz.months),
  freeze_portion_min: number(fz.portion_g[0]), freeze_portion_max: number(fz.portion_g[1]),
  whites_1_liquid: number(facts.shared.ratio.egg_white_liquid_g),
  eggs_2_liquid: number(2 * facts.shared.ratio.egg_liquid_g), eggs_3_liquid: number(3 * facts.shared.ratio.egg_liquid_g),
  baking_chill: fmtValue('en', facts.applications.baking.process.find((p) => p.key === 'chill').value),
  // Mayonnaise at production scale: batches and kilos from the large packs.
  mayonnaise_kg_per_batch: number(facts.applications.mayonnaise.yield.count / 1000),
  mayonnaise_kg_10l: number(Math.floor(10000 / facts.applications.mayonnaise.dose_g) * facts.applications.mayonnaise.yield.count / 1000),
  mayonnaise_batches_1t: number(Math.floor(1000000 / facts.applications.mayonnaise.dose_g)),
  mayonnaise_kg_1l: number(Math.floor(1000 / facts.applications.mayonnaise.dose_g) * facts.applications.mayonnaise.yield.count / 1000),
  three_batches_whites: number(3 * facts.applications.meringue.egg_whites),
  three_batches_powder: number(3 * facts.applications.meringue.egg_whites * r.egg_white_powder_g),
  three_batches_meringues: number(3 * facts.applications.meringue.yield.count),
  small_mayonnaise_batches: number(Math.floor(powderSize('powder_30g') / Number(t.mayonnaise_powder))),
  // A jug of ten egg whites made up from powder, and the whole eggs it covers at 45g each.
  ten_whites_powder: number(10 * r.egg_white_powder_g), ten_whites_water: number(10 * r.egg_white_water_ml),
  ten_whites_total: number(10 * r.egg_white_total_g),
  ten_whites_eggs: number(Math.floor(10 * r.egg_white_total_g / facts.shared.ratio.egg_liquid_g)),
  medium_pouch_meringues: number(Number(t.meringue_batches_200g) * facts.applications.meringue.yield.count),
  small_mousse_portions: number(Math.floor(powderSize('powder_30g') / Number(t.chocolate_mousse_powder)) * facts.applications['chocolate-mousse'].yield.count),
  medium_mousse_portions: number(Number(t.chocolate_mousse_batches_200g) * facts.applications['chocolate-mousse'].yield.count),
  small_mayonnaise_kg: number(Math.floor(powderSize('powder_30g') / Number(t.mayonnaise_powder)) * facts.applications.mayonnaise.yield.count / 1000),
  medium_mayonnaise_kg: number(Number(t.mayonnaise_batches_200g) * facts.applications.mayonnaise.yield.count / 1000),
  small_macarons_shells: number(Math.floor(powderSize('powder_30g') / Number(t.macarons_powder)) * facts.applications.macarons.yield.count),
  medium_macarons_shells: number(Number(t.macarons_batches_200g) * facts.applications.macarons.yield.count),
});
// Pavlova (site recipe) and dacquoise tools: batches per pack from the facts.
const pv = bakeryFacts.pavlova;
const ratio = facts.shared.ratio;
const pvWhites = pv.aquafaba_g / ratio.egg_white_liquid_g;
const pvPowder = pvWhites * r.egg_white_powder_g;
const perPack = (doseG, powderG) => ({
  l1: Math.floor(1000 / doseG), l10: Math.floor(10000 / doseG),
  g30: Math.floor(powderSize('powder_30g') / powderG), g200: Math.floor(powderSize('powder_200g') / powderG), kg3: Math.floor(powderSize('powder_3kg') / powderG),
});
const pvPacks = perPack(pv.aquafaba_g, pvPowder);
const dqPacks = perPack(recipe.aquafaba_g, preparedPowder);
Object.assign(t, {
  pavlova_aquafaba: number(pv.aquafaba_g), pavlova_sugar: number(pv.sugar_g), pavlova_cornstarch: number(pv.cornstarch_g),
  pavlova_tartar: number(pv.cream_of_tartar_g), pavlova_citric: number(pv.citric_acid_g), pavlova_vinegar: number(pv.vinegar_g),
  pavlova_cream: number(pv.cream_ml), pavlova_fruit: number(pv.fruit_g), pavlova_oven: number(pv.oven_c),
  pavlova_hours: fmtValue('en', pv.bake_hours), pavlova_chill: number(pv.chill_c), pavlova_diameter: number(pv.diameter_cm), pavlova_ahead: number(pv.ahead_days),
  pavlova_whites: number(pvWhites), pavlova_powder: number(pvPowder), pavlova_water: number(pvWhites * r.egg_white_water_ml), pavlova_prepared: number(pvWhites * r.egg_white_total_g),
  pavlova_batches_1l: number(pvPacks.l1), pavlova_batches_10l: number(pvPacks.l10), pavlova_batches_30g: number(pvPacks.g30), pavlova_batches_200g: number(pvPacks.g200), pavlova_batches_3kg: number(pvPacks.kg3),
  ten_bases_aquafaba: number(10 * pv.aquafaba_g), ten_bases_packs: number(Math.ceil(10 * pv.aquafaba_g / 1000)),
  ten_bases_powder: number(10 * pvPowder), ten_bases_water_l: number(10 * pvWhites * r.egg_white_water_ml / 1000),
  ten_bases_sugar: number(10 * pv.sugar_g), ten_bases_cream_l: number(10 * pv.cream_ml / 1000), ten_bases_fruit_kg: number(10 * pv.fruit_g / 1000),
  dacquoise_batches_1l: number(dqPacks.l1), dacquoise_batches_200g: number(dqPacks.g200), dacquoise_batches_30g: number(dqPacks.g30), dacquoise_batches_3kg: number(dqPacks.kg3),
  dacquoise_whites: number(recipe.aquafaba_g / ratio.egg_white_liquid_g),
  two_bases_aquafaba: number(2 * pv.aquafaba_g), two_bases_powder: number(2 * pvPowder), two_bases_water: number(2 * pvWhites * r.egg_white_water_ml), two_bases_sugar: number(2 * pv.sugar_g),
  dacquoise_ground_almonds: number(recipe.ground_almonds_g), dacquoise_icing_sugar: number(recipe.icing_sugar_g), dacquoise_sugar: number(recipe.sugar_g),
  dacquoise_baking_powder: number(recipe.baking_powder_g), dacquoise_cornflour: number(recipe.cornflour_g),
  dacquoise_double_sugar: number(recipe.sugar_g * ex.recipe_scale), dacquoise_double_icing_sugar: number(recipe.icing_sugar_g * ex.recipe_scale), dacquoise_double_ground_almonds: number(recipe.ground_almonds_g * ex.recipe_scale), dacquoise_double_baking_powder: number(recipe.baking_powder_g * ex.recipe_scale), dacquoise_double_cornflour: number(recipe.cornflour_g * ex.recipe_scale),
});
// Coconut marshmallows and raspberry macarons (client pastry recipes, October 2026).
const mm = bakeryFacts.marshmallows;
const rb = bakeryFacts.raspberry_macarons;
const mmPowder = Math.ceil(mm.aquafaba_g / r.egg_white_total_g) * r.egg_white_powder_g;
const mmWater = mmPowder * r.egg_white_water_ml / r.egg_white_powder_g;
const mmPacks = perPack(mm.aquafaba_g, mmPowder);
Object.assign(t, {
  mm_aquafaba: number(mm.aquafaba_g), mm_whites: number(mm.aquafaba_g / ratio.egg_white_liquid_g),
  mm_powder: number(mmPowder), mm_water: number(mmWater), mm_prepared: number(mmPowder * r.egg_white_total_g / r.egg_white_powder_g),
  mm_syrup_water: number(mm.syrup_water_g), mm_syrup_sugar: number(mm.syrup_sugar_g), mm_invert: number(mm.invert_sugar_g),
  mm_gel_water: number(mm.gel_water_g), mm_gel_sugar: number(mm.gel_sugar_g), mm_carrageenan: number(mm.carrageenan_g),
  mm_coconut_mix: number(mm.coconut_in_mix_g), mm_coconut_total: number(mm.coconut_total_g), mm_toast_c: number(mm.toast_c), mm_toast_min: number(mm.toast_minutes),
  mm_syrup_c: number(mm.syrup_c), mm_syrup_cool_c: number(mm.syrup_cool_c), mm_gel_c: number(mm.gel_c),
  mm_batches_1l: number(mmPacks.l1), mm_batches_10l: number(mmPacks.l10), mm_batches_30g: number(mmPacks.g30), mm_batches_200g: number(mmPacks.g200), mm_batches_3kg: number(mmPacks.kg3),
  mm_double_aquafaba: number(mm.aquafaba_g * ex.recipe_scale), mm_double_powder: number(mmPowder * ex.recipe_scale), mm_double_water: number(mmWater * ex.recipe_scale),
  mm_double_syrup_sugar: number(mm.syrup_sugar_g * ex.recipe_scale), mm_double_invert: number(mm.invert_sugar_g * ex.recipe_scale), mm_double_carrageenan: number(mm.carrageenan_g * ex.recipe_scale), mm_double_coconut_total: number(mm.coconut_total_g * ex.recipe_scale),
  rb_aquafaba: number(rb.aquafaba_g), rb_whites: number(rb.aquafaba_g / ratio.egg_white_liquid_g), rb_reduction: number(rb.reduction_used_g),
  rb_sugar: number(rb.sugar_g), rb_xanthan: number(rb.xanthan_g), rb_icing: number(rb.icing_sugar_g), rb_white_choc: number(rb.white_chocolate_powder_g), rb_cornstarch: number(rb.cornstarch_g), rb_fibre: number(rb.orange_fibre_g), rb_colour: number(rb.colouring_g),
  rb_rest: number(rb.rest_minutes), rb_oven: number(rb.oven_c), rb_bake: number(rb.bake_minutes), rb_nozzle: number(rb.piping_nozzle), rb_fill_nozzle: number(rb.filling_nozzle),
  rb_cream: number(rb.cream_g), rb_choc: number(rb.raspberry_chocolate_g), rb_margarine: number(rb.margarine_g),
  rb_batches_1l: number(Math.floor(1000 / rb.aquafaba_g)),
  macarons_href: '/resources/applications/macarons/',
});
// Competitor pages (client OK, 15 October 2026): each label as the brand's own page gives it.
const cp = bakeryFacts.competitors;
const labelTable = (brand) => `<table class="va-guide-grid va-guide-grid--wrap"><thead><tr><th scope="col">What you check</th><th scope="col">VERY AQUAFABA</th><th scope="col">${brand.name}</th></tr></thead><tbody>${[
  ['Made from', facts.foamers.very.label, brand.label],
  ['Allergens', facts.foamers.very.allergens, brand.allergens],
  ['Formats', `Liquid ${PACK_LABELS.en.liquid_1l}, ${PACK_LABELS.en.bib_10l} and ${PACK_LABELS.en.ibc_1t}; powder ${number(powderSize('powder_30g'))}g, ${number(powderSize('powder_200g'))}g and ${number(powderSize('powder_3kg') / 1000)}kg pouches`, brand.formats],
  ['One egg white', `${number(ratio.egg_white_liquid_g)}g of liquid, or ${number(r.egg_white_powder_g)}g of powder with ${number(r.egg_white_water_ml)} ml of water`, brand.dose || `${brand.ml_per_egg} ml per whole egg`],
  ['Once opened or made up', `Liquid: ${fmtValue('en', facts.shared.shelf_life.liquid_opened_days)} days at ${fmtValue('en', facts.shared.shelf_life.liquid_opened_temp_c)} °C. Powder: dry and closed until its best-before date`, brand.opened],
  ['Source', `<a href="${BAKERY_ROUTES.composition}">What's in VERY AQUAFABA</a>, and the storage guide`, `Product page of ${brand.name} (${cp._fuente.checked})`],
].map(([k, a, b]) => `<tr><td data-label="What you check">${k}</td><td data-label="VERY AQUAFABA">${a}</td><td data-label="${brand.name}">${b}</td></tr>`).join('')}</tbody></table>`;
Object.assign(t, {
  yumgo_name: cp.yumgo.name, yumgo_label: cp.yumgo.label, yumgo_formats: cp.yumgo.formats, yumgo_dose: cp.yumgo.dose, yumgo_batch: cp.yumgo.batch, yumgo_opened: cp.yumgo.opened, yumgo_unopened: number(cp.yumgo.unopened_months), yumgo_table: labelTable(cp.yumgo),
  ruf_name: cp.ruf.name, ruf_label: cp.ruf.label, ruf_allergens: cp.ruf.allergens, ruf_formats: cp.ruf.formats, ruf_whites: number(cp.ruf.pack_whites), ruf_dose: cp.ruf.dose, ruf_table: labelTable(cp.ruf),
  oggs_name: cp.oggs.name, oggs_label: cp.oggs.label, oggs_formats: cp.oggs.formats, oggs_eggs_1l: number(cp.oggs.eggs_1l), oggs_eggs_10l: number(cp.oggs.eggs_10l), oggs_ml_egg: number(cp.oggs.ml_per_egg), oggs_table: labelTable(cp.oggs),
  very_label: facts.foamers.very.label, very_allergens: facts.foamers.very.allergens,
  whites_per_g_liquid_1l: number(packs.liquid_1l.egg_whites), whole_eggs_1l: number(Math.floor(1000 / ratio.egg_liquid_g)),
  labels_checked: cp._fuente.checked,
});
// Every page gets a photo from the site's own set: the recipe's where there is one, the
// pack or the chickpeas for the rest (no stock photo stands in for a recipe it is not).
const U = '/wp-content/uploads/2025/09/';
// Photos made for the bakery expansion (October 2026) live in their own month folder.
const N = '/wp-content/uploads/2026/10/';
const NEW_PHOTOS = {
  pavlova: 'pavlova', pavlova_calc: 'pavlova-calculator-process-sheet', pavlova_process: 'pavlova-calculator-process-sheet',
  dacquoise: 'dacquoise', dacquoise_calc: 'dacquoise-calculator-process-sheet', dacquoise_process: 'dacquoise-calculator-process-sheet',
  marshmallows: 'marshmallows', marshmallows_calc: 'marshmallow-calculator-process-sheet', marshmallows_process: 'marshmallow-calculator-process-sheet',
  raspberry: 'raspberry-macarons', pack_finder: 'pack-finder',
  supply: 'egg-white-supply', wholesale: 'aquafaba-wholesale', sauces: 'sauces-dressings', catering: 'catering-events',
  yolk: 'egg-yolk', whole_egg: 'whole-egg',
  yumgo: 'yumgo-alternative', ruf: 'ruf-alternative', oggs: 'oggs-alternative',
};
const PHOTOS = {
  pavlova: `${U}AQUAFABA_RECIPE_HDPLUS_PAVLOVA_UPSCALE.webp`, pavlova_calc: `${U}AQUAFABA_RECIPE_HDPLUS_PAVLOVA_UPSCALE.webp`, pavlova_process: `${U}AQUAFABA_RECIPE_HDPLUS_PAVLOVA_UPSCALE.webp`, p_pavlova: `${U}VERYAQUAFABA_RECIPES_MINI_PAVLOVA.webp`,
  dacquoise: `${U}AQUAFABA_RECIPES_HD_MACARON.webp`, dacquoise_calc: `${U}AQUAFABA_RECIPES_HD_MACARON.webp`, dacquoise_process: `${U}AQUAFABA_RECIPES_HD_MACARON.webp`,
  p_meringue: `${U}RESOURCES_AND_RECIPES_HEROIMAGE_PAVLOVA.webp`, p_mousse: `${U}AQUAFABA_RECIPES_HD_CHOCOLATE.webp`, p_mayonnaise: `${U}AQUAFABA_RECIPES_HD_MAYONNAISE.webp`, p_macarons: `${U}AQUAFABA_RECIPES_HD_MACARON.webp`, p_baking: `${U}AQUAFABA_RECIPES_HD_LEMON-PIE.webp`,
  powder: `${U}VERYAQUAFABA_PACKS_POWDER.webp`, small_pouch: `${U}VERYAQUAFABA_PACKS_POWDER.webp`, pouch: `${U}VERYAQUAFABA_PACKS_POWDER.webp`, large_pouch: `${U}VERYAQUAFABA_PACKS_POWDER.webp`,
  liquid: `${U}VERYAQUAFABA_PACKS-LIQUIDE.webp`, tetrapak: `${U}VERYAQUAFABA_PACKS-LIQUIDE.webp`, bib: `${U}VERYAQUAFABA_PACKS-LIQUIDE.webp`, ibc: `${U}VERYAQUAFABA_PACKS-LIQUIDE.webp`,
  reference: `${U}PHOTO_CHICKPEAS.webp`, composition: `${U}PHOTO_CHICKPEAS.webp`, before: `${U}PHOTO_CHICKPEAS.webp`, whip: `${U}VERYAQUAFABA_MERINGUES_COVER.webp`, vegan: `${U}PHOTO_CHICKPEAS.webp`, choose: `${U}VERYAQUAFABA_PRODUCT_COVER.webp`,
  whole_egg: `${U}AQUAFABA_RECIPES_HD_LEMON-PIE.webp`, yolk: `${U}AQUAFABA_RECIPES_HD_MAYONNAISE.webp`, versus: `${U}VERYAQUAFABA_MERINGUES_COVER.webp`,
  supply: `${U}PHOTO_USINE.webp`, wholesale: `${U}PHOTO_USINE.webp`, sauces: `${U}AQUAFABA_RECIPES_HD_MAYONNAISE.webp`, catering: `${U}VERYAQUAFABA_RECIPES_HD_GIN-FIZZ.webp`,
  pack_finder: `${U}VERYAQUAFABA_PRODUCT_COVER.webp`,
  marshmallows: `${U}VERYAQUAFABA_MERINGUES_COVER.webp`, marshmallows_calc: `${U}VERYAQUAFABA_MERINGUES_COVER.webp`, marshmallows_process: `${U}VERYAQUAFABA_MERINGUES_COVER.webp`,
  raspberry: `${U}VERYAQUAFABA_MACARONS_COVER.webp`,
  yumgo: `${U}VERYAQUAFABA_PRODUCT_COVER.webp`, ruf: `${U}VERYAQUAFABA_PRODUCT_COVER.webp`, oggs: `${U}VERYAQUAFABA_PRODUCT_COVER.webp`,
};
for (const [key, name] of Object.entries(NEW_PHOTOS)) PHOTOS[key] = `${N}${name}.webp`;
const CALC_LABELS = { ...RES_UI.en.calc, ...RES_UI.en.calcExtra };
const ing = (label, value, unit = 'g') => ({ key: label, label, value, unit });
const TOOLS = {
  pavlova_calc: () => ({
    kind: 'calculator', labels: CALC_LABELS, localeTag: LOCALE_TAGS.en, noSpace: true,
    reference: {
      dose: pv.aquafaba_g, doseUnit: 'g', powder: pvPowder, water: pvWhites * r.egg_white_water_ml, eggWhites: pvWhites,
      yield: { count: 1, unit: `pavlova base of ${pv.diameter_cm} cm`, approx: '' },
      ingredients: [ing('Caster sugar', pv.sugar_g), ing('Corn starch', pv.cornstarch_g), ing('Cream of tartar (or 1g citric acid)', pv.cream_of_tartar_g), ing('White wine vinegar or lemon juice', pv.vinegar_g), ing('Whipped plant-based cream', pv.cream_ml, 'ml'), ing('Fresh fruit', pv.fruit_g)],
    },
    fixed: [{ label: 'Oven', value: `${pv.oven_c} °C, fan off` }, { label: 'Drying time', value: `${fmtValue('en', pv.bake_hours)} hours` }, { label: 'Aquafaba temperature', value: `${pv.chill_c} °C` }, { label: 'Base', value: `${pv.diameter_cm} cm, shaped with raised edges` }],
    source: source('en', pv._fuente),
  }),
  dacquoise_calc: () => ({
    kind: 'calculator', labels: CALC_LABELS, localeTag: LOCALE_TAGS.en, noSpace: true,
    reference: {
      dose: recipe.aquafaba_g, doseUnit: 'g', powder: preparedPowder, water: preparedWater, eggWhites: recipe.aquafaba_g / ratio.egg_white_liquid_g, yield: null,
      ingredients: [ing('Sugar', recipe.sugar_g), ing('Icing sugar', recipe.icing_sugar_g), ing('Ground almonds', recipe.ground_almonds_g), ing('Baking powder', recipe.baking_powder_g), ing('Cornflour', recipe.cornflour_g)],
    },
    fixed: [{ label: 'Oven', value: `${recipe.oven_c} °C` }, { label: 'Baking time', value: `${recipe.bake_minutes} minutes` }, { label: 'Mould', value: recipe.equipment }],
    source: source('en', bakeryFacts.dacquoise._fuente),
  }),
  marshmallows_calc: () => ({
    kind: 'calculator', labels: CALC_LABELS, localeTag: LOCALE_TAGS.en, noSpace: true,
    reference: {
      dose: mm.aquafaba_g, doseUnit: 'g', powder: mmPowder, water: mmWater, eggWhites: mm.aquafaba_g / ratio.egg_white_liquid_g, yield: null,
      ingredients: [ing('Water for the syrup', mm.syrup_water_g), ing('Sugar for the syrup', mm.syrup_sugar_g), ing('Invert sugar', mm.invert_sugar_g), ing('Water for the carrageenan', mm.gel_water_g), ing('Sugar for the carrageenan', mm.gel_sugar_g), ing('Iota carrageenan', mm.carrageenan_g), ing('Toasted coconut in the mix', mm.coconut_in_mix_g), ing('Grated coconut to toast, mix and coating', mm.coconut_total_g)],
    },
    fixed: [{ label: 'Syrup', value: `${mm.syrup_c} °C, cooled to ${mm.syrup_cool_c} °C` }, { label: 'Carrageenan', value: `${mm.gel_c} °C` }, { label: 'Coconut', value: `${mm.toast_minutes} minutes at ${mm.toast_c} °C, fan on` }, { label: 'Mould', value: mm.equipment }],
    source: source('en', mm._fuente),
  }),
};
const sheetFor = (key, text) => ({
  kind: 'process', labels: RES_UI.en.sheet, powderNote: text.powderNote ? fill(text.powderNote) : null,
  steps: text.steps.map((x) => ({ step: fill(x.step), reference: fill(x.reference) })),
  checks: text.checks.map((c) => ({ see: fill(c.see), check: fill(c.check), fix: fill(c.fix) })),
  source: source('en', key.startsWith('pavlova') ? pv._fuente : key.startsWith('marshmallows') ? mm._fuente : bakeryFacts.dacquoise._fuente),
});
const PACK_FINDER = {
  localeTag: LOCALE_TAGS.en,
  packs: { liquid: packs.liquid_1l.egg_whites, bib: packs.bib_10l.egg_whites, ibc: packs.ibc_1t.egg_whites, p30: packs.powder_30g.egg_whites, p200: packs.powder_200g.egg_whites },
  ratio: { liquid: ratio.egg_white_liquid_g, powder: r.egg_white_powder_g, water: r.egg_white_water_ml },
  hrefs: { liquid: BAKERY_ROUTES.tetrapak, bib: BAKERY_ROUTES.bib, ibc: BAKERY_ROUTES.ibc, p30: BAKERY_ROUTES.small_pouch, p200: BAKERY_ROUTES.pouch, p3kg: BAKERY_ROUTES.large_pouch },
  labels: {
    days: 'Egg whites you replace in 3 to 4 days', week: 'Egg whites you replace in a week', unit: 'egg whites',
    result: 'The pack for your week', pick: 'Pick', why: 'Why', liquidWeek: 'Liquid for the week', powderWeek: 'Powder for the week, with its water',
    empty: 'Type the egg whites you replace in 3 to 4 days and in a week.',
    packs: { liquid: `${PACK_LABELS.en.liquid_1l}`, bib: `${PACK_LABELS.en.bib_10l}`, ibc: `${PACK_LABELS.en.ibc_1t}`, p30: `${packs.powder_30g.egg_whites * r.egg_white_powder_g}g powder pouch`, p200: `${packs.powder_200g.egg_whites * r.egg_white_powder_g}g powder pouch`, p3kg: `${packs.powder_3kg.egg_whites * r.egg_white_powder_g / 1000}kg powder pouch` },
    whyLiquid: `An opened pack of ${packs.liquid_1l.egg_whites} egg whites is used within its ${fmtValue('en', facts.shared.shelf_life.liquid_opened_days)} days, so the liquid pours straight into the bowl.`,
    whyBib: `You use ${packs.bib_10l.egg_whites} egg whites or more in ${fmtValue('en', facts.shared.shelf_life.liquid_opened_days)} days: continuous use, one tap instead of ten packs, quoted for your project.`,
    whyIbc: `Production at ${packs.ibc_1t.egg_whites} egg whites in a few days is dosed by the kilo on a line: the IBC, quoted for your project.`,
    whyP30: `Fewer than ${packs.powder_30g.egg_whites} egg whites a week: the trial pouch, ${packs.powder_30g.egg_whites} egg whites made up by the batch.`,
    whyP200: `An opened litre of liquid would outlast its ${fmtValue('en', facts.shared.shelf_life.liquid_opened_days)} days; the pouch keeps dry and closed and covers ${packs.powder_200g.egg_whites} egg whites.`,
    whyP3kg: `More than ${packs.powder_200g.egg_whites} egg whites a week but not enough in ${fmtValue('en', facts.shared.shelf_life.liquid_opened_days)} days for the liquid: the ${packs.powder_3kg.egg_whites} egg-white pouch, quoted for your project.`,
  },
};
const fill = (s) => fillStrict(s, t, 'bakeries.en');
const label = (key) => fill(texts[key].crumb);

function build(key, text) {
  const route = BAKERY_ROUTES[key];
  const content = gramStyle({
    locale: 'en', route, type: 'editorial', section: 'bakeries', key,
    updated: bakeryFacts.updated,
    updatedLabel: 'Updated',
    updatedText: new Date(`${bakeryFacts.updated}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
    seo: { title: fill(text.title), description: fill(text.description), image: PHOTOS[key] },
    heroImage: PHOTOS[key],
    hero: { eyebrow: text.eyebrow, title: fill(text.h1), text: fill(text.lead) },
    sections: text.sections.map((s) => (s.type === 'pack-finder' ? { ...s, title: fill(s.title), data: PACK_FINDER } : { ...s, type: 'rich-text', title: fill(s.title), html: fill(s.html) })),
    faq: { title: 'Frequently asked questions', items: faqItems(fill, text.faq) },
    // Competitor pages already carry a where-to-buy section of their own: the block keeps the button only.
    whereToBuy: { ...whereToBuy('en', null, contact, route, label(key)), ...(['yumgo', 'ruf', 'oggs'].includes(key) ? { title: null } : {}) },
    related: {
      title: 'Go further',
      items: [
        ...text.links.map((other) => ({ href: BAKERY_ROUTES[other], label: label(other) })),
        ...(key === 'raspberry' ? [{ href: '/resources/applications/macarons/', label: 'Macarons with aquafaba: the professional guide' }] : []),
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
      ...(['pouch', 'small_pouch', 'large_pouch', 'p_meringue', 'p_mousse', 'p_mayonnaise', 'p_macarons', 'p_baking', 'p_pavlova'].includes(key) ? [{ name: label('powder'), href: BAKERY_ROUTES.powder }] : []),
      ...(['tetrapak', 'bib', 'ibc'].includes(key) ? [{ name: label('liquid'), href: BAKERY_ROUTES.liquid }] : []),
      ...(['choose', 'composition', 'before', 'whip'].includes(key) ? [{ name: label('reference'), href: BAKERY_ROUTES.reference }] : []),
      ...(SECTION_PARENT[key] ? [SECTION_PARENT[key]] : []),
      ...(key === 'raspberry' ? [{ name: 'Macarons', href: '/resources/applications/macarons/' }] : []),
      ...(BAKERY_CHILD_KEYS.has(key) ? [SECTION_PARENT[key.split('_')[0]], { name: label(key.split('_')[0]), href: BAKERY_ROUTES[key.split('_')[0]] }] : []),
      { name: label(key), href: route },
    ],
  });
  if (BAKERY_CHILD_KEYS.has(key)) {
    const [app, child] = key.split('_');
    Object.assign(content, { type: 'editorial-child', appKey: app, child: child === 'calc' ? 'calculator' : 'process', tool: child === 'calc' ? TOOLS[key]() : sheetFor(key, text) });
  }
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
  return { href: page.route, title: page.hero.title, image: page.seo.image, label: 'Read the guide' };
});
