'use client';

import { useEffect, useRef, useState } from 'react';

// ponytail: content is ALWAYS rendered visible — never gated behind JS. The
// entrance animation is applied as a pure enhancement once the element scrolls
// into view. Previously this hid content with visibility:hidden until an
// IntersectionObserver fired, so anything that disturbed hydration or the
// observer (a DOM-mutating browser extension like Bitdefender's
// `bis_skin_checked`, dev StrictMode remounts, JS errors) could strand an
// image invisible. Enhancement-only guarantees the image shows regardless.
export default function ElementorReveal({
  as: Tag = 'div',
  animation = 'slideInUp',
  slow = false,
  className = '',
  children,
  style,
  ...props
}) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setAnimate(true);
        observer.disconnect();
      },
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animationClasses = animate
    ? ` animated${slow ? ' animated-slow' : ''} ${animation}`
    : '';

  return (
    <Tag ref={ref} className={`${className}${animationClasses}`} style={style} {...props}>
      {children}
    </Tag>
  );
}
