// eslint-disable-next-line
import { motion } from 'framer-motion';

const FadeInWhenVisible = ({ children, delay = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
