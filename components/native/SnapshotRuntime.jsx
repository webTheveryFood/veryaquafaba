'use client';

import { useLayoutEffect } from 'react';

// Frozen pages render from their HTML + CSS alone. The original WordPress /
// Elementor scripts are intentionally NOT re-injected: they depend on jQuery
// and `wp` globals that never load in order, and the Elementor frontend then
// tries to lazy-load handler chunks that were never captured, throwing an
// endless ChunkLoadError storm without adding anything visible. The language
// switcher works via SwitcherToggle and entrance animations are neutralised in
// CSS, so nothing here needs that broken JS.
//
// This component now only restores the frozen <body> class for styling.
export default function SnapshotRuntime({ bodyClass = '' }) {
  useLayoutEffect(() => {
    if (!bodyClass) return undefined;
    const previousBodyClass = document.body.className;
    document.body.className = bodyClass;
    return () => {
      document.body.className = previousBodyClass;
    };
  }, [bodyClass]);

  return null;
}
