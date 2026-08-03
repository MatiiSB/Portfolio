import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import FadeIn from '../components/FadeIn';
import { profile } from '../data/profile';

const Contact = () => (
  <Section id="contact">
    <SectionHeading
      eyebrow="Hablemos"
      title="Contacto"
      subtitle="¿Necesitas diseñar una solución cloud o integrar IA? Conversémoslo."
    />
    <FadeIn>
      <Card variant="glass" className="contact__card">
        <h3 className="contact__title">Información de contacto</h3>
        <div className="contact-info">
          <p className="contact-info__row">
            <FaEnvelope />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="contact-info__row">
            <FaPhone />
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          </p>
          <p className="contact-info__row">
            <FaMapMarkerAlt />
            {profile.location}
          </p>
        </div>
        <div className="contact__links">
          <Button
            as="a"
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </Button>
          <Button
            as="a"
            variant="secondary"
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </Button>
        </div>
      </Card>
    </FadeIn>
  </Section>
);

export default Contact;
