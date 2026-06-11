'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-flex' }}>
        <Link href={href} className={classes} id={id}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      id={id}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
