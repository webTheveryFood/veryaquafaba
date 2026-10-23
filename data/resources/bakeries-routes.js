// First five English samples from the October 2026 bakery expansion plan.
// Kept independent of page builders so the route registry can import it safely.
export const BAKERY_ROUTES = {
  powder: '/resources/aquafaba-powder/',
  liquid: '/resources/liquid-aquafaba/',
  tetrapak: '/resources/liquid-aquafaba/1l-tetrapak/',
  bib: '/resources/liquid-aquafaba/10l-bag-in-box/',
  ibc: '/resources/liquid-aquafaba/1t-ibc/',
  reference: '/resources/reference/',
  choose: '/resources/reference/which-aquafaba-to-buy/',
  composition: '/resources/reference/very-aquafaba-composition/',
  before: '/resources/reference/before-you-use-aquafaba/',
  whip: '/resources/reference/how-to-whip-aquafaba/',
  whole_egg: '/resources/egg-substitutes/whole-egg/',
  yolk: '/resources/egg-substitutes/egg-yolk/',
  wholesale: '/resources/professional/aquafaba-wholesale/',
  sauces: '/resources/professional/sauces-dressings/',
  catering: '/resources/professional/catering-events/',
  versus: '/resources/egg-substitutes/aquafaba-vs-egg-white/',
  p_meringue: '/resources/aquafaba-powder/meringue/',
  p_mousse: '/resources/aquafaba-powder/chocolate-mousse/',
  p_mayonnaise: '/resources/aquafaba-powder/mayonnaise/',
  p_macarons: '/resources/aquafaba-powder/macarons/',
  p_baking: '/resources/aquafaba-powder/baking/',
  pavlova: '/resources/applications/pavlova/',
  pavlova_calc: '/resources/applications/pavlova/quantity-calculator/',
  pavlova_process: '/resources/applications/pavlova/process-and-checks/',
  p_pavlova: '/resources/aquafaba-powder/pavlova/',
  dacquoise_calc: '/resources/applications/dacquoise/quantity-calculator/',
  dacquoise_process: '/resources/applications/dacquoise/process-and-checks/',
  pack_finder: '/resources/tools/pack-finder/',
  pouch: '/resources/aquafaba-powder/200g-pouch/',
  small_pouch: '/resources/aquafaba-powder/30g-pouch/',
  large_pouch: '/resources/aquafaba-powder/3kg-pouch/',
  vegan: '/resources/reference/is-aquafaba-vegan/',
  supply: '/resources/professional/egg-white-supply/',
  dacquoise: '/resources/applications/dacquoise/',
};

export const BAKERY_ROUTE_KEYS = Object.fromEntries(Object.entries(BAKERY_ROUTES).map(([key, route]) => [route, key]));
// Calculator and process-sheet pages: rendered with the application child template.
export const BAKERY_CHILD_KEYS = new Set(['pavlova_calc', 'pavlova_process', 'dacquoise_calc', 'dacquoise_process']);
