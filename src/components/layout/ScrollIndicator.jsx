// Indicador de scroll moderno: outline de mouse con rueda animada.
// Fondo transparente, colores de la paleta, animación sutil e infinita.
const ScrollIndicator = ({ onClick, label = 'Scroll' }) => (
  <button
    type="button"
    className="scroll-indicator"
    onClick={onClick}
    aria-label="Desplazarse a la siguiente sección"
  >
    <span className="scroll-indicator__mouse" aria-hidden="true">
      <span className="scroll-indicator__wheel" />
    </span>
    <span className="scroll-indicator__label">{label}</span>
  </button>
);

export default ScrollIndicator;
