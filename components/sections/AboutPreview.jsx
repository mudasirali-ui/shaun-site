'use client';

import { motion } from 'framer-motion';
import { ABOUT, SITE } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Button from '@/components/ui/Button';

export default function AboutPreview() {
  return (
    <section className="section section--about" id="about">
      <div className="container">
        <motion.div
          className="about-preview__header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="section-tag" variants={fadeUp} custom={0}>
            {ABOUT.tag}
          </motion.p>
          <motion.div className="about-preview__intro-row" variants={fadeUp} custom={1}>
            <div className="about-preview__greeting">
              <span className="about-preview__hi">Hi</span>
              <span className="about-preview__wave" aria-hidden="true">👋</span>
            </div>
            <div>
              <span className="about-preview__iam">I am</span>
              <h2>{SITE.name}</h2>
            </div>
          </motion.div>
        </motion.div>

        <div className="about-preview__grid">
          <motion.div
            className="about-preview__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImagePlaceholder
              src={null}
              alt="Shaun Taliana at work"
              aspect="4/5"
              label="About image placeholder"
            />
          </motion.div>

          <div className="about-preview__content">
            <motion.p
              className="about-preview__desc"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65 }}
            >
              {ABOUT.description}
            </motion.p>

            <motion.h3
              className="about-preview__heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {ABOUT.heading}
            </motion.h3>

            <motion.div
              className="about-preview__panels"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.article className="card about-panel" variants={fadeUp} custom={0}>
                <h4>{ABOUT.differentiator.title}</h4>
                <p>{ABOUT.differentiator.body}</p>
              </motion.article>

              <motion.article className="card about-panel" variants={fadeUp} custom={1}>
                <h4>{ABOUT.strengths.title}</h4>
                <ul className="strength-list">
                  {ABOUT.strengths.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                    >
                      <span className="strength-list__bar" aria-hidden="true">
                        <motion.span
                          className="strength-list__fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={viewportOnce}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </motion.div>

            <motion.div
              className="about-preview__actions"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Button href="/about" variant="secondary">
                {ABOUT.tag}
              </Button>
              <Button href="/#contact" variant="primary">
                Book a conversation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
