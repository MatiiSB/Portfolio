import Section from '../components/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FadeIn from '../components/FadeIn';
import { certificates } from '../data/certificates';

const Certificates = () => (
  <Section id="certificates">
    <SectionHeading
      eyebrow="Validaciones"
      title="Certificaciones"
      subtitle="Formación verificada en cloud, IA y publicidad digital."
    />
    <FadeIn>
      <div className="certificates__grid">
        {certificates.map((cert) => {
          const Icon = cert.icon;
          const content = (
            <>
              <span className="cert-card__icon" style={{ color: cert.color }}>
                <Icon />
              </span>
              <h3 className="cert-card__title">{cert.title}</h3>
              <p className="cert-card__meta">
                {cert.issuer} · {cert.year}
              </p>
            </>
          );
          return cert.url ? (
            <Card
              key={cert.title}
              as="a"
              variant="glass"
              hover
              className="cert-card"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </Card>
          ) : (
            <Card key={cert.title} variant="glass" hover className="cert-card">
              {content}
            </Card>
          );
        })}
      </div>
    </FadeIn>
  </Section>
);

export default Certificates;
