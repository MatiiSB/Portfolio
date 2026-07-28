import Section from '../components/Section';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
        frame.current = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <Section id="home" title={<span>SOY MATIAS SAN BLAS</span>}>
      <p
        className="home-subtitle-scroll"
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
