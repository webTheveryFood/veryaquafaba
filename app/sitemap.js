import { pageRegistry, getTranslations } from '../lib/page-registry';

// Native sitemap (served at /sitemap.xml): every public EN/DE/FR/NL page with
// absolute URLs + hreflang alternates (x-default = EN). ES stays hidden (see
// getTranslations); 404 / under-construction utility pages are not listed.
const SITE = 'https://veryaquafaba.com';
const abs = (route) => `${SITE}${route}`;

export default function sitemap() {
  return pageRegistry
    .filter((page) => page.locale !== 'es' && page.type !== 'utility')
    .map((page) => {
      const languages = Object.fromEntries(
        Object.entries(getTranslations(page)).map(([locale, route]) => [locale, abs(route)])
      );
      if (languages.en) languages['x-default'] = languages.en;
      return {
        url: abs(page.route),
        alternates: Object.keys(languages).length > 2 ? { languages } : undefined,
      };
    });
}
