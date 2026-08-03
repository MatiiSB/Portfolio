import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FadeIn from '../components/FadeIn';
import { studies } from '../data/studies';

const Studies = () => (
  <Section id="studies">
    <SectionHeading
      eyebrow="Formación"
      title="Estudios"
      subtitle="Educación formal y cursos técnicos complementarios."
    />
    <FadeIn>
      <div className="studies__grid">
        {studies.map((study) => {
          const Icon = study.icon;
          return (
            <Card key={study.titulo} variant="glass" hover className="study-card">
              <span className="study-card__icon" style={{ color: study.color }}>
                <Icon />
              </span>
              <h3 className="study-card__title">{study.titulo}</h3>
              <p className="study-card__sub">
                {study.institucion} — {study.año}
              </p>
            </Card>
          );
        })}
      </div>
    </FadeIn>
  </Section>
);

export default Studies;
