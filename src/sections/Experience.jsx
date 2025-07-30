import Section from '../components/Section';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

const jobs = [
  {
  puesto: "Solution Architect Intern",
  empresa: "Huawei",
  periodo: "Agosto 2025 - Presente",
  periodoColor: "#c7000a",
  descripcion: [
    "Colaboración en proyectos de soluciones Cloud y arquitectura técnica.",
    "Documentación de soluciones empresariales para clientes LATAM.",
    "Pruebas de conceptos y soporte técnico en pre-venta."
  ],
  tags: ["Cloud", "Arquitectura", "Documentación", "Soporte"]
  },
  {
    puesto: "Pasante Analista de Operaciones",
    empresa: "COELSA",
    periodo: "Mayo 2025 - Julio 2025",
    periodoColor: "#00B4D8",
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
    periodoColor: "#a21ba7",
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
      <div className="timeline-2col">
        {jobs.map((job, index) => (
          <div className={`timeline-item-alt ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <span className="timeline-dot-alt" style={{ background: job.periodoColor }} />
              <div className="timeline-card-alt">
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
                <ul className="timeline-desc">
                  {job.descripcion.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className="timeline-tags">
                  {job.tags.map((tag, i) => (
                    <span className="timeline-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="timeline-line-center" />
      </div>
    </FadeInWhenVisible>
  </Section>
);

export default Experience;
