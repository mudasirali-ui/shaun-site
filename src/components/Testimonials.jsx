import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data/siteData';

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  const [ref, isVisible] = useInView({ threshold: 0.05 });

  return (
    <section className="content-section testimonials-section" ref={ref}>
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Testimonials</p>
          <h2>Trusted by organisations across Australia</h2>
          <p>
            What clients and colleagues say about working with Shaun.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              className="testimonial-card"
              key={i}
              custom={i}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <div className="testimonial-quote-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M11.3 5.2C7.4 7.5 5 11.1 5 15.1c0 2.8 1.7 4.9 4 4.9 2.1 0 3.6-1.7 3.6-3.7 0-2-1.4-3.5-3.2-3.7.4-2.4 2.2-4.9 4.6-6.3L11.3 5.2zm9.6 0C17 7.5 14.6 11.1 14.6 15.1c0 2.8 1.7 4.9 4 4.9 2.1 0 3.6-1.7 3.6-3.7 0-2-1.4-3.5-3.2-3.7.4-2.4 2.2-4.9 4.6-6.3L20.9 5.2z" />
                </svg>
              </div>
              <blockquote className="testimonial-text">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.author.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <strong>{t.author}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
