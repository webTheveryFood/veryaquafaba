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

function Cards({ section }) {
  return (
    <section className="va-section va-cards">
      <div className="va-container">
        {section.title ? <h2>{section.title}</h2> : null}
        <div className="va-card-grid">
          {(section.items || []).map((item) => (
            <article className="va-card" key={item.href || item.title}>
              {item.image ? <img src={item.image} alt="" /> : null}
              <h3>{item.title}</h3>
              {item.text ? <p>{item.text}</p> : null}
              {item.href ? <a href={item.href}>{item.label || item.title}</a> : null}
            </article>
          ))}
        </div>
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
      </div>
    </section>
  );
}

const COMPONENTS = {
  'rich-text': RichText,
  'image-text': ImageText,
  cards: Cards,
  cta: Cta,
};

export default function SectionRenderer({ sections = [] }) {
  return sections.map((section, index) => {
    const Component = COMPONENTS[section.type];
    if (!Component) return null;
    return <Component key={section.id || `${section.type}-${index}`} section={section} />;
  });
}
