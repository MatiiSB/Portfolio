import { useState, useEffect, useRef } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import { NAV_ITEMS } from '../../lib/constants';
import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../utils/cn';

const Navbar = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { light, toggle } = useTheme();
  const active = useActiveSection(NAV_ITEMS.map((s) => s.id));

  const triggerRef = useRef(null);
  const drawerRef = useRef(null);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  // Sombra/blur al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar con Escape, bloquear scroll y focus trap del drawer
  useEffect(() => {
    if (!open) return;

    const prevFocus = document.activeElement;
    const firstLink = drawerRef.current?.querySelector('a, button');
    firstLink?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const focusables = drawerRef.current?.querySelectorAll(
          'a[href], button:not([disabled])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevFocus?.focus?.();
    };
  }, [open]);

  return (
    <>
      <header className={cn('navbar', scrolled && 'navbar--scrolled')}>
        <div className="navbar__inner">
          <a
            href="#home"
            className="navbar__brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('home');
            }}
          >
            <span className="navbar__brand-mark" aria-hidden="true" />
            <span>Matías San Blas</span>
          </a>

          <nav className="navbar__nav" aria-label="Navegación principal">
            {NAV_ITEMS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn('navbar__link', active === s.id && 'navbar__link--active')}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(s.id);
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              onClick={toggle}
              className="theme-toggle"
              aria-label={light ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {light ? <RiMoonClearLine /> : <RiSunLine />}
            </button>
            <button
              ref={triggerRef}
              className={cn('hamburger', open && 'open')}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={drawerRef}
          id="mobile-menu"
          className="drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación"
        >
          <nav>
            <ul className="drawer__nav">
              {NAV_ITEMS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="drawer__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(s.id);
                    }}
                  >
                    {s.label}
                  </a>
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
