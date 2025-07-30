import Section from '../components/Section';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const subtitleRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const y = window.scrollY;
    setOffsetY(y);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section id="home" title={<span>SOY MATIAS SAN BLAS</span>}>
      <p
        className="home-subtitle-scroll"
        ref={subtitleRef}
        style={{
          transform: `translateY(-${offsetY * 0.4}px)`,
          opacity: `${1 - offsetY / 200}`,
        }}
      >
        Bienvenido a mi portfolio
      </p>
    </Section>
  );
};

export default Home;
