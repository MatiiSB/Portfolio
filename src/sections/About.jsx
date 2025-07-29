import Section from '../components/Section'
import FadeInWhenVisible from '../components/FadeInWhenVisible'

const About = () => (
  <Section id="about" title="Acerca de mí">
    <FadeInWhenVisible>
      <div className="about-card about-card-flex">
        <div className="about-text">
          <p>
            Soy estudiante de cuarto año de Sistemas de la Información y actualmente me desempeño como pasante Analista de Operaciones en COELSA. Me considero una persona proactiva, curiosa y en constante formación, con entusiasmo por aprender y explorar nuevas tecnologías y herramientas dentro del mundo IT. Busco ampliar mis conocimientos en áreas como desarrollo de software, análisis de datos y ciberseguridad, aplicando lo aprendido en mi trabajo para crecer profesionalmente y aportar valor a los proyectos en los que participo.
          </p>
        </div>
        <div className="about-photo">
          <img src="/profile.jpg" alt="Foto de perfil" />
        </div>
      </div>
    </FadeInWhenVisible>
  </Section>
)

export default About
