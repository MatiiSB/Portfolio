import Section from '../components/Section'
import FadeInWhenVisible from '../components/FadeInWhenVisible'
import fotoPerfil from '../assets/Foto_Nueva_Sonrisa.jpeg';


const About = () => (
  <Section id="about" title="Acerca de mí">
    <FadeInWhenVisible>
      <div className="about-card about-card-flex">
        <div className="about-text">
          <p>
            Actualmente me desempeño como Solution Architect Intern en Huawei, formando parte del equipo de Cloud & IT. Estoy en el último año de la carrera de Sistemas de la Información y me apasiona seguir aprendiendo sobre tecnologías emergentes, automatización, infraestructura cloud y ciberseguridad. Me considero una persona proactiva, con una fuerte orientación a la mejora continua y al trabajo en equipo. Mi objetivo es seguir desarrollándome profesionalmente y aportar valor real a los proyectos en los que participo.
          </p>
        </div>
        <div className="about-photo">
          <img src={fotoPerfil} alt="Foto de perfil" />

        </div>
      </div>
    </FadeInWhenVisible>
  </Section>
)

export default About
