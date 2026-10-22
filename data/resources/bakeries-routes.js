// First five English samples from the October 2026 bakery expansion plan.
// Kept independent of page builders so the route registry can import it safely.
export const BAKERY_ROUTES = {
  powder: '/resources/aquafaba-powder/',
  liquid: '/resources/liquid-aquafaba/',
  reference: '/resources/reference/',
  pouch: '/resources/aquafaba-powder/200g-pouch/',
  vegan: '/resources/reference/is-aquafaba-vegan/',
  supply: '/resources/professional/egg-white-supply/',
  dacquoise: '/resources/applications/dacquoise/',
};

export const BAKERY_ROUTE_KEYS = Object.fromEntries(Object.entries(BAKERY_ROUTES).map(([key, route]) => [route, key]));
