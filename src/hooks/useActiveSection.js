import { useEffect, useState } from 'react';

// Scroll-spy: devuelve el id de la sección visible actualmente.
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0] || '');
  // Dependencia estable: string derivado del array de ids.
  const idsKey = ids.join(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey]);

  return active;
};
