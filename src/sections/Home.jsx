import Section from '../components/Section';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const Home = () => (
  <Section
    id="home"
    title={
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SOY MATIAS SAN BLAS
      </motion.span>
    }
  >
    <motion.p
      className="home-subtitle"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Bienvenido a mi portfolio
    </motion.p>
  </Section>
);

export default Home;
