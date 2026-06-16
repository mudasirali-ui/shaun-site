'use client';

import { motion } from 'framer-motion';
import { SERVICES, RATES } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ServicesSection({ showBrochure = true }) {
  return (
    <section className="section section--services" id="services">
      <div className="container">
        <SectionHeading tag={SERVICES.tag} heading={SERVICES.heading} />

        <motion.div
          className="services__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SERVICES.items.map((service, i) => (
            <motion.article key={service.title} className="service-card card" variants={fadeUp} custom={i}>
              <div className="service-card__body">
                <span className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {showBrochure && (
          <motion.div
            className="brochure card brochure--compact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="brochure__content">
              <h3>{RATES.brochure.title}</h3>
              <p>{RATES.brochure.description}</p>
              <a href={RATES.brochure.href} className="brochure__link" download>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {RATES.brochure.label}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
