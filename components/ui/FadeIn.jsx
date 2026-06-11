'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/animations';

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  as = 'div',
  y = 28,
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

export function FadeInStagger({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ children, className = '', custom = 0 }) {
  return (
    <motion.div className={className} custom={custom} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
