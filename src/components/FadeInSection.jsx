import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

/**
 * Reusable wrapper that fades-up its children when they enter the viewport.
 */
export default function FadeInSection({ children, className = '', delay = 0, id }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
