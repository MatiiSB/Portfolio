// Studies.jsx (versión con grid de tarjetas)
import Section from '../components/Section';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import { FaUniversity, FaGraduationCap, FaGoogle, FaLaptopCode } from 'react-icons/fa';

const estudios = [
  {
    titulo: 'Lic. en Gestión de Tecnologías de la Información',
    institucion: 'UADE',
    año: '2021 - Actualidad',
    icono: <FaUniversity />,
    color: '#E0AAFF'
  },
  {
    titulo: 'Curso Técnico en Computación',
    institucion: 'Cursa',
    año: '2024',
    icono: <FaLaptopCode />,
    color: '#7c3aed'
  },
  {
    titulo: 'Google Ads Search',
    institucion: 'Google',
    año: '2024',
    icono: <FaGoogle />,
    color: '#fbbc05'
  },
  {
    titulo: 'Google Ads Display',
    institucion: 'Google',
    año: '2024',
    icono: <FaGoogle />,
    color: '#0f9d58'
  }
];

const Studies = () => (
  <Section id="studies" title="Estudios">
    <FadeInWhenVisible>
      <div className="studies-grid">
        {estudios.map((e, idx) => (
          <div className="study-card" key={idx}>
            <div className="study-icon" style={{ color: e.color }}>
              {e.icono}
            </div>
            <h3>{e.titulo}</h3>
            <p className="study-sub">{e.institucion} – {e.año}</p>
          </div>
        ))}
      </div>
    </FadeInWhenVisible>
  </Section>
);

export default Studies;
