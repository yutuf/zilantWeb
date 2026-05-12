import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımızda' },
    { href: '#tech', label: 'Teknoloji' },
    { href: '#sponsor', label: 'Sponsorluk' },
    { href: '#team', label: 'Ekip' },
  ];

  return (
    <>
      <style>{`
        .header-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0.75rem 0;
          transition: all 0.3s ease;
        }
        .header-root.scrolled {
          background: rgba(8,8,8,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(168,85,247,0.15);
        }
        .header-inner {
          display: flex; justify-content: space-between; align-items: center;
          max-width: 1280px; margin: 0 auto; padding: 0 24px;
        }
        .header-logo {
          display: flex; align-items: center; gap: 12px; text-decoration: none;
        }
        .header-logo-img {
          height: 72px; 
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        @media (max-width: 768px) {
          .header-logo-img { height: 48px; }
          .header-logo-name { font-size: 1rem !important; }
          .header-logo-sub { font-size: 0.5rem !important; }
        }
        .header-logo:hover .header-logo-img {
          transform: scale(1.05);
          filter: drop-shadow(0 0 12px rgba(168,85,247,0.4));
        }
        .header-logo-text {
          display: flex; flex-direction: column; gap: 1px;
        }
        .header-logo-name {
          font-size: 1.2rem; font-weight: 800; color: #f0f0f0;
          letter-spacing: 0.1em; line-height: 1;
        }
        .header-logo-name span { color: #a855f7; }
        .header-logo-sub {
          font-size: 0.65rem; color: #a855f7; letter-spacing: 0.15em;
          text-transform: uppercase; line-height: 1.2;
          margin-top: 2px; font-weight: 700;
        }
        .header-nav {
          display: none; gap: 2rem; align-items: center;
        }
        @media (min-width: 768px) { .header-nav { display: flex; } }
        .header-nav a {
          font-size: 0.8rem; font-weight: 600; color: #9ca3af;
          text-transform: uppercase; letter-spacing: 0.1em;
          text-decoration: none; transition: color 0.2s ease;
          position: relative;
        }
        .header-nav a::after {
          content: ''; position: absolute; left: 0; bottom: -3px;
          width: 0; height: 1.5px; background: #a855f7;
          transition: width 0.25s ease;
        }
        .header-nav a:hover { color: #e5e7eb; }
        .header-nav a:hover::after { width: 100%; }
        .header-actions { display: flex; gap: 10px; align-items: center; }
        .header-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px; border-radius: 8px;
          background: #a855f7; color: #fff;
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em;
          text-decoration: none; text-transform: uppercase;
          transition: all 0.3s ease;
          box-shadow: 0 0 16px rgba(168,85,247,0.3);
        }
        .header-cta:hover {
          background: #9333ea; color: #fff;
          box-shadow: 0 0 28px rgba(168,85,247,0.5);
          transform: translateY(-1px);
        }
        .hamburger {
          display: flex; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px; background: transparent; border: none;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #e5e7eb; border-radius: 2px; transition: all 0.3s ease;
        }
        @media (min-width: 768px) { .hamburger { display: none; } }
        /* Mobile menu */
        .mobile-menu {
          position: fixed; top: 75px; left: 0; right: 0;
          background: rgba(8,8,8,0.97); backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(168,85,247,0.15);
          padding: 20px 24px 28px;
          display: flex; flex-direction: column; gap: 16px;
          z-index: 999;
          transform: translateY(-10px); opacity: 0;
          pointer-events: none; transition: all 0.25s ease;
        }
        .mobile-menu.open { transform: translateY(0); opacity: 1; pointer-events: all; }
        .mobile-menu a {
          font-size: 0.9rem; font-weight: 600; color: #9ca3af;
          text-transform: uppercase; letter-spacing: 0.1em;
          text-decoration: none; padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-menu a:hover { color: #a855f7; }
      `}</style>

      <header className={`header-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <a href="#hero" className="header-logo">
            <img
              src="/zilant-logo-color.png"
              alt="Zilant UAV"
              className="header-logo-img"
            />
            <div className="header-logo-text">
              <div className="header-logo-name"><span>ZILANT</span> UAV</div>
              <div className="header-logo-sub">Baykar Fen Lisesi · Teknofest 2026</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="header-nav">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <a href="#sponsor" className="header-cta">Destek Ol</a>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#sponsor" className="header-cta" style={{ textAlign: 'center', marginTop: '8px' }} onClick={() => setMenuOpen(false)}>
          Hemen Destek Ol
        </a>
      </div>
    </>
  );
};

export default Header;
