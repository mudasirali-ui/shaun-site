'use client';

import { motion } from 'framer-motion';
import { CTA } from '@/lib/siteData';
import { viewportOnce } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div
          className="cta-banner__inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>{CTA.heading}</h2>
          <p>{CTA.body}</p>
          <div className="cta-banner__actions">
            <Button href={CTA.primary.href} variant="primary">
              {CTA.primary.label}
            </Button>
            <Button href={CTA.secondary.href} variant="secondary">
              {CTA.secondary.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
