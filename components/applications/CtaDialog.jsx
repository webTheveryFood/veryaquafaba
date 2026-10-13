'use client';

import { useEffect, useRef, useState } from 'react';
import ActionButton from '../shared/ActionButton';
import EnquiryLinks, { ENQUIRY_FORM_ID } from './EnquiryLinks';
import { track, buildConversion } from '../buy/contact-tracking';
import { loadTurnstile, TURNSTILE_SITE_KEY } from '../shared/turnstile-loader';

export const CTA_DIALOG_ID = 'cta-dialog';
const CONTACT_FORM_ID = 'contact-form-modal';
const ENQUIRY_MODAL_ID = 'enquiry-form-modal';
const SHOP_COUNTRIES = ['US', 'DE', 'FR'];

// The CTA dialog (Esteban to Arnaud and the measurement brief, 13 October 2026). One button, the
// same on the guides, the recipes and the new pages (<button data-cta="cta-open">), opens this
// window with two choices, both <button>:
// - for home (cta-consumer): the shop of the visitor's country, detected on the server, with a
//   manual choice as fallback: Amazon US, Amazon Germany, InstantChef in France (whisky.fr too on
//   the cocktail pages); anywhere else (AT, CH, CA, AU included) the contact form;
// - for a business (cta-pro): free samples or a professional enquiry, both through the B2B form
//   (production-enquiry-success), plus pro.medelys.fr for France.
// Every purchase link in here carries its data-goal and data-cta="modal-buy"; each form sends one
// CONVERSION once the server answered OK, with props intent, route, origin and lang. No field is
// focused for the visitor: a focus would count as a form start.
// ponytail: rendered next to each page's opener; mount it in the root layout when the client
// extends it to the Products pages.
export default function CtaDialog({ content }) {
  const ref = useRef(null);
  const asked = useRef(false);
  const [country, setCountry] = useState(null); // US | DE | FR | OTHER
  const [path, setPath] = useState(null); // consumer | pro
  const [intent, setIntent] = useState('samples'); // samples | contact (professional path)
  const m = content.modal;
  const lang = content.enquiry.locale.slice(0, 2);
  const toKey = (c) => (SHOP_COUNTRIES.includes(c) ? c : 'OTHER');

  // The visitor's country, read once, the first time the window opens.
  function detectCountry() {
    if (asked.current) return;
    asked.current = true;
    fetch('/api/geo/')
      .then((res) => res.json())
      .then((data) => setCountry(toKey(data.country || content.country)))
      .catch(() => setCountry(toKey(content.country)));
  }

  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.('[data-cta-open], a[href="#enquiry-form"]');
      if (!trigger) return;
      const toForm = trigger.matches('a[href="#enquiry-form"]');
      // In-copy links to the B2B form keep scrolling to the page's own form card when it exists.
      if (toForm && document.getElementById(ENQUIRY_FORM_ID)) return;
      event.preventDefault();
      detectCountry();
      setPath(toForm ? 'pro' : null);
      setIntent(toForm ? 'contact' : 'samples');
      ref.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const close = () => ref.current?.close();
  const shop = country && country !== 'OTHER' ? content.shops[country] : null;
  const buyLink = (l) => <a href={l.href} rel={l.rel} target="_blank" data-goal={l.goal || undefined} data-cta="modal-buy">{l.label}</a>;

  return (
    <dialog
      ref={ref}
      id={CTA_DIALOG_ID}
      className="va-cta-dialog"
      aria-labelledby="cta-dialog-title"
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      onClose={() => { setPath(null); setIntent('samples'); }}
    >
      <div className="va-cta-inner">
        <button type="button" className="va-cta-close" onClick={close} aria-label={m.close}>×</button>
        <h2 id="cta-dialog-title">{m.open}</h2>
        <div className="va-cta-switch" role="group">
          <button type="button" className={path === 'consumer' ? 'is-active' : ''} aria-pressed={path === 'consumer'} data-cta="cta-consumer" onClick={() => setPath('consumer')}>{m.home}</button>
          <button type="button" className={path === 'pro' ? 'is-active' : ''} aria-pressed={path === 'pro'} data-cta="cta-pro" onClick={() => { setPath('pro'); setIntent('samples'); }}>{m.business}</button>
        </div>

        {path === 'consumer' && country ? (
          <>
            {shop ? (
              <div className="elementor elementor-87 va-guide-ctas">
                <ActionButton elementId="9ee9a76" href={shop.href} rel={shop.rel} target="_blank" data-goal={shop.goal || undefined} data-cta="modal-buy">{shop.label}</ActionButton>
              </div>
            ) : <p>{m.noShop}</p>}
            {country === 'FR' && content.whisky ? (
              <p>{content.whisky.label} {content.whisky.links.map((l, i) => <span key={l.href}>{i ? ', ' : ''}{buyLink(l)}</span>)}</p>
            ) : null}
            <div className="va-cta-countries" role="group" aria-label={content.countries.label}>
              <span>{content.countries.label}</span>
              {[...SHOP_COUNTRIES, 'OTHER'].map((c) => (
                <button key={c} type="button" className={country === c ? 'is-active' : ''} aria-pressed={country === c} onClick={() => setCountry(c)}>{content.countries[c]}</button>
              ))}
            </div>
            {shop ? null : <ShortForm labels={m.form} locale={content.enquiry.locale} lang={lang} />}
          </>
        ) : null}

        {path === 'pro' ? (
          <>
            <div className="va-cta-switch va-cta-switch--small" role="group">
              <button type="button" className={intent === 'samples' ? 'is-active' : ''} aria-pressed={intent === 'samples'} data-cta="samples" onClick={() => setIntent('samples')}>{m.samples}</button>
              <button type="button" className={intent === 'contact' ? 'is-active' : ''} aria-pressed={intent === 'contact'} onClick={() => setIntent('contact')}>{m.enquiry}</button>
            </div>
            {country === 'FR' ? <p>{buyLink(content.medelys)}</p> : null}
            <EnquiryLinks enquiry={content.enquiry} contact={content.contact} alwaysOpen formId={ENQUIRY_MODAL_ID} general={false} intent={intent} route="pro" origin="modal" />
          </>
        ) : null}
      </div>
    </dialog>
  );
}

// The consumer contact form (name, email, message) for countries without a shop: same API, email
// and goal (contact-form-success) as the Products page form, with props intent contact, route
// consumer, origin modal.
function ShortForm({ labels, locale, lang }) {
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
    const formEl = event.currentTarget;
    const fd = new FormData(formEl);
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
    const base = { form_id: CONTACT_FORM_ID, locale, source_page: payload.path };
    try {
      const res = await fetch('/api/contact/', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        track('FORM_SUCCESS', base);
        track('CONVERSION', { ...buildConversion([], [], locale), ...base, props: { intent: 'contact', route: 'consumer', origin: 'modal', lang } });
        setStatus('ok');
        formEl.reset();
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
    <form id={CONTACT_FORM_ID} name={CONTACT_FORM_ID} className="va-guide-form" data-status={status} noValidate onSubmit={onSubmit}>
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
