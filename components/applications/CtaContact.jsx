import ActionButton from '../shared/ActionButton';

// "Get in touch" right under the lead (user, 13 October 2026: the contact call to action comes
// early, or it barely converts). It opens the same CTA dialog on its forms, not on the shop:
// for home the B2C contact form, for a business the B2B form. Its own data-cta values keep it apart
// from the purchase CTA in the metrics: contact-open here, contact-consumer / contact-pro in the
// dialog, origin contact-modal on the forms (measurement brief, point 3.6).
export default function CtaContact({ cta, text = null }) {
  if (!cta) return null;
  return (
    <div className="elementor elementor-87 va-guide-cta-strip">
      {text ? <p>{text}</p> : null}
      <ActionButton elementId="9ee9a76" asButton id="cta-contact" aria-controls="cta-dialog" data-cta-open="contact" data-cta="contact-open">{cta.modal.contact}</ActionButton>
    </div>
  );
}
