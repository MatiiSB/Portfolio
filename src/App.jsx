import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Studies from './sections/Studies';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/global.css';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ParallaxProvider>
      <div className="app-root">
        <Navbar onNavigate={scrollToSection} />
        <Home />
        <About />
        <Studies />
        <Experience />
        <Skills />
        <Contact />
        <ScrollToTopButton />
      </div>
    </ParallaxProvider>
  );
}

export default App;
