import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import FadeIn from '../components/FadeIn';
import { skills } from '../data/skills';

const Skills = () => (
  <Section id="skills">
    <SectionHeading
      eyebrow="Stack técnico"
      title="Skills"
      subtitle="Orientado a cloud, automatización e inteligencia artificial."
    />
    <FadeIn>
      <div className="skills__grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <Card key={skill.title} variant="glass" hover className="skill-card">
              <div className="skill-card__icon">
                <Icon />
              </div>
              <h3 className="skill-card__title">{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
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

export default Skills;
