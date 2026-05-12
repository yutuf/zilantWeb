import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ background: '#0a0a0a', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes blueprintFlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        .about-blueprint-bg {
          position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: blueprintFlow 10s linear infinite;
          pointer-events: none;
        }
        .about-glow {
          position: absolute;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%);
          top: 10%; right: -200px;
          pointer-events: none;
        }
        .about-card-premium {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 30px;
          padding: 60px;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
        }
        .about-stat-group {
          display: flex; gap: 40px; margin-top: 50px;
          padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05);
        }
        .about-stat-item h4 { font-size: 28px; font-weight: 900; color: #a855f7; margin-bottom: 4px; }
        .about-stat-item p { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; }
        
        .about-feature-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 100px;
          background: rgba(168,85,247,0.08); border: 1px solid rgba(168,85,247,0.2);
          color: #c084fc; font-size: 11px; font-weight: 700; margin-bottom: 24px;
        }
      `}</style>

      <div className="about-blueprint-bg"></div>
      <div className="about-glow"></div>

      <div className="container">
        <div className="about-card-premium">
          <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            {/* Text side */}
            <div>
              <div className="about-feature-tag">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7' }}></span>
                EST. 2026 · BAYKAR FEN LİSESİ
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', marginBottom: '30px', lineHeight: 1.1 }}>
                Biz Kimiz?
              </h2>
              
              <p style={{ fontSize: '18px', color: '#e5e7eb', lineHeight: '1.7', marginBottom: '24px' }}>
                Otonom teknoloji çözümleri üreten <strong style={{ color: '#a855f7' }}>9 kişilik disiplinli bir mühendislik kolektifiyiz.</strong>
              </p>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: '#a855f7', fontSize: '24px' }}>⚡</div>
                  <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>Zifer'den Gökyüzüne:</strong> Elektrikli araç projemizden (Zifer) kazandığımız Ar-Ge tecrübesini, Sabit Kanat İHA alanına taşıdık.
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: '#a855f7', fontSize: '24px' }}>🛡️</div>
                  <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>Mitolojik Kökler:</strong> Adımızı bilgeliği ve hızı simgeleyen efsanevi "Kanatlı Yılan" Zilant'tan alıyoruz.
                  </p>
                </div>
              </div>

              <div className="about-stat-group">
                <div className="about-stat-item">
                  <h4>0.2s</h4>
                  <p>Otonom Karar</p>
                </div>
                <div className="about-stat-item">
                  <h4>2.4k</h4>
                  <p>Ar-Ge Saati</p>
                </div>
                <div className="about-stat-item">
                  <h4>130cm</h4>
                  <p>Kanat Açıklığı</p>
                </div>
              </div>
            </div>

            {/* Visual side */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: '-20px',
                border: '1px solid rgba(168,85,247,0.2)',
                borderRadius: '30px', zIndex: 1
              }}></div>
              <img 
                src="/M9yhIOlPihYYNjTXYYWh0_6V7Mm919.png" 
                alt="Zilant Art" 
                style={{ 
                  width: '100%', borderRadius: '20px', 
                  position: 'relative', zIndex: 2,
                  boxShadow: '0 30px 80px rgba(0,0,0,0.8)'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
