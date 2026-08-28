export default function Hero({ hero }) {
  if (!hero) return null;

  return (
    <section className="va-hero">
      <div className="va-container va-hero-grid">
        <div className="va-hero-copy">
          {hero.eyebrow ? <p className="va-eyebrow">{hero.eyebrow}</p> : null}
          <h1>{hero.title}</h1>
          {hero.text ? <p className="va-hero-text">{hero.text}</p> : null}
          {hero.href ? <a className="va-button" href={hero.href}>{hero.label || 'Discover'}</a> : null}
        </div>
        {hero.image ? (
          <div className="va-hero-media">
            <img src={hero.image.src} alt={hero.image.alt || ''} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
