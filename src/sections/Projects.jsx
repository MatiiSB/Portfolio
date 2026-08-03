import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import FadeIn from '../components/FadeIn';
import { projects } from '../data/projects';

const Projects = () => (
  <Section id="projects">
    <SectionHeading
      eyebrow="Casos reales"
      title="Proyectos destacados"
      subtitle="Problema, solución e impacto de cada intervención."
    />
    <FadeIn>
      <div className="projects__grid">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.title} variant="glass" hover className="project-card">
              <div className="project-card__header">
                <span className="project-card__icon">
                  <Icon />
                </span>
                <h3 className="project-card__title">{project.title}</h3>
              </div>
              <p className="project-card__label">Problema</p>
              <p className="project-card__text">{project.problem}</p>
              <p className="project-card__label">Solución</p>
              <p className="project-card__text">{project.solution}</p>
              <div className="project-card__stack">
                {project.stack.map((t) => (
                  <Badge key={t} variant="accent">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </FadeIn>
  </Section>
);

export default Projects;
