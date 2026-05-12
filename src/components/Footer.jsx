import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '60px 0',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '14px'
    }}>
      <div className="container">
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#a855f7', fontWeight: '800', fontSize: '1.5rem', letterSpacing: '0.05em' }}>ZILANT</span>
          <span style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '10px', fontWeight: '500', color: '#fff' }}>UAV TEAM</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Zilant UAV. Tüm Hakları Saklıdır.</p>
        <p style={{ marginTop: '0.8rem', fontSize: '12px', color: '#4b5563', maxWidth: '400px', margin: '0.8rem auto 0', lineHeight: '1.5' }}>
          Baykar Fen Lisesi bünyesinde geliştirilen otonom insansız hava aracı projesi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
