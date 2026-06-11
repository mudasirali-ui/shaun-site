'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ImagePlaceholder({
  src,
  alt,
  aspect = '4/3',
  label = 'Replace image',
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}) {
  const ratioStyle = { aspectRatio: aspect };

  if (src) {
    return (
      <motion.div
        className={`image-placeholder image-placeholder--filled ${className}`}
        style={ratioStyle}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="image-placeholder__img"
          sizes={sizes}
          priority={priority}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`image-placeholder ${className}`}
      style={ratioStyle}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      role="img"
      aria-label={alt || label}
    >
      <div className="image-placeholder__inner">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{label}</span>
      </div>
    </motion.div>
  );
}
