import ActionButton from '../shared/ActionButton';

// Purchase links (external, with data-goal so the tracker records a CONVERSION
// on click) plus the two internal CTAs to the locale's contact form. The CTAs are
// the site's own Elementor button (ActionButton, element 9ee9a76 = "view products"
// on the recipe pages), so they carry its exact look and hover effects; the
// .elementor-87 wrapper scopes the recipe page CSS (post-87) that styles it.
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
      <div className="elementor elementor-87 va-guide-ctas">
        <ActionButton elementId="9ee9a76" href={content.contact}>{content.sampleCta}</ActionButton>
        <ActionButton elementId="9ee9a76" href={content.contact}>{content.sheetCta}</ActionButton>
      </div>
    </section>
  );
}
