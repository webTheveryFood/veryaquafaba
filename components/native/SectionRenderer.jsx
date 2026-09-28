import EnquiryLinks from '../applications/EnquiryLinks';

function RichText({ section }) {
  return (
    <section className="va-section va-rich-text">
      <div className="va-container">
        {section.eyebrow ? <p className="va-eyebrow">{section.eyebrow}</p> : null}
        {section.title ? <h2>{section.title}</h2> : null}
        {section.html ? <div dangerouslySetInnerHTML={{ __html: section.html }} /> : null}
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
        {section.image ? <img src={section.image.src} alt={section.image.alt || ''} /> : null}
      </div>
    </section>
  );
}

// No section title above the cards: the card names are the page's sections (resources hub).
function CardGrid({ items, Name = 'h3' }) {
  return (
    <div className="va-card-grid">
      {(items || []).map((item) => (
        <article className="va-card" key={item.href || item.title}>
          {item.image ? <img src={item.image} alt="" /> : null}
          <Name>{item.title}</Name>
          {item.text ? <p>{item.text}</p> : null}
          {item.href ? <a href={item.href}>{item.label || item.title}</a> : null}
        </article>
      ))}
    </div>
  );
}

function Cards({ section }) {
  return (
    <section className="va-section va-cards">
      <div className="va-container">
        {section.title ? <h2>{section.title}</h2> : null}
        <CardGrid items={section.items} Name={section.title ? 'h3' : 'h2'} />
      </div>
    </section>
  );
}

// The Resources tab strip: every tab is a page (its pillar), the active one lists its cards.
function Tabs({ section }) {
  return (
    <section className="va-section va-cards va-tabs">
      <div className="va-container">
        <nav className="va-hero-links va-tab-list">
          {section.tabs.map((tab) => (
            <a key={tab.id} className={`va-button${tab.active ? ' is-active' : ''}`} href={tab.href} aria-current={tab.active ? 'page' : undefined}>{tab.label}</a>
          ))}
        </nav>
        <CardGrid items={section.items} Name="h2" />
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

export default function SectionRenderer({ sections = [] }) {
  return sections.map((section, index) => {
    const Component = COMPONENTS[section.type];
    if (!Component) return null;
    return <Component key={section.id || `${section.type}-${index}`} section={section} />;
  });
}
