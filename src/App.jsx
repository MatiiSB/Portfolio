import RootLayout from './layouts/RootLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import ArchitectureGallery from './sections/ArchitectureGallery';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Studies from './sections/Studies';
import Contact from './sections/Contact';
import './styles/global.css';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <RootLayout onNavigate={scrollToSection}>
      <Hero onNavigate={scrollToSection} />
      <About />
      <Stats />
      <Experience />
      <Skills />
      <ArchitectureGallery />
      <Projects />
      <Certificates />
      <Studies />
      <Contact />
    </RootLayout>
  );
}

export default App;
