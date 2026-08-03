import { useEffect, useState } from 'react';

// Gestiona tema claro/oscuro con persistencia en localStorage y
// detección inicial de prefers-color-scheme. Aplica la clase en <body>.
export const useTheme = () => {
  const [light, setLight] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'light';
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
  }, [light]);

  const toggle = () => setLight((l) => !l);
  return { light, toggle };
};
