'use client';

import { useEffect, useRef, useState } from 'react';
import EnquiryLinks, { ENQUIRY_FORM_ID } from './EnquiryLinks';
import { track, buildConversion } from '../buy/contact-tracking';
import { loadTurnstile, TURNSTILE_SITE_KEY } from '../shared/turnstile-loader';

export const CTA_DIALOG_ID = 'cta-dialog';
const CONTACT_FORM_ID = 'contact-form-modal';
const ENQUIRY_MODAL_ID = 'enquiry-form-modal';

// The CTA dialog (Esteban to Arnaud and the measurement brief, 13 October 2026). One button, the
// same on the guides, the recipes and the new pages (<button data-cta="cta-open">), opens this
// window with two choices, both <button>:
// - for home (cta-consumer): the shop of the visitor's country, detected on the server, with a
//   manual choice as fallback (content.shops, from data/applications/country-shops.js): Amazon US,
//   Amazon Germany (Austria too), Siradis in Switzerland, InstantChef in France (whisky.fr too on
//   the cocktail pages), Qualifirst in Canada; anywhere else (AU included) the contact form;
// - for a business (cta-pro): the professional enquiry, the B2B form (production-enquiry-success),
//   plus pro.medelys.fr for France. No free samples here (user, 13 October 2026).
// Every purchase link in here carries its data-goal and data-cta="modal-buy"; each form sends one
// CONVERSION once the server answered OK, with props intent, route, origin and lang. No field is
// focused for the visitor: a focus would count as a form start.
// The "Get in touch" opener under the lead (data-cta-open="contact") opens the same window on the
// forms: for home the contact form straight away, for a business the B2B form; in that mode the
// choices are contact-consumer / contact-pro and the forms send origin contact-modal.
// ponytail: rendered next to each page's opener; mount it in the root layout when the client
// extends it to the Products pages.
export default function CtaDialog({ content }) {
  const ref = useRef(null);
  const asked = useRef(false);
  const [country, setCountry] = useState(null); // a key of content.shops | OTHER
  const [mode, setMode] = useState('buy'); // buy (the purchase block) | contact ("Get in touch" under the lead)
  const [path, setPath] = useState(null); // consumer | pro
  const backRef = useRef(null);
  const m = content.modal;
  const lang = content.enquiry.locale.slice(0, 2);
  const shopCountries = Object.keys(content.shops);
  const toKey = (c) => (content.shops[c] ? c : 'OTHER');

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
      setMode(trigger.getAttribute('data-cta-open') === 'contact' ? 'contact' : 'buy');
      setPath(toForm ? 'pro' : null);
      ref.current?.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Moving between steps keeps the keyboard in the window: the back button on step 2, the first
  // card on step 1. Never a form field, which would count as a form start.
  useEffect(() => {
    if (!ref.current?.open) return;
    if (path) backRef.current?.focus();
    else ref.current.querySelector('.va-cta-choice')?.focus();
  }, [path]);

  const close = () => ref.current?.close();
  const shop = country && country !== 'OTHER' ? content.shops[country] : null;
  const host = (href) => new URL(href).hostname.replace(/^www\./, '');
  // One row per shop: the country's shop, whisky.fr on the French cocktail pages, and
  // pro.medelys.fr for a business in France.
  const shops = [
    shop && { ...shop, hint: host(shop.href) },
    ...(country === 'FR' && content.whisky ? content.whisky.links.map((l) => ({ ...l, name: 'whisky.fr', hint: l.label })) : []),
    path === 'pro' && country === 'FR' && { ...content.medelys, name: 'pro.medelys.fr', hint: content.medelys.label },
  ].filter(Boolean);

  return (
    <dialog
      ref={ref}
      id={CTA_DIALOG_ID}
      className="va-cta-dialog"
      aria-labelledby="cta-dialog-title"
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      onClose={() => setPath(null)}
    >
      <div className="va-cta-inner">
        <button type="button" className="va-cta-close" onClick={close} aria-label={m.close}>×</button>
        <h2 id="cta-dialog-title">{mode === 'contact' ? m.contact : m.open}</h2>
        {/* Step 1: who it is for. Two cards, the same data-cta values as the old pill switch. */}
        {path ? (
          <div className="va-cta-step-head">
            <button type="button" ref={backRef} className="va-cta-back" onClick={() => setPath(null)}>
              <span aria-hidden="true">←</span> {m.back}
            </button>
            <span className="va-cta-eyebrow">{path === 'pro' ? m.business : m.home}</span>
          </div>
        ) : (
          <div className="va-cta-step">
            <p className="va-cta-question">{m.question}</p>
            <div className="va-cta-choices" role="group" aria-label={m.question}>
              <button type="button" className="va-cta-choice" data-cta={mode === 'contact' ? 'contact-consumer' : 'cta-consumer'} onClick={() => setPath('consumer')}>
                <strong>{m.home}</strong><span>{m.homeHint}</span><i aria-hidden="true">→</i>
              </button>
              <button type="button" className="va-cta-choice" data-cta={mode === 'contact' ? 'contact-pro' : 'cta-pro'} onClick={() => setPath('pro')}>
                <strong>{m.business}</strong><span>{m.businessHint}</span><i aria-hidden="true">→</i>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: the form or the shop for that choice. */}
        {path ? <div className="va-cta-step" key={path}>
        {path === 'consumer' && mode === 'contact' ? <ShortForm labels={m.form} locale={content.enquiry.locale} lang={lang} origin="contact-modal" /> : null}

        {/* Buy: the shops of the visitor's country on both paths, each link tagged with the path
            (data-route) so home and business purchases can be told apart. */}
        {mode === 'buy' && country ? (
          <div className="va-cta-shop">
            <p className="va-cta-countries-label" id="cta-countries-label">{content.countries.label}</p>
            <div className="va-cta-countries" role="group" aria-labelledby="cta-countries-label">
              {[...shopCountries, 'OTHER'].map((c) => (
                <button key={c} type="button" className="va-cta-country" aria-pressed={country === c} onClick={() => setCountry(c)}>
                  <strong>{content.countries[c]}</strong>{content.shops[c] ? <span>{content.shops[c].name}</span> : null}
                </button>
              ))}
            </div>
            {shops.length ? (
              <ul className="va-cta-shops">
                {shops.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel={l.rel} target="_blank" data-goal={l.goal || undefined} data-cta="modal-buy" data-route={path}>
                      <strong>{l.name}</strong><span>{l.hint}</span><i aria-hidden="true">↗</i>
                    </a>
                  </li>
                ))}
              </ul>
            ) : path === 'consumer' ? <p className="va-cta-noshop">{m.noShop}</p> : null}
          </div>
        ) : null}
        {path === 'consumer' && mode === 'buy' && country && !shop ? <ShortForm labels={m.form} locale={content.enquiry.locale} lang={lang} /> : null}

        {/* Business: the B2B form when getting in touch, or in buy mode where no shop serves the
            country (user, 15 October 2026: the buy window shows only the shops for a business). */}
        {path === 'pro' && (mode === 'contact' || (country && !shops.length)) ? (
          <EnquiryLinks enquiry={content.enquiry} contact={content.contact} alwaysOpen formId={ENQUIRY_MODAL_ID} general={false} intent="contact" route="pro" origin={mode === 'contact' ? 'contact-modal' : 'modal'} />
        ) : null}
        </div> : null}
      </div>
    </dialog>
  );
}

// The consumer contact form (name, email, message) for countries without a shop: same API, email
// and goal (contact-form-success) as the Products page form, with props intent contact, route
// consumer, origin modal.
function ShortForm({ labels, locale, lang, origin = 'modal' }) {
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
        track('CONVERSION', { ...buildConversion([], [], locale), ...base, props: { intent: 'contact', route: 'consumer', origin, lang } });
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
