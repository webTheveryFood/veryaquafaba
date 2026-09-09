// Purchase links (external, with data-goal so the tracker records a CONVERSION
// on click) plus the two internal CTAs to the locale's contact form.
export default function WhereToBuy({ content }) {
  return (
    <section className="va-section va-where-to-buy">
      <div className="va-container">
        <h2>{content.title}</h2>
        {content.links.length ? (
          <ul className="va-buy-links">
            {content.links.map((link) => (
              <li key={link.id}>
                <a href={link.href} data-goal={content.goal || undefined} rel="noopener sponsored" target="_blank">{link.label}</a>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="va-buy-ctas">
          <a className="va-button" href={content.contact}>{content.sampleCta}</a>
          <a className="va-button" href={content.contact}>{content.sheetCta}</a>
        </div>
        {content.otherCountries ? (
          <p className="va-buy-other"><a href={content.contact}>{content.otherCountries}</a></p>
        ) : null}
      </div>
    </section>
  );
}
