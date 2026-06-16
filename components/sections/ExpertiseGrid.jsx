'use client';

import { motion } from 'framer-motion';
import { EXPERTISE } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function ExpertiseGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="section section--expertise" id="expertise" aria-label="Expertise">
      <div className="container">
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="expertise-header__title" dangerouslySetInnerHTML={{ __html: EXPERTISE.heading }} />
          <p className="expertise-header__subtitle">{EXPERTISE.description}</p>
        </motion.div>

        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {EXPERTISE.items.map((item) => (
            <motion.article
              key={item.title}
              className="expertise-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="expertise-card__accent"></div>
              <div className="expertise-card__icon-wrapper">
                <span className="expertise-card__icon">{item.icon}</span>
              </div>
              <h3 className="expertise-card__title">{item.title}</h3>
              <p className="expertise-card__body">{item.body}</p>
              <div className="expertise-card__footer">
                <div className="expertise-card__indicator"></div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
