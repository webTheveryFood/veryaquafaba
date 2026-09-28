// JSON-LD for the application decision pages: WebPage + BreadcrumbList (+ FAQPage
// when the page has FAQ items). Every string mirrors what is rendered in the body.
const SITE = 'https://veryaquafaba.com';
const LANG = { en: 'en-GB', de: 'de-DE', fr: 'fr-FR', nl: 'nl-NL' };

// `type` lets an index page declare itself a CollectionPage (set-2 applications index).
export function applicationJsonLd(content, { type = 'WebPage' } = {}) {
  const url = `${SITE}${content.route}`;
  const graph = [
    {
      '@type': type,
      '@id': url,
      url,
      name: content.seo.title,
      description: content.seo.description,
      inLanguage: LANG[content.locale] || content.locale,
      dateModified: content.updated,
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'VERY AQUAFABA' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: content.breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${SITE}${b.href}`,
      })),
    },
  ];
  if (content.faq?.items?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: content.faq.items.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// Safe inline serialisation for <script type="application/ld+json">.
export const jsonLdHtml = (data) => JSON.stringify(data).replace(/</g, '\\u003c');
