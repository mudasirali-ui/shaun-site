'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ServicesPreview() {
  return (
    <section className="section section--services-preview" id="services">
      <div className="container">
        <SectionHeading tag={SERVICES.tag} heading={SERVICES.heading} />

        <motion.div
          className="services-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SERVICES.items.map((service, i) => (
            <motion.article
              key={service.title}
              className="services-list__item"
              variants={fadeUp}
              custom={i}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="services-list__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="services-list__body">
                <span className="services-list__icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <motion.span
                className="services-list__arrow"
                aria-hidden="true"
                initial={{ opacity: 0.4, x: 0 }}
                whileHover={{ opacity: 1, x: 6 }}
              >
                →
              </motion.span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="services-preview__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Button href="/services" variant="secondary">
            Explore services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
