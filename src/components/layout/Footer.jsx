import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../../data/profile';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <span className="footer__brand">{profile.name}</span>
      <div className="footer__social">
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-toggle"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-toggle"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
