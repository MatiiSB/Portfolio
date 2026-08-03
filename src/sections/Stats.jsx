import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FadeIn from '../components/FadeIn';
import { stats } from '../data/stats';

const Stats = () => (
  <Section id="stats">
    <SectionHeading
      eyebrow="De un vistazo"
      title="Métricas clave"
      subtitle="Lo que define mi trayectoria técnica hasta hoy."
    />
    <FadeIn>
      <div className="stats__grid">
        {stats.map((s) => (
          <Card key={s.label} variant="glass" hover className="stat">
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </Card>
        ))}
      </div>
    </FadeIn>
  </Section>
);

export default Stats;
