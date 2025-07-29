import Section from '../components/Section';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const jobs = [
  {
    puesto: "Pasante Analista de Operaciones",
    empresa: "COELSA",
    periodo: "Mayo 2025 - Presente",
    periodoColor: "#3b82f6", // azul
    descripcion: [
      "Corridas bancarias y resolución de tickets.",
      "Creación y mantenimiento de bases de datos.",
      "Automatización de procesos."
    ],
    tags: ["SQL", "Automatización", "Soporte", "Trabajo en equipo"]
  },
  {
    puesto: "Pasante Digitalizador",
    empresa: "COELSA",
    periodo: "Febrero 2025 - Mayo 2025",
    periodoColor: "#a21ba7", // violeta
    descripcion: [
      "Digitalización y migración de archivos.",
      "Desencriptación de archivos."
    ],
    tags: ["Digitalización", "Documentación"]
  }
];

const Experience = () => (
  <Section id="experience" title="Experiencia laboral">
    <FadeInWhenVisible>
      <div className="timeline">
        {jobs.map((job, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot" style={{ background: job.periodoColor }} />
            <div className="timeline-card">
              <div className="timeline-header">
                <h4>{job.puesto}</h4>
                <span
                  className="timeline-period"
                  style={{ background: job.periodoColor, color: '#fff' }}
                >
                  {job.periodo}
                </span>
              </div>
              <div className="timeline-empresa">{job.empresa}</div>
              {job.descripcion.length > 0 && (
                <ul className="timeline-desc">
                  {job.descripcion.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {job.tags && (
                <div className="timeline-tags">
                  {job.tags.map((tag, i) => (
                    <span className="timeline-tag" key={i}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </FadeInWhenVisible>
  </Section>
);

export default Experience;
