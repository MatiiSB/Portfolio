import { useState } from 'react';
import { RiMoonClearLine } from 'react-icons/ri';
import { WiSunrise } from 'react-icons/wi';
import '../styles/navbar.css';

const Navbar = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  const handleClick = (section) => {
    onNavigate(section);
    setOpen(false);
  };

  const toggleMode = () => {
    setLight(l => !l);
    document.body.classList.toggle('light-mode');
  };

  return (
    <>
<button
  className={`hamburger ${open ? 'open' : ''}`}
  onClick={() => setOpen(!open)}
  aria-label="Menú"
>
  <span />
  <span />
  <span />
</button>

      <button onClick={toggleMode} className="toggle-mode-btn" aria-label="Cambiar modo">
        {light ? <RiMoonClearLine /> : <WiSunrise />}
      </button>
      {open && (
        <div className="menu">
          <nav>
            <ul>
              <li onClick={() => handleClick('home')}>INICIO</li>
              <li onClick={() => handleClick('about')}>ACERCA DE MI</li>
              <li onClick={() => handleClick('studies')}>ESTUDIOS</li>
              <li onClick={() => handleClick('experience')}>EXPERIENCIA</li>
              <li onClick={() => handleClick('skills')}>HABILIDADES</li>
              <li onClick={() => handleClick('contact')}>CONTACTO</li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
