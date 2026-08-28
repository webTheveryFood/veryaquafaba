'use client';

import { useEffect } from 'react';
import Footer from './Footer';

export default function LocalizedFooter({ content, locale = 'en-GB' }) {
  useEffect(() => {
    if (!locale.startsWith('es')) return;

    const credit = document.querySelector('.elementor-element-b01b862 p');
    if (!credit) return;

    for (const node of credit.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.includes(' by ')) {
        node.textContent = node.textContent.replace(' by ', ' por ');
      }
    }
  }, [locale]);

  return <Footer content={content} />;
}
