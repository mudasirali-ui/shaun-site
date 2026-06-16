'use client';

import { motion } from 'framer-motion';
import { ABOUT, IMAGES } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export default function AboutSection({ compact = false }) {
  return (
    <section className="section section--about" id="about">
      <div className="container">
        <SectionHeading tag={ABOUT.tag} heading={ABOUT.heading} />

        <div className={`about__grid${compact ? ' about__grid--compact' : ''}`}>
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImagePlaceholder
              src={IMAGES.about}
              alt="Shaun Taliana at work"
              aspect="4/5"
              label="About image placeholder"
              hd
              quality={100}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 480px"
            />
          </motion.div>

          <div className="about__content">
            <motion.p
              className="about__intro"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {ABOUT.description}
            </motion.p>

            <motion.div
              className="about__cards"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.article className="card" variants={fadeUp} custom={0}>
                <h3>{ABOUT.differentiator.title}</h3>
                <p>{ABOUT.differentiator.body}</p>
              </motion.article>

              <motion.article className="card" variants={fadeUp} custom={1}>
                <h3>{ABOUT.strengths.title}</h3>
                <ul className="about__list">
                  {ABOUT.strengths.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
