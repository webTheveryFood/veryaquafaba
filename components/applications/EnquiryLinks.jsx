'use client';

import { useEffect, useRef, useState } from 'react';
import { track } from '../buy/contact-tracking';
import { loadTurnstile, TURNSTILE_SITE_KEY } from '../shared/turnstile-loader';

// Text links under the purchase CTAs (client 2026-09-16):
// - professional enquiries open a short inline B2B form (company, country, email,
//   application, estimated monthly volume, project). The submission carries the source
//   page and is the B2B lead metric: exactly ONE CONVERSION per server-confirmed submit;
// - general enquiries go to the locale's standard contact form.
export const ENQUIRY_FORM_ID = 'enquiry-form';
export const ENQUIRY_GOAL = 'production-enquiry-success';
const FIELDS = ['company', 'country', 'email', 'application', 'volume', 'project'];

// The form stays closed until asked for: on the set-2 commercial pages the trigger is the
// site's black pill (`button`), and any CTA elsewhere on the page carrying data-enquiry-open
// opens it too and moves the focus to the first field.
export default function EnquiryLinks({ enquiry, contact, button = null }) {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [turnstileToken, setTurnstileToken] = useState('');
  const started = useRef(false);
  const widgetRef = useRef(null);
  const widgetIdRef = useRef(null);
  const labels = enquiry.form;

  // Turnstile widget, rendered only while the form is open and a site key exists.
  useEffect(() => {
    if (!open || !TURNSTILE_SITE_KEY) return undefined;
    let cancelled = false;
    loadTurnstile().then(() => {
      if (cancelled || !window.turnstile || !widgetRef.current) return;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      });
    });
    return () => {
      cancelled = true;
      try { window.turnstile?.remove(widgetIdRef.current); } catch { /* noop */ }
    };
  }, [open]);

  // Any CTA of the page (the strip under the lead) opens this form.
  useEffect(() => {
    const onClick = (event) => {
      const trigger = event.target.closest?.('[data-enquiry-open]');
      if (!trigger) return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Focus the first field when the form is opened from a CTA, so the panel is not missed.
  useEffect(() => {
    if (!open || !formRef.current) return;
    formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current.querySelector('input')?.focus({ preventScroll: true });
  }, [open]);

  const base = { form_id: ENQUIRY_FORM_ID, locale: enquiry.locale, application: enquiry.application, source_page: enquiry.sourcePath };

  function onFocus() {
    if (started.current) return;
    started.current = true;
    track('FORM_START', base);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const fd = new FormData(event.currentTarget);
    const payload = Object.fromEntries(FIELDS.map((k) => [k, String(fd.get(k) || '').trim()]));
    payload.locale = enquiry.locale;
    payload.sourcePath = enquiry.sourcePath || window.location.pathname;
    payload.turnstileToken = turnstileToken;
    if (TURNSTILE_SITE_KEY && !turnstileToken) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        track('FORM_SUCCESS', base);
        track('CONVERSION', { goal_key: ENQUIRY_GOAL, ...base });
        setStatus('ok');
        event.target.reset();
      } else {
        track('FORM_ERROR', { ...base, status: res.status, error: data.error || 'server' });
        setStatus('error');
        try { window.turnstile?.reset(widgetIdRef.current); } catch { /* noop */ }
        setTurnstileToken('');
      }
    } catch {
      track('FORM_ERROR', { ...base, status: 0, error: 'network' });
      setStatus('error');
    }
  }

  return (
    <div className={`va-guide-enquiry${button ? ' va-guide-enquiry--button' : ''}`}>
      {button ? (
        <div className="elementor elementor-87 va-guide-ctas">
          <a
            className="va-guide-enquiry-button"
            href={`#${ENQUIRY_FORM_ID}`}
            data-enquiry-toggle
            aria-expanded={open}
            aria-controls={ENQUIRY_FORM_ID}
            onClick={(ev) => { ev.preventDefault(); setOpen((v) => !v); }}
          >
            {button}
          </a>
        </div>
      ) : (
        <p>
          {enquiry.proLabel}{' '}
          <a href={`#${ENQUIRY_FORM_ID}`} data-enquiry-toggle aria-expanded={open} aria-controls={ENQUIRY_FORM_ID} onClick={(ev) => { ev.preventDefault(); setOpen((v) => !v); }}>
            {enquiry.proLink}
          </a>
        </p>
      )}
      {open ? (
        <form ref={formRef} id={ENQUIRY_FORM_ID} name={ENQUIRY_FORM_ID} className="va-guide-form" data-status={status} noValidate onSubmit={onSubmit} onFocus={onFocus}>
          <h3>{labels.title}</h3>
          <div className="va-guide-form-grid">
            <label>{labels.company}<input name="company" type="text" required maxLength={200} autoComplete="organization" /></label>
            <label>{labels.country}<input name="country" type="text" required maxLength={100} autoComplete="country-name" /></label>
            <label>{labels.email}<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
            <label>{labels.application}<input name="application" type="text" required maxLength={200} defaultValue={enquiry.application} /></label>
            <label>{labels.volume}<input name="volume" type="text" required maxLength={200} /></label>
          </div>
          <label>{labels.project}<textarea name="project" rows={5} required maxLength={3000} /></label>
          {TURNSTILE_SITE_KEY ? <div ref={widgetRef} className="vf-turnstile" /> : null}
          <div className="va-guide-form-actions">
            <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? labels.sending : labels.submit}</button>
            <button type="button" onClick={() => setOpen(false)}>{labels.close}</button>
          </div>
          <p className="va-guide-form-status" role="status" aria-live="polite">
            {status === 'ok' ? labels.success : status === 'error' ? labels.error : ''}
          </p>
        </form>
      ) : null}
      <p>
        {enquiry.genLabel} <a href={contact}>{enquiry.genLink}</a>
      </p>
    </div>
  );
}
