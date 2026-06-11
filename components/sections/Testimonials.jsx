'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/siteData';
import SectionHeading from '@/components/ui/SectionHeading';

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    scale: 0.98,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const items = TESTIMONIALS.items;

  const goTo = useCallback(
    (next) => {
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % items.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="section section--testimonials" id="testimonials">
      <div className="container">
        <SectionHeading
          tag={TESTIMONIALS.tag}
          heading={TESTIMONIALS.heading}
          subheading={TESTIMONIALS.subheading}
          align="center"
        />

        <div className="testimonials__slider">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              className="testimonial"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <blockquote>
                <svg className="testimonial__quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p>&ldquo;{current.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <span className="testimonial__avatar" aria-hidden="true">
                  {current.initial}
                </span>
                <div>
                  <cite>{current.role}</cite>
                  <span>{current.sector}</span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="testimonials__controls">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials__dot${i === index ? ' testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
