import React from 'react';

const Contact = () => {
  const WA_NUMBER = "905516499710";
  
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg-surface-light)' }}>
      <div className="container">
        <div className="grid grid-2">
          <div>
            <h2 className="section-title">İletişim</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
              Destek olmak, proje detaylarımızı konuşmak veya sadece tanışmak için bize ulaşın. Genellikle 24 saat içinde dönüş yapıyoruz.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  WhatsApp / İletişim Hattı
                </div>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem', color: '#25D366', fontWeight: '700' }}>
                  +90 551 649 97 10
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  Kurumsal E-Posta
                </div>
                <a href="mailto:zilantec@gmail.com" style={{ fontSize: '1.25rem', color: 'var(--color-accent-purple)', fontWeight: '500' }}>
                  zilantec@gmail.com
                </a>
              </div>
              
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                  Sosyal Ağlar
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <a href="https://instagram.com/zilant_uav" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}>
                    Instagram ↗
                  </a>
                  <a href="https://linkedin.com/company/zilantuav" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}>
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Bize Mesaj Bırakın</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Adınız Soyadınız / Kurum Adı" style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--color-bg-base)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-primary)',
                fontFamily: 'inherit'
              }} />
              
              <input type="email" placeholder="E-Posta Adresiniz" style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--color-bg-base)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-primary)',
                fontFamily: 'inherit'
              }} />
              
              <textarea placeholder="Mesajınız veya Destek Konusu" rows="4" style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--color-bg-base)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--color-text-primary)',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}></textarea>
              
              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
