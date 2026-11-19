import { legacyApplicationRedirects } from './data/applications/routes.js';

// The "Updated" date of every page is the day of the build (data/updated.js), so each deploy moves it.
// BUILD_DATE=2026-12-01 in the build environment pins it by hand; anything that is not a real date stops the build.
const today = new Date().toISOString().slice(0, 10);
const pinned = process.env.BUILD_DATE;
const realDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !Number.isNaN(Date.parse(`${d}T12:00:00Z`)) && new Date(`${d}T12:00:00Z`).toISOString().slice(0, 10) === d;
if (pinned && !realDate(pinned)) throw new Error(`BUILD_DATE must be a real date written like 2026-12-01, got "${pinned}"`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  devIndicators: false,

  env: { BUILD_DATE: pinned || today },

  // Only the production deployment (main) is indexable: develop.veryaquafaba.com and the
  // previews answer noindex, so search engines drop the staging copy of the site.
  async headers() {
    if (process.env.VERCEL_ENV === 'production') return [];
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },

  async redirects() {
    // The frozen non-English pages link to bare, locale-stripped slugs
    // (e.g. /acheter-aquafaba instead of /fr/acheter-aquafaba/), which 404.
    // Each localized slug is unique to one locale, so map every bare nav slug
    // back to its prefixed route. ponytail: covers the main nav (About /
    // Products / Recipes); bare recipe-detail slugs collide across locales and
    // are left to the per-page links.
    // Sources carry the trailing slash so they match after Next's
    // trailingSlash normalization (bare -> /slug/ -> localized).
    const localizedNav = {
      '/wat-is-aquafaba/': '/nl/wat-is-aquafaba/',
      '/aquafaba-kopen/': '/nl/aquafaba-kopen/',
      '/aquafaba-recepten/': '/nl/aquafaba-recepten/',
      '/was-ist-aquafaba/': '/de/was-ist-aquafaba/',
      '/aquafaba-kaufen/': '/de/aquafaba-kaufen/',
      '/rezepte/': '/de/rezepte/',
      '/qu-est-ce-que-laquafaba/': '/fr/qu-est-ce-que-laquafaba/',
      '/acheter-aquafaba/': '/fr/acheter-aquafaba/',
      '/aquafaba-recettes/': '/fr/aquafaba-recettes/',
      // German legal link and a whiskey/whisky typo baked into frozen content.
      '/impressum/': '/de/impressum/',
      '/aquafaba-recipes/whisky-sour/': '/aquafaba-recipes/whiskey-sour/',
      // The 404 pages link to a bare /404-error/; send it home instead of 404ing.
      '/404-error/': '/',
      // Language roots: WordPress redirected them, the clone 404s (Search Console, page with
      // redirect, 12 October 2026). Same target as the logo of each language.
      '/de/': '/de/was-ist-aquafaba/',
      '/fr/': '/fr/qu-est-ce-que-laquafaba/',
      '/nl/': '/nl/wat-is-aquafaba/',
    };

    return [
      { source: '/what-is-aquafaba', destination: '/', permanent: true },
      // WordPress/Yoast sitemap URLs -> the native Next sitemap.
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/page-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      ...Object.entries(localizedNav).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // The two cost calculators of the November expansion, removed 17 November 2026: the nearest useful tool.
      { source: '/resources/tools/cocktail-cost-per-serving/', destination: '/resources/applications/cocktails/quantity-calculator/', permanent: true },
      { source: '/resources/tools/batch-cost-calculator/', destination: '/resources/tools/pack-finder/', permanent: true },
      // Application guides moved under the resources hub (2026-09-16).
      ...legacyApplicationRedirects(),
    ];
  },
};

export default nextConfig;
