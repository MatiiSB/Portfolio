import { useState, useEffect, useRef } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';
import { WiSunrise } from 'react-icons/wi';
import '../styles/navbar.css';

const SECTIONS = [
  { id: 'home', label: 'INICIO' },
  { id: 'about', label: 'ACERCA DE MI' },
  { id: 'studies', label: 'ESTUDIOS' },
  { id: 'experience', label: 'EXPERIENCIA' },
  { id: 'skills', label: 'HABILIDADES' },
  { id: 'contact', label: 'CONTACTO' },
];

const Navbar = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (section) => {
    onNavigate(section);
    setOpen(false);
  };

  const toggleMode = () => {
    setLight(l => !l);
    document.body.classList.toggle('light-mode');
  };

  // Cerrar con Escape y bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        aria-controls="primary-menu"
      >
        <span />
        <span />
        <span />
      </button>

      <button onClick={toggleMode} className="toggle-mode-btn" aria-label="Cambiar modo claro/oscuro">
        {light ? <RiMoonClearLine /> : <WiSunrise />}
      </button>

      {open && (
        <div className="menu" ref={menuRef} id="primary-menu" role="dialog" aria-modal="true" aria-label="Navegación">
          <nav>
            <ul>
              {SECTIONS.map((s) => (
                <li
                  key={s.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClick(s.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleClick(s.id);
                    }
                  }}
                >
                  {s.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
