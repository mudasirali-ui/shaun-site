'use client';

import { motion } from 'framer-motion';
import { RATES } from '@/lib/siteData';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function HeroStats() {
  return (
    <motion.div
      className="hero-stats"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {RATES.tiers.map((tier, i) => (
        <motion.div key={tier.label} className="hero-stats__card" variants={fadeUp} custom={i}>
          <span className="hero-stats__amount">{tier.amount}</span>
          <span className="hero-stats__label">{tier.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
