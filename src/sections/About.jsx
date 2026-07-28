import Section from '../components/Section'
import FadeInWhenVisible from '../components/FadeInWhenVisible'
import fotoPerfil from '../assets/Foto_Nueva_Sonrisa.jpeg';


const About = () => (
  <Section id="about" title="Acerca de mí">
    <FadeInWhenVisible>
      <div className="about-card about-card-flex">
        <div className="about-text">
          <p>
            Actualmente me desempeño como Solution Architect Intern en Huawei Cloud, donde diseño e implemento soluciones cloud para clientes, participando en proyectos de arquitectura, automatización, inteligencia artificial y ciberseguridad.
            
            Soy Licenciado en Gestión de Tecnologías de la Información de la UADE y me apasiona explorar nuevas tecnologías que generen impacto real en las organizaciones. Disfruto enfrentar desafíos técnicos, aprender de forma continua y transformar problemas complejos en soluciones simples, escalables y eficientes.
            
            Mi objetivo es seguir creciendo como Cloud Solution Architect, especializándome en arquitecturas cloud, inteligencia artificial y tecnologías que impulsen la transformación digital.
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
