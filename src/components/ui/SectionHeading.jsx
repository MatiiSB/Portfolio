// Encabezado de sección: eyebrow + título + subtítulo.
const SectionHeading = ({ eyebrow, title, subtitle, id }) => (
  <div className="section-heading">
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 id={id}>{title}</h2>
    {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
  </div>
);

export default SectionHeading;
