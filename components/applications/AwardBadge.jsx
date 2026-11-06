import { imageSize } from '../../lib/image-size';
import { jsonLdHtml } from '../../lib/application-jsonld';

// The award (5 November 2026, Sirha Bake & Snack 2024, Sirha Europain Awards): asked next to the purchase and enquiry
// buttons of the professional pages, then (6 November) on the homes, the Products pages and under the purchase button of
// every resource page. The logo carries the words; the alt adds the year. Not on the hidden Spanish pages.
const SRC = '/wp-content/uploads/2026/11/sirha-europain-awards-winner.webp';
const AWARD = 'Sirha Europain Awards, Sirha Bake & Snack 2024';
const ALT = {
  en: 'Winner, Sirha Europain Awards, Sirha Bake & Snack 2024',
  fr: 'Lauréat des Sirha Europain Awards, Sirha Bake & Snack 2024',
  de: 'Gewinner der Sirha Europain Awards, Sirha Bake & Snack 2024',
  nl: 'Winnaar van de Sirha Europain Awards, Sirha Bake & Snack 2024',
};
// `markup` on the one logo of each page that names the award in JSON-LD too, so search engines and AI answers can cite
// it from text, and the markup sits only on pages that show the logo.
const ORGANIZATION = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://veryaquafaba.com/#organization', name: 'VERY AQUAFABA', url: 'https://veryaquafaba.com', award: AWARD };

export default function AwardBadge({ locale, markup = false, className = '' }) {
  if (!ALT[locale]) return null;
  return (
    <>
      <img className={`va-award-badge ${className}`.trim()} src={SRC} alt={ALT[locale]} loading="lazy" decoding="async" {...imageSize(SRC)} />
      {markup ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(ORGANIZATION) }} /> : null}
    </>
  );
}
