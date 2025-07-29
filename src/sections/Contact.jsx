import Section from '../components/Section';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';

const Contact = () => (
  <>
    <Section id="contact" title="Contacto">
      <FadeInWhenVisible>
        <div className="contact-card">
          <h3><FaUser style={{ marginRight: 8 }} /> Información de Contacto</h3>
          <div className="contact-info">
            <p><FaEnvelope /> matiassanblas@gmail.com</p>
            <p><FaPhone /> +54 11 4408-2130</p>
            <p><FaMapMarkerAlt /> Buenos Aires, Argentina</p>
          </div>
          <hr />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/matías-san-blas" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/MatiiSB" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </FadeInWhenVisible>
      <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Matías San Blas. Todos los derechos reservados.</p>
    </footer>
    </Section>
    
  </>
);

export default Contact;
