import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navItems } from '../data/company';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <header className={`nav ${solid ? 'is-solid' : 'is-transparent'}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="PT Samudra Biru Indonesia — Beranda">
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Utama">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-gold nav-cta">
          Hubungi Kami
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`nav-backdrop ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        hidden={!open}
        aria-hidden={!open}
      />

      <div
        id="mobile-drawer"
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav aria-label="Menu seluler">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `drawer-link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-gold drawer-cta">
          Hubungi Kami
        </Link>
      </div>
    </header>
  );
}
