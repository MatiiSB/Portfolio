import Section from '../components/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ScrollIndicator from '../components/layout/ScrollIndicator';
import { profile } from '../data/profile';

const Hero = ({ onNavigate }) => {
  return (
    <Section id="home" variant="hero">
      <div className="hero">
        <p className="eyebrow hero__eyebrow">{profile.currentRole}</p>
        <h1 className="hero__title">
          Hola, soy <span className="animated-gradient-text">{profile.name}</span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__roles" aria-label="Especialidades">
          {profile.roles.map((role) => (
            <Badge key={role} variant="accent">
              {role}
            </Badge>
          ))}
        </div>

        <div className="hero__cta">
          <Button onClick={() => onNavigate('contact')}>Contáctame</Button>
          <Button
            variant="secondary"
            onClick={() => onNavigate('architecture')}
          >
            Ver arquitecturas
          </Button>
        </div>

        <ScrollIndicator onClick={() => onNavigate('about')} />
      </div>
    </Section>
  );
};

export default Hero;
