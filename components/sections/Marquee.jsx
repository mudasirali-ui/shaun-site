'use client';

import { MARQUEE_ITEMS } from '@/lib/siteData';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
