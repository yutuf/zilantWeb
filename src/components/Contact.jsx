import React from 'react';

const Contact = () => {
  const WA_NUMBER = "905516499710";
  
  return (
    <section id="contact" style={{ background: '#0a0a0a', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .contact-glow {
          position: absolute; bottom: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%);
          pointer-events: none; z-index: 1;
        }
        .contact-card-premium {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 30px;
          padding: 60px;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }
        .contact-method-card {
          padding: 30px; border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
        }
        .contact-method-card:hover {
          background: rgba(168,85,247,0.08);
          border-color: #a855f7;
          transform: translateY(-5px);
        }
        .contact-wa-btn {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          padding: 24px; border-radius: 20px;
          background: #25D366; color: #fff;
          font-weight: 900; font-size: 20px; text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }
        .contact-wa-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(37, 211, 102, 0.5);
          color: #fff;
        }
      `}</style>

      <div className="contact-glow"></div>

      <div className="container">
        <div className="contact-card-premium">
          <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#a855f7', fontWeight: '800', letterSpacing: '0.2em', fontSize: '12px' }}>GET IN TOUCH</span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', margin: '20px 0' }}>Bize Ulaşın</h2>
              <p style={{ fontSize: '18px', color: '#9ca3af', lineHeight: '1.7', marginBottom: '40px' }}>
                Destek olmak, teknik detayları konuşmak veya Baykar Fen Lisesi'ndeki atölyemizi ziyaret etmek için bize ulaşabilirsiniz.
              </p>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                <a href={`https://wa.me/${WA_NUMBER}`} className="contact-wa-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Hattı
                </a>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <a href="mailto:sponsor@zilant.one" className="contact-method-card">
                <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: '800', marginBottom: '10px' }}>E-POSTA</div>
                <div style={{ fontSize: '14px', color: '#fff', fontWeight: '600' }}>sponsor@zilant.one</div>
              </a>
              <a href="https://linkedin.com/company/zilantuav" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: '800', marginBottom: '10px' }}>LINKEDIN</div>
                <div style={{ fontSize: '14px', color: '#fff', fontWeight: '600' }}>Zilant UAV Team</div>
              </a>
              <div className="contact-method-card" style={{ gridColumn: 'span 2' }}>
                <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: '800', marginBottom: '10px' }}>ADRES</div>
                <div style={{ fontSize: '14px', color: '#fff', fontWeight: '600' }}>
                  Baykar Fen Lisesi Yerleşkesi, Atölye-4<br />
                  Başakşehir, İstanbul
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
