import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import FadeIn from '../components/FadeIn';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import { architectures } from '../data/architecture';

const ArchitectureGallery = () => (
  <Section id="architecture">
    <SectionHeading
      eyebrow="De la hoja a la nube"
      title="Arquitecturas que diseñé"
      subtitle="Diagramas de soluciones cloud reales: alta disponibilidad, automatización e IA."
    />
    <FadeIn>
      <div className="architecture__grid">
        {architectures.map((arch) => (
          <Card key={arch.id} variant="glass" hover className="arch-card">
            <div className="arch-card__diagram">
              <ArchitectureDiagram id={arch.id} accent={arch.accent} />
            </div>
            <h3 className="arch-card__title">{arch.title}</h3>
            <p className="arch-card__summary">{arch.summary}</p>
            <div className="arch-card__services">
              {arch.services.map((s) => (
                <Badge key={s} variant="accent">
                  {s}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </FadeIn>
  </Section>
);

export default ArchitectureGallery;
