import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
        color: '#fff',
        border: 'none',
        boxShadow: visible
          ? '0 8px 20px rgba(139, 92, 246, 0.4)'
          : 'none',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
        pointerEvents: visible ? 'auto' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Volver arriba"
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = '0 0 16px #a78bfa')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.4)')
      }
    >
      <FaArrowUp style={{ fontSize: '1.25rem' }} />
    </button>
  );
};

export default ScrollToTopButton;
