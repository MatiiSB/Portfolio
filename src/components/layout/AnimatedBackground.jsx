// Fondo animado sutil con orbes gradiente. Respeta prefers-reduced-motion (vía CSS).
const AnimatedBackground = () => (
  <div className="animated-bg" aria-hidden="true">
    <span className="animated-bg__orb animated-bg__orb--1" />
    <span className="animated-bg__orb animated-bg__orb--2" />
    <span className="animated-bg__orb animated-bg__orb--3" />
  </div>
);

export default AnimatedBackground;
