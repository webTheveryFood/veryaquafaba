'use client';

import { useEffect, useRef, useState } from 'react';
import ActionButton from '../shared/ActionButton';
import EnquiryLinks, { ENQUIRY_FORM_ID } from './EnquiryLinks';

export const CTA_DIALOG_ID = 'cta-dialog';
const MODAL_FORM_ID = 'enquiry-form-modal';

// One primary call to action (user, 13 October 2026): every opener on the page carries
// data-cta-open and opens this dialog, one step, two options:
// - buy: the country's shop (Amazon US/DE, InstantChef, the country page's listings), a direct
//   link with its data-goal; none where there is no shop (purchase route per country, 28 August);
// - get in touch: opens the B2B form right here in the dialog.
// The snippet measures the clicks through data-cta: cta-open, cta-consumer (shop), cta-pro (form);
// the shop links keep their purchase goal and the form its single CONVERSION.
// ponytail: rendered by the purchase block, so only the new pages have it; mount it in the root
// layout (with a locale lookup) when the client extends it to the whole site.
export default function CtaDialog({ content }) {
  const ref = useRef(null);
  const [formOpen, setFormOpen] = useState(false);
  const buys = content.buys || (content.buy ? [content.buy] : []);

  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.('[data-cta-open], a[href="#enquiry-form"]');
      if (!trigger) return;
      const toForm = trigger.matches('a[href="#enquiry-form"]');
      // In-copy links to the B2B form keep scrolling to the page's own form card when it exists.
      if (toForm && document.getElementById(ENQUIRY_FORM_ID)) return;
      event.preventDefault();
      setFormOpen(toForm);
      ref.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // The form opens under the buttons with the cursor in its first field (the browser scrolls only if needed).
  useEffect(() => {
    if (formOpen) document.getElementById(MODAL_FORM_ID)?.querySelector('input')?.focus();
  }, [formOpen]);

  const close = () => ref.current?.close();
  return (
    <dialog
      ref={ref}
      id={CTA_DIALOG_ID}
      className="va-cta-dialog"
      aria-labelledby="cta-dialog-title"
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      onClose={() => setFormOpen(false)}
    >
      <div className="va-cta-inner">
        <button type="button" className="va-cta-close" onClick={close} aria-label={content.modal.close}>×</button>
        <h2 id="cta-dialog-title">{content.title}</h2>
        {buys.length ? null : <p>{content.modal.noShop}</p>}
        <div className="elementor elementor-87 va-guide-ctas">
          {buys.map((b) => (
            <ActionButton key={b.href} elementId="9ee9a76" href={b.href} rel={b.rel} target="_blank" data-goal={b.goal || undefined} data-cta="cta-consumer">{b.label}</ActionButton>
          ))}
          <ActionButton
            elementId="9ee9a76"
            href={`#${MODAL_FORM_ID}`}
            wrapperClassName={buys.length ? 'va-guide-cta-outline' : ''}
            role="button"
            aria-expanded={formOpen}
            aria-controls={MODAL_FORM_ID}
            data-cta="cta-pro"
            onClick={(event) => { event.preventDefault(); setFormOpen((v) => !v); }}
          >
            {content.enquiry.genLink}
          </ActionButton>
        </div>
        {content.also ? (
          <p>
            {content.also.label}{' '}
            {content.also.links.map((l, i) => (
              <span key={l.href}>{i ? ', ' : ''}<a href={l.href} rel={l.rel} target="_blank" data-goal={l.goal || undefined} data-cta="cta-consumer">{l.label}</a></span>
            ))}
          </p>
        ) : null}
        {formOpen ? <EnquiryLinks enquiry={content.enquiry} contact={content.contact} alwaysOpen formId={MODAL_FORM_ID} general={false} /> : null}
      </div>
    </dialog>
  );
}
