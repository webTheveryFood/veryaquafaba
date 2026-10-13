'use client';

import { useEffect, useRef, useState } from 'react';
import ActionButton from '../shared/ActionButton';
import EnquiryLinks, { ENQUIRY_FORM_ID } from './EnquiryLinks';
import { track, buildConversion } from '../buy/contact-tracking';
import { loadTurnstile, TURNSTILE_SITE_KEY } from '../shared/turnstile-loader';

export const CTA_DIALOG_ID = 'cta-dialog';
const MODAL_FORM_ID = 'enquiry-form-modal';
const HOME_FORM_ID = 'contact-form-modal';

// One primary call to action (user, 13 October 2026): every opener on the page carries
// data-cta-open and opens this dialog, one step, two options:
// - buy: the country's shop (Amazon US/DE, InstantChef, the country page's listings), a direct
//   link with its data-goal; none where there is no shop (purchase route per country, 28 August);
// - get in touch: the form right here in the dialog, for both audiences: "at home" is the short
//   contact form (same API and goal as the Products page), "for my business" the B2B form.
// The snippet measures the clicks through data-cta: cta-open, cta-consumer (shop), cta-pro (get in
// touch); each form sends its single CONVERSION (contact-form-success or production-enquiry-success).
// ponytail: rendered by the purchase block, so only the new pages have it; mount it in the root
// layout (with a locale lookup) when the client extends it to the whole site.
export default function CtaDialog({ content }) {
  const ref = useRef(null);
  const [formOpen, setFormOpen] = useState(false);
  const [who, setWho] = useState('home'); // home | business
  const buys = content.buys || (content.buy ? [content.buy] : []);
  const m = content.modal;

  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.('[data-cta-open], a[href="#enquiry-form"]');
      if (!trigger) return;
      const toForm = trigger.matches('a[href="#enquiry-form"]');
      // In-copy links to the B2B form keep scrolling to the page's own form card when it exists.
      if (toForm && document.getElementById(ENQUIRY_FORM_ID)) return;
      event.preventDefault();
      setFormOpen(toForm);
      if (toForm) setWho('business');
      ref.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // The form opens under the buttons with the cursor in its first field (the browser scrolls only if needed).
  useEffect(() => {
    if (formOpen) document.getElementById(who === 'home' ? HOME_FORM_ID : MODAL_FORM_ID)?.querySelector('input')?.focus();
  }, [formOpen, who]);

  const close = () => ref.current?.close();
  return (
    <dialog
      ref={ref}
      id={CTA_DIALOG_ID}
      className="va-cta-dialog"
      aria-labelledby="cta-dialog-title"
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      onClose={() => { setFormOpen(false); setWho('home'); }}
    >
      <div className="va-cta-inner">
        <button type="button" className="va-cta-close" onClick={close} aria-label={m.close}>×</button>
        <h2 id="cta-dialog-title">{content.title}</h2>
        {buys.length ? null : <p>{m.noShop}</p>}
        <div className="elementor elementor-87 va-guide-ctas">
          {buys.map((b) => (
            <ActionButton key={b.href} elementId="9ee9a76" href={b.href} rel={b.rel} target="_blank" data-goal={b.goal || undefined} data-cta="cta-consumer">{b.label}</ActionButton>
          ))}
          <ActionButton
            elementId="9ee9a76"
            href="#cta-contact"
            wrapperClassName={buys.length ? 'va-guide-cta-outline' : ''}
            role="button"
            aria-expanded={formOpen}
            aria-controls="cta-contact"
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
        {formOpen ? (
          <div id="cta-contact">
            <div className="va-cta-who" role="group">
              <button type="button" className={who === 'home' ? 'is-active' : ''} aria-pressed={who === 'home'} onClick={() => setWho('home')}>{m.home}</button>
              <button type="button" className={who === 'business' ? 'is-active' : ''} aria-pressed={who === 'business'} onClick={() => setWho('business')}>{m.business}</button>
            </div>
            {who === 'home'
              ? <HomeContact labels={m.form} locale={content.enquiry.locale} />
              : <EnquiryLinks enquiry={content.enquiry} contact={content.contact} alwaysOpen formId={MODAL_FORM_ID} general={false} />}
          </div>
        ) : null}
      </div>
    </dialog>
  );
}

// The short contact form for a home cook: same API, email and CONVERSION as the Products page form
// (goal contact-form-success), with its own form id so the panel can tell the two apart.
function HomeContact({ labels, locale }) {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [token, setToken] = useState('');
  const widgetRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return undefined;
    let cancelled = false;
    loadTurnstile().then(() => {
      if (cancelled || !window.turnstile || !widgetRef.current) return;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: 'interaction-only',
        callback: setToken,
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
      });
    });
    return () => {
      cancelled = true;
      try { window.turnstile?.remove(widgetIdRef.current); } catch { /* noop */ }
    };
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      interests: [],
      message: String(fd.get('message') || '').trim(),
      locale,
      path: window.location.pathname,
      turnstileToken: token,
    };
    if (TURNSTILE_SITE_KEY && !token) { setStatus('error'); return; }
    setStatus('sending');
    const base = { form_id: HOME_FORM_ID, locale };
    try {
      const res = await fetch('/api/contact/', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        track('FORM_SUCCESS', base);
        track('CONVERSION', { ...buildConversion([], [], locale), ...base });
        setStatus('ok');
        form.reset();
      } else {
        track('FORM_ERROR', { ...base, status: res.status, error: data.error || 'server' });
        setStatus('error');
      }
      try { window.turnstile?.reset(widgetIdRef.current); } catch { /* noop */ }
      setToken('');
    } catch {
      track('FORM_ERROR', { ...base, status: 0, error: 'network' });
      setStatus('error');
    }
  }

  return (
    <form id={HOME_FORM_ID} name={HOME_FORM_ID} className="va-guide-form" data-status={status} noValidate onSubmit={onSubmit}>
      <div className="va-guide-form-grid">
        <label>{labels.name}<input name="name" type="text" required maxLength={400} autoComplete="name" /></label>
        <label>{labels.email}<input name="email" type="email" required maxLength={400} autoComplete="email" /></label>
      </div>
      <label>{labels.message}<textarea name="message" rows={5} required maxLength={2000} /></label>
      {TURNSTILE_SITE_KEY ? <div ref={widgetRef} className="vf-turnstile" /> : null}
      <div className="va-guide-form-actions">
        <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? labels.sending : labels.submit}</button>
      </div>
      <p className="va-guide-form-status" role="status" aria-live="polite">
        {status === 'ok' ? labels.success : status === 'error' ? labels.error : ''}
      </p>
    </form>
  );
}
