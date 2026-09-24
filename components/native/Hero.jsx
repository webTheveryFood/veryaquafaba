// `breadcrumbs` (set-2 applications index) sit inside the head block, above the eyebrow,
// with the top padding reduced so the eyebrow keeps the height it has on the Resources hub.
export default function Hero({ hero, titleAs: TitleTag = 'h1', breadcrumbs = null }) {
  if (!hero) return null;

  return (
    <section className={`va-hero${breadcrumbs ? ' va-hero--crumbs' : ''}`}>
      <div className="va-container va-hero-grid">
        <div className="va-hero-copy">
          {breadcrumbs ? (
            <nav className="va-guide-breadcrumbs va-page-breadcrumbs" aria-label="Breadcrumb">
              <ol>
                {breadcrumbs.map((b, i) => (
                  <li key={b.href}>
                    {i < breadcrumbs.length - 1 ? <a href={b.href}>{b.name}</a> : <span aria-current="page">{b.name}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}
          {hero.eyebrow ? <p className="va-eyebrow">{hero.eyebrow}</p> : null}
          <TitleTag>{hero.title}</TitleTag>
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
