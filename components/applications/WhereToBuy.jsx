import ActionButton from '../shared/ActionButton';
import EnquiryLinks from './EnquiryLinks';

// Purchase block of an application guide (client mockup 2026-09-16):
// 1. primary CTA, solid black pill: the country's purchase destination (Amazon US/DE,
//    InstantChef for FR), with data-goal for the click goal and central tracking params;
// 2. secondary CTA, outlined pill: request the technical sheet (locale contact form).
//    On NL pages there is no shop yet, so the technical sheet is the only, solid, CTA;
// 3. two small text links: professional enquiries (inline B2B form) and general enquiries.
// Both pills are the site's own Elementor button (element 9ee9a76, the recipe pages'
// "view products"), so look and hover come from post-87.css; the outline variant only
// swaps the resting and hover colours (app/programmatic.css).
// `b2b` is the set-2 commercial pages (professionals, reference, egg substitutes): there the
// production enquiry is the conversion, so the form is open and the shop CTAs sit under it.
export default function WhereToBuy({ content, b2b = false }) {
  const { buy } = content;
  const ctas = (
    <div className="elementor elementor-87 va-guide-ctas">
      {buy ? (
        <ActionButton elementId="9ee9a76" href={buy.href} rel={buy.rel} target="_blank" data-goal={buy.goal || undefined}>
          {buy.label}
        </ActionButton>
      ) : null}
      <ActionButton elementId="9ee9a76" href={content.contact} wrapperClassName={buy || b2b ? 'va-guide-cta-outline' : ''}>
        {content.sheetCta}
      </ActionButton>
    </div>
  );
  return (
    <section className="va-recipe-section va-guide-buy">
      <h2>{content.title}</h2>
      {b2b ? null : ctas}
      <EnquiryLinks enquiry={content.enquiry} contact={content.contact} openByDefault={b2b} />
      {b2b ? ctas : null}
    </section>
  );
}
