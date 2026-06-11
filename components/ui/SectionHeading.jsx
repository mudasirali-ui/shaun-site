'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/animations';

export default function SectionHeading({ tag, heading, subheading, align = 'left' }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {tag && (
        <motion.p className="section-tag" variants={fadeUp} custom={0}>
          {tag}
        </motion.p>
      )}
      <motion.h2 variants={fadeUp} custom={1}>
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p className="section-subheading" variants={fadeUp} custom={2}>
          {subheading}
        </motion.p>
      )}
    </motion.div>
  );
}
