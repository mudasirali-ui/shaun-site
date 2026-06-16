'use client';

import { motion } from 'framer-motion';
import { HERO, IMAGES, SITE } from '@/lib/siteData';
import { fadeUp } from '@/lib/animations';
import Button from '@/components/ui/Button';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export default function Hero({ showImage = true }) {
  function openCalendly() {
    if (typeof window !== 'undefined' && window.Calendly && typeof window.Calendly.initPopupWidget === 'function') {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/cognaratraining' });
    } else if (typeof window !== 'undefined') {
      window.open('https://calendly.com/cognaratraining', '_blank');
    }
  }
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p className="eyebrow" variants={fadeUp} custom={0}>
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            dangerouslySetInnerHTML={{ __html: HERO.headline }}
          />

          <motion.blockquote className="hero__quote" variants={fadeUp} custom={2}>
            <p>&ldquo;{HERO.quote}&rdquo;</p>
          </motion.blockquote>

          <motion.div className="hero__pills" variants={fadeUp} custom={3}>
            {HERO.pills.map((pill) => (
              <motion.span
                key={pill}
                whileHover={{ y: -2, borderColor: 'var(--accent-light)' }}
                transition={{ duration: 0.25 }}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="hero__actions" variants={fadeUp} custom={4}>
            <button type="button" className="btn-calendly" onClick={openCalendly} id="cta-book-discovery">
              📅 Book a Discovery Call
            </button>
            <Button href="/#services" variant="primary" id="cta-explore-services">
              Explore services
            </Button>
            <Button href="/#contact" variant="secondary" id="cta-book-conversation">
              Book a conversation
            </Button>
          </motion.div>

          <motion.div className="hero__contact" variants={fadeUp} custom={5}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </motion.div>
        </motion.div>

        {showImage && (
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Portrait */}
            <motion.div
              className="hero__portrait-container"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImagePlaceholder
                src={IMAGES.hero}
                alt="Shaun Taliana, Industrial Relations Advisor"
                aspect="1"
                label="Portrait placeholder"
                className="hero__portrait"
                priority
                hd
                quality={100}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 42vw, 560px"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
