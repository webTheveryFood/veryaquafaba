import ActionButton from '../shared/ActionButton';
import CtaDialog, { CTA_DIALOG_ID } from './CtaDialog';

// Purchase block of the new pages: ONE primary call to action that opens the dialog with the
// consumer and professional paths (user, 13 October 2026, "para no tener mil CTA"). It replaces
// the shop pill, the technical sheet pill and the two enquiry links of the 16 September mockup.
// The pill is the site's own Elementor button (element 9ee9a76, the recipe pages' "view products").
export default function WhereToBuy({ content }) {
  return (
    <section className="va-recipe-section va-guide-buy">
      <h2>{content.title}</h2>
      <div className="elementor elementor-87 va-guide-ctas">
        <ActionButton elementId="9ee9a76" href={`#${CTA_DIALOG_ID}`} data-cta-open data-cta="cta-open">{content.modal.open}</ActionButton>
      </div>
      <CtaDialog content={content} />
    </section>
  );
}
