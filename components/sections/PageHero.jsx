'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function PageHero({ tag, heading, subheading }) {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {tag && (
            <motion.p className="eyebrow" variants={fadeUp} custom={0}>
              {tag}
            </motion.p>
          )}
          <motion.h1 variants={fadeUp} custom={1}>
            {heading}
          </motion.h1>
          {subheading && (
            <motion.p className="page-hero__sub" variants={fadeUp} custom={2}>
              {subheading}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
