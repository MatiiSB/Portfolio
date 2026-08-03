import { useScrollProgress } from '../../hooks/useScrollProgress';

// Barra superior de progreso de lectura.
const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
