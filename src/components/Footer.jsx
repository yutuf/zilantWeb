import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-base)',
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--spacing-8) 0',
      textAlign: 'center',
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--font-size-sm)'
    }}>
      <div className="container">
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: 'var(--color-accent-purple)', fontWeight: '700', fontSize: '1.25rem' }}>ZILANT</span>
          <span style={{ borderLeft: '1px solid var(--color-border-light)', paddingLeft: '10px' }}>UAV TEAM</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Zilant Takımı. Tüm Hakları Saklıdır.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
          Teknofest Liselerarası İHA Sabit Kanat Kategorisi Katılımcısı
        </p>
      </div>
    </footer>
  );
};

export default Footer;
