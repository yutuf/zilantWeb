import React from 'react';

const Sponsorship = () => {
  const mainPackages = [
    {
      name: "Kurucu Ortak",
      type: "STRATEJİK İŞ BİRLİĞİ",
      price: "₺85.000",
      description: "Ekibin gelişimine en büyük katkıyı sağlayan kurumsal çözüm ortaklığı. Teknik ve operasyonel derinlikte iş birliği.",
      badge: "badge-premium",
      features: [
        "Yarışma sonrası prototip İHA gövdesinin firmaya teslimi (sergileme amaçlı)",
        "İHA gövdesi üzerinde (Fuselage) özel logo yerleşimi",
        "Ekip formalarında arka panel logo yerleşimi",
        "Web sitesinde 'Kurucu Ortak' statüsü ve logo yerleşimi",
        "Sektörel rakip engelleme taahhüdü",
        "Aylık Teknik İlerleme Raporu ve Yönetici Brifingleri"
      ],
      cta: "İş Birliği Sürecini Başlat",
      highlight: true
    },
    {
      name: "Gökyüzü Ortağı",
      type: "ANA DESTEKÇİ",
      price: "₺50.000",
      description: "Gövde ve web sitesi üzerinde güçlü görünürlük. Sosyal medya süreçlerinde teknik entegrasyon.",
      badge: "badge-gold",
      features: [
        "Fuselage üzerinde standart logo yerleşimi",
        "Ekip formalarında arka panel logo yerleşimi",
        "Web sitesinde 'Ana Sponsorlar' arasında yerleşim",
        "4 bölümden oluşan 'Mühendislik Günlükleri' video serisi",
        "Sosyal medya teknik içeriklerinde marka görünürlüğü"
      ],
      cta: "Destek Süreci Başlat",
      highlight: false
    }
  ];

  const systemPackages = [
    {
      name: "Sistem Ortağı",
      price: "₺20.000",
      target: "Aviyonik · Güç · Yazılım",
      features: ["Kanat logoları", "3 bölüm sistem tanıtım serisi", "Teknik spotlight postları"],
      badge: "badge-system"
    },
    {
      name: "Parça Ortağı",
      price: "₺3.000 – ₺15.000",
      target: "Donanım / BOM",
      features: ["Kutu açılış videoları", "Web sitesi teknik parça sayfası", "Instagram story entegrasyonu"],
      badge: "badge-part"
    }
  ];

  const supportPackages = [
    { name: "Hizmet Ortağı", price: "Ayni Destek", desc: "Lojistik, Baskı, Yazılım, Atölye" },
    { name: "Mikro Destek", price: "₺1.500", desc: "Bireysel ve KOBİ Destekleri" }
  ];

  return (
    <section id="sponsor" className="sponsorship-container section">
      <style>{`
        .sponsorship-container {
          background-color: #0a0a0c;
          color: #f8f9fa;
          padding: 100px 0;
          font-family: 'Inter', system-ui, sans-serif;
        }
        
        .section-header {
          max-width: 800px;
          margin: 0 auto 80px;
          text-align: center;
        }
        
        .eyebrow {
          color: var(--color-accent-purple);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 16px;
          display: block;
        }
        
        .main-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #fff 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .lead-text {
          font-size: 18px;
          color: #9ca3af;
          line-height: 1.6;
        }

        /* Hero Cards */
        .premium-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .hero-card {
          background: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 24px;
          padding: 48px;
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-card:hover {
          border-color: var(--color-accent-purple);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(168, 85, 247, 0.1);
        }
        
        .hero-card.highlight {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.05) 0%, rgba(10, 10, 12, 0) 100%);
          border: 1px solid rgba(168, 85, 247, 0.4);
        }
        
        .type-badge {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-accent-purple);
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        
        .package-name {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .package-price {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 24px;
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        
        .package-price span {
          font-size: 14px;
          color: #6b7280;
          font-weight: 400;
        }
        
        .package-desc {
          color: #9ca3af;
          font-size: 15px;
          margin-bottom: 32px;
          min-height: 45px;
        }
        
        .feature-group {
          margin-bottom: 40px;
          flex-grow: 1;
        }
        
        .feature-item {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          color: #d1d5db;
        }
        
        .check-icon {
          color: var(--color-accent-purple);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .cta-button {
          background: #f8f9fa;
          color: #0a0a0c;
          text-align: center;
          padding: 18px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .hero-card.highlight .cta-button {
          background: var(--color-accent-purple);
          color: #fff;
        }
        
        .cta-button:hover {
          transform: scale(1.02);
          opacity: 0.9;
        }

        /* Secondary Grid */
        .secondary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }
        
        .system-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }
        
        .system-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .system-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .system-price {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-accent-purple);
          margin-bottom: 16px;
        }
        
        .target-label {
          font-size: 12px;
          background: rgba(255,255,255,0.1);
          padding: 4px 10px;
          border-radius: 4px;
          color: #9ca3af;
          margin-bottom: 20px;
          display: inline-block;
        }

        /* Footer Bar */
        .corporate-contact {
          background: linear-gradient(90deg, #111 0%, #1a1a1f 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .contact-info h4 {
          font-size: 22px;
          margin-bottom: 8px;
        }
        
        .contact-info p {
          color: #6b7280;
        }
        
        .inquiry-btn {
          border: 1px solid #333;
          padding: 14px 32px;
          border-radius: 10px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .inquiry-btn:hover {
          background: #fff;
          color: #000;
        }

        @media (max-width: 768px) {
          .premium-grid { grid-template-columns: 1fr; }
          .hero-card { padding: 32px; }
          .corporate-contact { flex-direction: column; text-align: center; gap: 30px; }
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Engineering Partnership 2026</span>
          <h1 className="main-title">Stratejik Mühendislik Ortaklığı</h1>
          <p className="lead-text">
            Teknofest 2026 yolculuğumuzda, teknik gelişimimize katkı sağlayacak ve 
            mühendislik disiplinimizi destekleyecek kurumlarla uzun vadeli değer ortaklıkları kuruyoruz.
          </p>
        </div>

        <div className="premium-grid">
          {mainPackages.map((pkg, idx) => (
            <div key={idx} className={`hero-card ${pkg.highlight ? 'highlight' : ''}`}>
              <div className="type-badge">{pkg.type}</div>
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price} <span>/ Sezon</span></div>
              <p className="package-desc">{pkg.description}</p>
              
              <div className="feature-group">
                {pkg.features.map((feat, fidx) => (
                  <div key={fidx} className="feature-item">
                    <span className="check-icon">✦</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              
              <a href={`mailto:zilantec@gmail.com?subject=Kurumsal Sponsorluk: ${pkg.name}`} className="cta-button">
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="secondary-grid">
          {systemPackages.map((pkg, idx) => (
            <div key={idx} className="system-card">
              <h4 className="system-title">{pkg.name}</h4>
              <div className="system-price">{pkg.price}</div>
              <span className="target-label">{pkg.target}</span>
              <div className="feature-group">
                {pkg.features.map((feat, fidx) => (
                  <div key={fidx} className="feature-item" style={{ fontSize: '13px', marginBottom: '8px' }}>
                    <span style={{ color: '#444' }}>•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="system-card" style={{ background: 'transparent', border: '1px dashed rgba(255,255,255,0.1)' }}>
            <h4 className="system-title">Diğer Destekler</h4>
            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>
              Hizmet, Ayni Yardımlar ve Mikro Destekler için özel modellerimiz mevcuttur.
            </p>
            <div style={{ display: 'grid', gap: '10px' }}>
              {supportPackages.map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span>{s.name}</span>
                  <span style={{ color: 'var(--color-accent-purple)' }}>{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="corporate-contact">
          <div className="contact-info">
            <h4>Kurumsal İletişim ve Sunum</h4>
            <p>Daha detaylı teknik sunum ve iş birliği modelleri için dosyamızı talep edin.</p>
          </div>
          <a href="mailto:zilantec@gmail.com?subject=Sponsorluk Sunumu Talebi" className="inquiry-btn">
            Detaylı Sunum İste ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
