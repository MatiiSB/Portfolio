import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { cn } from '../../utils/cn';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn('scroll-top-btn', visible && 'scroll-top-btn--visible')}
      aria-label="Volver arriba"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
