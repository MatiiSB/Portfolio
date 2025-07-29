import Section from '../components/Section';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';

const skills = [
  {
    icon: <FaReact />,
    title: 'Desarrollo Web',
    tags: ['React', 'JavaScript', 'HTML/CSS']
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend',
    tags: ['Node.js','Express', 'Python','Java']
  },
  {
    icon: <FaDatabase />,
    title: 'Bases de Datos',
    tags: ['MongoDB','SQL Server','Cassandra']
  },
];

const Skills = () => (
  <Section id="skills" title="Habilidades">
    <FadeInWhenVisible>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag, i) => (
                <span className="skill-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeInWhenVisible>
  </Section>
);

export default Skills;
