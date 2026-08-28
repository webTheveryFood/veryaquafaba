'use client';

import { useEffect } from 'react';

// The frozen Connect-Polylang language switcher is `drop-on-click`: the original
// WordPress JS opened it by toggling `cpel-switcher__toggle--on`, which the CSS
// then expands. That JS no longer runs reliably once the page is React. Re-add
// just the toggle so the dropdown opens on click/tap on every page. Hover/focus
// opening is handled purely in CSS (native.css).
export default function SwitcherToggle() {
  useEffect(() => {
    function onClick(event) {
      const toggle = event.target.closest('.cpel-switcher__toggle');
      document.querySelectorAll('.cpel-switcher__toggle--on').forEach((open) => {
        if (open !== toggle) open.classList.remove('cpel-switcher__toggle--on');
      });
      if (toggle) {
        event.preventDefault();
        toggle.classList.toggle('cpel-switcher__toggle--on');
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
