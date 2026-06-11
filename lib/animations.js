export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: EASE },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.6, ease: EASE },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.7, ease: EASE },
  }),
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: EASE },
  }),
};

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: EASE },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, margin: '-80px' };
