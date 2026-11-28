import EnquiryLinks from '../applications/EnquiryLinks';
import AwardBadge from '../applications/AwardBadge';
import UpdatedDate from '../applications/UpdatedDate';
import { imageSize } from '../../lib/image-size';
import CARD_IMAGES from '../../data/card-images.json';

function RichText({ section }) {
  return (
    <section id={section.id} className="va-section va-rich-text">
      <div className="va-container">
        {section.eyebrow ? <p className="va-eyebrow">{section.eyebrow}</p> : null}
        {section.title ? <h2>{section.title}</h2> : null}
        {section.html ? <div dangerouslySetInnerHTML={{ __html: section.html }} /> : null}
        {section.updated ? <UpdatedDate locale={section.updated} as="p" /> : null}
      </div>
    </section>
  );
}

function ImageText({ section }) {
  return (
    <section className="va-section va-image-text">
      <div className="va-container va-image-text-grid">
        <div>
          {section.eyebrow ? <p className="va-eyebrow">{section.eyebrow}</p> : null}
          {section.title ? <h2>{section.title}</h2> : null}
          {section.html ? <div dangerouslySetInnerHTML={{ __html: section.html }} /> : null}
        </div>
        {section.image ? <img src={section.image.src} {...imageSize(section.image.src)} alt={section.image.alt || section.title || ''} /> : null}
      </div>
    </section>
  );
}

// No section title above the cards: the card names are the page's sections (resources hub).
// Only the first row (three cards on a desktop, one on a phone) loads with the page, the first photo with high
// priority as the page's largest element; the rest load as the reader scrolls. Until November 2026 a section index
// downloaded every card photo on arrival (24 images, 1.7 MB on the applications index).
// On the Resources pages a card shows its photo as a centred square: there it uses the square copies of
// scripts/card-images.mjs (480 and 960 px) instead of the original file of up to 1920 px. Elsewhere (the hidden Spanish
// recipe hub, 4:3 cards) the original stays.
const cardImage = (src, square) => {
  const card = square && CARD_IMAGES[String(src).split(/[?#]/)[0]];
  if (!card) return { src, ...imageSize(src) };
  const largest = card.widths.at(-1);
  return {
    src: `${card.base}-${card.widths[0]}.webp`,
    srcSet: card.widths.map((w) => `${card.base}-${w}.webp ${w}w`).join(', '),
    sizes: '(max-width: 767px) calc(100vw - 32px), 380px',
    width: largest, height: largest,
  };
};

function CardGrid({ items, Name = 'h3', square = false }) {
  return (
    <div className="va-card-grid">
      {(items || []).map((item, index) => (
        <article className="va-card" key={item.href || item.title}>
          {item.image ? <img {...cardImage(item.image, square)} alt={item.title || ''} decoding="async" loading={index > 2 ? 'lazy' : undefined} fetchPriority={index === 0 ? 'high' : undefined} /> : null}
          <Name>{item.title}</Name>
          {item.text ? <p>{item.text}</p> : null}
          {item.href ? <a href={item.href}>{item.label || item.title}</a> : null}
        </article>
      ))}
    </div>
  );
}

function Cards({ section, square }) {
  return (
    <section className="va-section va-cards">
      <div className="va-container">
        {section.title ? <h2>{section.title}</h2> : null}
        <CardGrid items={section.items} Name={section.title ? 'h3' : 'h2'} square={square} />
      </div>
    </section>
  );
}

// A section page of Resources: a link back to the hub, then its pages as cards.
function Tabs({ section, square }) {
  return (
    <section className="va-section va-cards va-tabs">
      <div className="va-container">
        <p className="va-tab-back"><a href={section.back.href}>{section.back.label}</a></p>
        <CardGrid items={section.items} Name="h2" square={square} />
      </div>
    </section>
  );
}

// Enquiry form at the foot of the Resources sub-hubs, the same block the topic pages carry.
function EnquiryForm({ section }) {
  return (
    <section className="va-section va-enquiry-form">
      <div className="va-container">
        <h2>{section.title}</h2>
        <p>{section.text}</p>
        {/* .va-guide scopes the orange form of the guides. */}
        <div className="va-guide"><EnquiryLinks enquiry={section.form} contact={section.contact} alwaysOpen /></div>
        {/* The professional index has no purchase block: this logo carries the page's award markup. */}
        {section.award ? <AwardBadge locale={section.award} markup /> : null}
      </div>
    </section>
  );
}

function Cta({ section }) {
  return (
    <section className="va-section va-cta">
      <div className="va-container">
        {section.title ? <h2>{section.title}</h2> : null}
        {section.text ? <p>{section.text}</p> : null}
        {section.href ? <a className="va-button" href={section.href}>{section.label || 'Learn more'}</a> : null}
        {section.links?.map((l) => <a key={l.href} className="va-button" href={l.href}>{l.label}</a>)}
      </div>
    </section>
  );
}

// FAQ of a hub page (set-2 applications index): the same q/a strings feed its FAQPage JSON-LD.
function Faq({ section }) {
  if (!section.items?.length) return null;
  return (
    <section className="va-section va-faq">
      <div className="va-container">
        {section.title ? <h2>{section.title}</h2> : null}
        {section.items.map((item) => (
          <div className="va-faq-item" key={item.q}>
            <h3>{item.q}</h3>
            {item.aHtml ? <p dangerouslySetInnerHTML={{ __html: item.aHtml }} /> : <p>{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

const COMPONENTS = {
  'rich-text': RichText,
  'image-text': ImageText,
  cards: Cards,
  tabs: Tabs,
  'enquiry-form': EnquiryForm,
  cta: Cta,
  faq: Faq,
};

export default function SectionRenderer({ sections = [], square = false }) {
  return sections.map((section, index) => {
    const Component = COMPONENTS[section.type];
    if (!Component) return null;
    return <Component key={section.id || `${section.type}-${index}`} section={section} square={square} />;
  });
}
