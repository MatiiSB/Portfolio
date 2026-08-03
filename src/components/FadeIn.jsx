import { motion } from 'framer-motion';
import { defaultTransition, viewportOnce } from '../lib/motion';

// Wrapper de animación on-scroll. Reemplaza al FadeInWhenVisible anterior.
const FadeIn = ({ children, delay = 0, y = 30, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ...defaultTransition, delay }}
    viewport={viewportOnce}
  >
    {children}
  </motion.div>
);

export default FadeIn;
