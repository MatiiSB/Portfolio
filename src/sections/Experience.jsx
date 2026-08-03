import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import FadeIn from '../components/FadeIn';
import { experience } from '../data/experience';

const Experience = () => (
  <Section id="experience">
    <SectionHeading
      eyebrow="Trayectoria"
      title="Experiencia laboral"
      subtitle="Roles en cloud, automatización y operaciones."
    />
    <FadeIn>
      <div className="timeline">
        <span className="timeline__line" aria-hidden="true" />
        {experience.map((job) => (
          <div className="timeline__item" key={job.puesto + job.empresa}>
            <span
              className="timeline__dot"
              style={{ background: job.periodoColor }}
              aria-hidden="true"
            />
            <Card variant="glass" hover>
              <span
                className="timeline__period"
                style={{ background: job.periodoColor }}
              >
                {job.periodo}
              </span>
              <h3 className="timeline__puesto">{job.puesto}</h3>
              <div className="timeline__empresa">{job.empresa}</div>
              <ul className="timeline__desc">
                {job.descripcion.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="timeline__tags">
                {job.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </FadeIn>
  </Section>
);

export default Experience;
