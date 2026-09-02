'use client';

import { useState } from 'react';

export default function ContactSection({ content }) {
  const labels = content.formLabels || {};
  const rdLines = content.formLocale === 'de-DE'
    ? content.rd.map((line) => line.replaceAll(' - ', ' – '))
    : content.rd;

  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get('your-name') || '',
      email: fd.get('your-email') || '',
      interests: fd.getAll('Interest[]'),
      message: fd.get('your-message') || '',
      locale: content.formLocale || 'en-GB',
      vf_hp: fd.get('vf_hp') || '', // honeypot
    };

    setStatus('sending');
    setFeedback('');
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('ok');
        setFeedback(labels.sentOk || 'Thank you! Your message has been sent.');
        form.reset();
      } else {
        setStatus('error');
        setFeedback(labels.sendError || 'Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setStatus('error');
      setFeedback(labels.sendError || 'Something went wrong. Please try again or email us directly.');
    }
  }

  return (
    <section className="elementor-element elementor-element-408a1fa e-flex e-con-boxed e-con e-parent" data-id="408a1fa" data-element_type="container" id="contact" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-3e1a455 e-flex e-con-boxed e-con e-child" data-id="3e1a455" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-557abeb elementor-widget elementor-widget-heading" data-id="557abeb" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.title}</h2></div>
            <div className="elementor-element elementor-element-c7518fe elementor-widget elementor-widget-heading" data-id="c7518fe" data-element_type="widget" data-widget_type="heading.default"><h3 className="elementor-heading-title elementor-size-default">{content.subtitle}</h3></div>
          </div>
        </div>

        <div className="elementor-element elementor-element-3d93410 e-flex e-con-boxed e-con e-child" data-id="3d93410" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-f33d0b8 e-flex e-con-boxed e-con e-child" data-id="f33d0b8" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-92ef8b5 elementor-widget elementor-widget-heading" data-id="92ef8b5" data-element_type="widget" id="contactform_products" data-widget_type="heading.default">
                  <div className="elementor-heading-title elementor-size-default">
                    <div className="wpcf7 no-js" lang={content.formLocale || 'en-GB'} dir="ltr">
                      <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true" /></div>
                      <form className="wpcf7-form init" aria-label={labels.aria || 'Contact form'} noValidate data-status={status} onSubmit={handleSubmit}>
                        {/* honeypot: hidden from users, bots tend to fill it. Odd name so browser autofill leaves it empty. */}
                        <input type="text" name="vf_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} />
                        <p><label> {labels.name || 'Your name'}<br /><span className="wpcf7-form-control-wrap" data-name="your-name"><input size="40" maxLength="400" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" autoComplete="name" aria-required="true" aria-invalid="false" type="text" name="your-name" /></span> </label></p>
                        <p><label> {labels.email || 'Your e-mail address'}<br /><span className="wpcf7-form-control-wrap" data-name="your-email"><input size="40" maxLength="400" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" autoComplete="email" aria-required="true" aria-invalid="false" type="email" name="your-email" /></span> </label></p>
                        <p><span className="wpcf7-form-control-wrap" data-name="Interest"><span className="wpcf7-form-control wpcf7-checkbox">
                          {content.interests.map((interest, index) => (
                            <span className={`wpcf7-list-item${index === 0 ? ' first' : index === content.interests.length - 1 ? ' last' : ''}`} key={interest}><label><input type="checkbox" name="Interest[]" value={interest} /><span className="wpcf7-list-item-label">{interest}</span></label></span>
                          ))}
                        </span></span></p>
                        <p><label> {labels.message || 'Your message'}<br /><span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" maxLength="2000" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" name="your-message" /></span> </label></p>
                        <p><input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value={status === 'sending' ? (labels.sending || 'Sending…') : (labels.submit || 'Send message')} disabled={status === 'sending'} /></p>
                        <div className={`wpcf7-response-output${status === 'ok' ? ' wpcf7-mail-sent-ok' : status === 'error' ? ' wpcf7-mail-sent-ng' : ''}`} aria-hidden={status === 'idle' ? 'true' : 'false'} role="status" aria-live="polite">{feedback}</div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-a1b044d e-flex e-con-boxed e-con e-child" data-id="a1b044d" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-7217780 elementor-widget elementor-widget-heading" data-id="7217780" data-element_type="widget" data-widget_type="heading.default"><h2 className="elementor-heading-title elementor-size-default">{content.businessTitle || 'business contact details'}</h2></div>
                <div className="elementor-element elementor-element-07e3c80 elementor-widget elementor-widget-text-editor" data-id="07e3c80" data-element_type="widget" data-widget_type="text-editor.default"><p>{content.emailLabel || 'Email'} : <a href={`mailto:${content.email}`}>{content.email}</a></p></div>
                <div className="elementor-element elementor-element-4cb6a91 elementor-widget elementor-widget-text-editor" data-id="4cb6a91" data-element_type="widget" data-widget_type="text-editor.default">
                  <p>{content.headquartersLabel || 'HEADQUARTERS:'}<br />{content.headquarters.map((line, index) => <span key={line}>{line}{index < content.headquarters.length - 1 ? <br /> : null}</span>)}</p>
                  <p>{content.rdLabel || 'R&D:'}<br />{rdLines.map((line, index) => <span key={line}>{line}{index < rdLines.length - 1 ? <br /> : null}</span>)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
