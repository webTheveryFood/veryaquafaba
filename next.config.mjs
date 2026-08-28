/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  devIndicators: false,

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
    };

    return [
      { source: '/what-is-aquafaba', destination: '/', permanent: true },
      ...Object.entries(localizedNav).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
