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

// The same once the browser is idle (2 s at most): a form that opens on a tap, or that a tap scrolls to, never runs
// Cloudflare's script and widget in the frames right after it (INP, November 2026). The visitor types for longer
// than that, so the check is still ready before they send.
export function loadTurnstileWhenIdle() {
  return new Promise((resolve) => {
    const go = () => loadTurnstile().then(resolve);
    if (window.turnstile) go();
    else if ('requestIdleCallback' in window) window.requestIdleCallback(go, { timeout: 2000 });
    else setTimeout(go, 300);
  });
}
