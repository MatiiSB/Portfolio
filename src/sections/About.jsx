import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FadeIn from '../components/FadeIn';
import { profile } from '../data/profile';

const About = () => (
  <Section id="about">
    <SectionHeading
      eyebrow="Acerca de mí"
      title="Arquitecto de soluciones cloud e IA"
    />
    <FadeIn>
      <Card variant="glass" className="about__card">
        <div className="about__text">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about__photo">
          <img
            src={profile.photo}
            alt="Matías San Blas, Cloud Solution Architect en Huawei Cloud"
            width={180}
            height={180}
            loading="lazy"
          />
        </div>
      </Card>
    </FadeIn>
  </Section>
);

export default About;
