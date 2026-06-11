'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
