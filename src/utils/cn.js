// Helper para combinar clases (clsx minimalista).
export const cn = (...args) =>
  args
    .flat()
    .filter(Boolean)
    .join(' ');
