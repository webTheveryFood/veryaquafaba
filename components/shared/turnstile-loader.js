// Loads Cloudflare Turnstile once (explicit render mode). Same script and mode as the
// contact form (components/buy/ContactSection.jsx), shared by the enquiry form.
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

export function loadTurnstile() {
  return new Promise((resolve) => {
    if (window.turnstile) return resolve();
    const existing = document.querySelector('script[data-turnstile]');
    if (existing) { existing.addEventListener('load', () => resolve()); return; }
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true; s.defer = true; s.setAttribute('data-turnstile', '1');
    s.addEventListener('load', () => resolve());
    document.head.appendChild(s);
  });
}
