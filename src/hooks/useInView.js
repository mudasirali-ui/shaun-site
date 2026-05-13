import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a CSS entrance animation when a DOM element scrolls into the viewport.
 * Returns a ref to attach to the target element and a boolean `isVisible`.
 *
 * @param {Object}  options
 * @param {string}  options.threshold  – IntersectionObserver threshold (0-1)
 * @param {string}  options.rootMargin – margin around root
 * @param {boolean} options.once       – unobserve after first trigger
 */
export function useInView({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}
