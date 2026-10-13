'use client';

import { useEffect, useRef, useState } from 'react';
import ActionButton from '../shared/ActionButton';
import EnquiryLinks, { ENQUIRY_FORM_ID } from './EnquiryLinks';

export const CTA_DIALOG_ID = 'cta-dialog';
const MODAL_FORM_ID = 'enquiry-form-modal';

// One primary call to action (user, 13 October 2026): every opener on the page carries
// data-cta-open and opens this dialog, which splits into
// - the consumer path: the country's shop (Amazon US/DE, InstantChef) with its data-goal, or the
//   contact form where there is no shop (purchase route per country, Arnaud 28 August 2026);
// - the professional path: the page's own B2B form card when it has one, otherwise the form here.
// The snippet measures the clicks through data-cta: cta-open, cta-consumer, cta-pro; shop links
// keep their purchase goal and the form its single CONVERSION.
// ponytail: rendered by the purchase block, so only the new pages have it; mount it in the root
// layout (with a locale lookup) when the client extends it to the whole site.
export default function CtaDialog({ content }) {
  const ref = useRef(null);
  const [step, setStep] = useState('choose'); // choose | consumer | pro
  const m = content.modal;
  const buys = content.buys || (content.buy ? [content.buy] : []);

  const close = () => ref.current?.close();

  // The page's own form card answers the professional path, so the form is never shown twice.
  function choosePro() {
    const card = document.getElementById(ENQUIRY_FORM_ID);
    if (!card) { setStep('pro'); return; }
    close();
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.querySelector('input')?.focus({ preventScroll: true });
  }

  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.('[data-cta-open], a[href="#enquiry-form"]');
      if (!trigger) return;
      const toForm = trigger.matches('a[href="#enquiry-form"]');
      // In-copy links to the B2B form keep scrolling to the page's card when it exists.
      if (toForm && document.getElementById(ENQUIRY_FORM_ID)) return;
      event.preventDefault();
      setStep(toForm ? 'pro' : 'choose');
      ref.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <dialog
      ref={ref}
      id={CTA_DIALOG_ID}
      className="va-cta-dialog"
      aria-labelledby="cta-dialog-title"
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      onClose={() => setStep('choose')}
    >
      <div className="va-cta-inner">
        <button type="button" className="va-cta-close" onClick={close} aria-label={m.close}>×</button>

        {step === 'choose' ? (
          <>
            <h2 id="cta-dialog-title">{m.title}</h2>
            <div className="va-cta-paths">
              <a href="#cta-consumer" role="button" data-cta="cta-consumer" onClick={(event) => { event.preventDefault(); setStep('consumer'); }}>
                <strong>{m.consumer.label}</strong>
                <span>{m.consumer.text}</span>
              </a>
              <a href="#cta-pro" role="button" data-cta="cta-pro" onClick={(event) => { event.preventDefault(); choosePro(); }}>
                <strong>{m.pro.label}</strong>
                <span>{m.pro.text}</span>
              </a>
            </div>
          </>
        ) : null}

        {step === 'consumer' ? (
          <>
            <h2 id="cta-dialog-title">{m.consumerTitle}</h2>
            {buys.length ? null : <p>{m.noShop}</p>}
            <div className="elementor elementor-87 va-guide-ctas">
              {buys.length
                ? buys.map((b) => (
                  <ActionButton key={b.href} elementId="9ee9a76" href={b.href} rel={b.rel} target="_blank" data-goal={b.goal || undefined}>{b.label}</ActionButton>
                ))
                : <ActionButton elementId="9ee9a76" href={content.contact}>{content.enquiry.genLink}</ActionButton>}
            </div>
            {content.also ? (
              <p>
                {content.also.label}{' '}
                {content.also.links.map((l, i) => (
                  <span key={l.href}>{i ? ', ' : ''}<a href={l.href} rel={l.rel} target="_blank" data-goal={l.goal || undefined}>{l.label}</a></span>
                ))}
              </p>
            ) : null}
            {buys.length ? <p>{content.enquiry.genLabel} <a href={content.contact}>{content.enquiry.genLink}</a></p> : null}
            <button type="button" className="va-cta-back" onClick={() => setStep('choose')}>{m.back}</button>
          </>
        ) : null}

        {step === 'pro' ? (
          <>
            <h2 id="cta-dialog-title">{content.enquiry.form.title}</h2>
            <EnquiryLinks enquiry={content.enquiry} contact={content.contact} alwaysOpen formId={MODAL_FORM_ID} general={false} />
            <button type="button" className="va-cta-back" onClick={() => setStep('choose')}>{m.back}</button>
          </>
        ) : null}
      </div>
    </dialog>
  );
}
