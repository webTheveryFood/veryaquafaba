import { pageRegistry, getTranslations } from '../lib/page-registry';
import { getNativePage } from '../data/native-pages';

// Native sitemap (served at /sitemap.xml): every public EN/DE/FR/NL page with
// absolute URLs + hreflang alternates (x-default = EN). ES stays hidden (see
// getTranslations); 404 / under-construction utility pages are not listed.
// lastmod is the update date the page itself shows (and its JSON-LD dateModified);
// original pages without a reliable date stay without one rather than get a fake date.
const SITE = 'https://veryaquafaba.com';
const abs = (route) => `${SITE}${route}`;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export default function sitemap() {
  return pageRegistry
    .filter((page) => page.locale !== 'es' && page.type !== 'utility')
    .map((page) => {
      const languages = Object.fromEntries(
        Object.entries(getTranslations(page)).map(([locale, route]) => [locale, abs(route)])
      );
      if (languages.en) languages['x-default'] = languages.en;
      const updated = getNativePage(page.route)?.updated;
      return {
        url: abs(page.route),
        lastModified: ISO_DATE.test(updated || '') ? updated : undefined,
        alternates: Object.keys(languages).length > 2 ? { languages } : undefined,
      };
    });
}
