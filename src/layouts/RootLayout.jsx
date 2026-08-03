import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/layout/ScrollProgress';
import ScrollToTopButton from '../components/layout/ScrollToTopButton';
import AnimatedBackground from '../components/layout/AnimatedBackground';

const RootLayout = ({ onNavigate, children }) => (
  <>
    <a href="#main" className="skip-link">
      Saltar al contenido
    </a>
    <AnimatedBackground />
    <ScrollProgress />
    <Navbar onNavigate={onNavigate} />
    <main id="main" tabIndex={-1}>
      {children}
    </main>
    <Footer />
    <ScrollToTopButton />
  </>
);

export default RootLayout;
