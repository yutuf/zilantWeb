import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 0',
      backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all var(--transition-base)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ color: 'var(--color-accent-purple)' }}>ZILANT</span>
          <span style={{ fontSize: '0.875rem', fontWeight: '400', color: 'var(--color-text-secondary)', borderLeft: '1px solid var(--color-border-light)', paddingLeft: '10px' }}>UAV TEAM</span>
        </div>

        <nav style={{ display: 'none', gap: '2rem' }} className="nav-desktop">
          <a href="#hero" style={{ fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase' }}>Ana Sayfa</a>
          <a href="#about" style={{ fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase' }}>Biz Kimiz?</a>
          <a href="#tech" style={{ fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase' }}>Teknoloji</a>
          <a href="#sponsor" style={{ fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase' }}>Destek</a>
          <a href="#team" style={{ fontSize: '0.875rem', fontWeight: '500', textTransform: 'uppercase' }}>Ekip</a>
        </nav>

        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>İletişim</a>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
