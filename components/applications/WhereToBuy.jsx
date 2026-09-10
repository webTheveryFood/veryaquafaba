// Purchase links (external, with data-goal so the tracker records a CONVERSION
// on click) plus the two internal CTAs to the locale's contact form, styled like
// the site's black pill button ("view products").
export default function WhereToBuy({ content }) {
  return (
    <section className="va-recipe-section va-guide-buy">
      <h2>{content.title}</h2>
      {content.links.length ? (
        <ul>
          {content.links.map((link) => (
            <li key={link.id}>
              <a href={link.href} data-goal={content.goal || undefined} rel="noopener sponsored" target="_blank">{link.label}</a>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="va-guide-ctas">
        <a className="va-guide-button" href={content.contact}>{content.sampleCta}</a>
        <a className="va-guide-button" href={content.contact}>{content.sheetCta}</a>
      </p>
      {content.otherCountries ? <p className="va-guide-other"><a href={content.contact}>{content.otherCountries}</a></p> : null}
    </section>
  );
}
