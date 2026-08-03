// Variants de animación centralizadas (framer-motion).
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export const viewportOnce = { once: true, amount: 0.2 };
