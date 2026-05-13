import { useEffect, useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';

/**
 * Animates a number from 0 to its target when scrolled into view.
 * Handles strings like "20+", "55+", "1 000" gracefully.
 */
export default function AnimatedCounter({ value, duration = 1200 }) {
  const [ref, isVisible] = useInView({ threshold: 0.4 });
  const [display, setDisplay] = useState('0');
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;

    // Extract numeric part and any suffix like "+"
    const cleaned = value.replace(/\s/g, '');
    const numMatch = cleaned.match(/^(\d+)/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const suffix = cleaned.slice(numMatch[1].length); // e.g. "+"
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      // Format with space-separated thousands to match original style
      const formatted =
        current >= 1000
          ? current.toLocaleString('en-AU').replace(/,/g, ' ')
          : String(current);

      setDisplay(formatted + suffix);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isVisible, value, duration]);

  return <strong ref={ref}>{display}</strong>;
}
