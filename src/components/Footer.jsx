import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#050505',
      borderTop: '1px solid rgba(168,85,247,0.15)',
      padding: '80px 0 40px',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '14px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          <img src="/zilant-logo-color.png" alt="Zilant" style={{ height: '50px', width: 'auto' }} />
          <div style={{ textAlign: 'left', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '15px' }}>
            <span style={{ color: '#fff', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '0.1em', display: 'block', lineHeight: 1 }}>ZILANT</span>
            <span style={{ color: '#a855f7', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>UAV TEAM</span>
          </div>
        </div>

        <p style={{ maxWidth: '500px', margin: '0 auto 30px', color: '#9ca3af', lineHeight: '1.8' }}>
          <strong>Baykar Fen Lisesi</strong>'nin vizyonuyla yetişen, gökyüzünün yeni nesil mühendisleri. 
          Teknoloji ve inovasyonun kesiştiği noktada otonom sistemler inşa ediyoruz.
        </p>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '24px', 
          marginBottom: '40px',
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          <a href="#about" style={{ color: '#4b5563', textDecoration: 'none' }}>Hakkımızda</a>
          <a href="#tech" style={{ color: '#4b5563', textDecoration: 'none' }}>Teknoloji</a>
          <a href="#sponsor" style={{ color: '#4b5563', textDecoration: 'none' }}>Sponsorluk</a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '30px', fontSize: '11px' }}>
          <p>&copy; {new Date().getFullYear()} Zilant UAV Team. Baykar Fen Lisesi Projesidir.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
