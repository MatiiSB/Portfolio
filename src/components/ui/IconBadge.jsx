// Contenedor cuadrado con ícono y fondo gradiente sutil.
const IconBadge = ({ children, ...props }) => (
  <span className="icon-badge" {...props}>
    {children}
  </span>
);

export default IconBadge;
