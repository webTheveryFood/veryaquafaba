import { imageSize } from '../../lib/image-size';

// The award the client asked for next to the purchase button and the enquiry form of the professional pages
// (5 November 2026): Sirha Bake & Snack 2024, Sirha Europain Awards. The logo carries the words; the alt adds the year.
const SRC = '/wp-content/uploads/2026/11/sirha-europain-awards-winner.webp';
const ALT = {
  en: 'Winner, Sirha Europain Awards, Sirha Bake & Snack 2024',
  fr: 'Lauréat des Sirha Europain Awards, Sirha Bake & Snack 2024',
  de: 'Gewinner der Sirha Europain Awards, Sirha Bake & Snack 2024',
  nl: 'Winnaar van de Sirha Europain Awards, Sirha Bake & Snack 2024',
};

export default function AwardBadge({ locale }) {
  return <img className="va-award-badge" src={SRC} alt={ALT[locale] || ALT.en} loading="lazy" decoding="async" {...imageSize(SRC)} />;
}
