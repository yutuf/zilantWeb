import React, { useState } from 'react';

const WA_NUMBER = "905516499710";
const MAIL = "zilantec@gmail.com";

const waLink = (pkg) =>
  `https://wa.me/${WA_NUMBER}?text=Merhaba%2C%20Zilant%20UAV%20Team'in%20%22${encodeURIComponent(pkg)}%22%20modeline%20destek%20vermek%20istiyorum.`;

const packages = [
  {
    id: "mikro",
    tier: "TOPLULUK · MİKRO",
    name: "Dostluk Desteği",
    price: "₺1.000+",
    note: "Bireysel / Esnaf",
    desc: "Zilant ekosisteminin bir parçası olun. İsminiz bu teknoloji yolculuğunda dijital olarak ölümsüzleşsin.",
    highlight: false,
    badge: "İnananlar",
    color: "#9ca3af",
    model: "🤝",
    perks: [
      "İnananlar Mozaiği'nde kalıcı isim",
      "Dijital Teşekkür Sertifikası",
      "Instagram toplu teşekkür listesi",
    ],
  },
  {
    id: "dostlar",
    tier: "GELİŞTİRİCİ · BRONZ",
    name: "Saha Ortağı",
    price: "₺10.000",
    note: "Üretim & Atölye",
    desc: "Üretim sürecimize güç katın. Logonuz formamızda ve web sitemizde kalıcı yer alsın.",
    highlight: true,
    badge: "En Popüler",
    color: "#a855f7",
    model: "⚙️",
    perks: [
      "Forma sırtında isim/logo",
      "Web sitesinde kurumsal profil",
      "Instagram özel teşekkür story'si",
      "Ekip bültenlerine abonelik",
    ],
  },
  {
    id: "sistem",
    tier: "SİSTEM · ALTIN",
    name: "Sistem Ortağı",
    price: "₺35.000",
    note: "Ana Teknik Destekçi",
    desc: "Markanızı uçağın kalbine yerleştirin. Tüm aviyonik ve teknik raporlarda imzanız olsun.",
    highlight: false,
    badge: "Prestij",
    color: "#3b82f6",
    model: "✈️",
    perks: [
      "Fuselage yan panel ana logo",
      "Forma ön yüz (göğüs) logo",
      "Teknik raporlarda marka bahsi",
      "Sektörel rakip engelleme taahhüdü",
    ],
  },
  {
    id: "kurucu",
    tier: "STRATEJİK PARTNER",
    name: "Ana Sponsor",
    price: "₺90.000",
    note: "Limitli Tek Hak",
    desc: "Vizyonumuzun en büyük destekçisi. Markanız, projemizin amiral gemisi olarak tüm süreçlerde en ön sırada yer alır.",
    highlight: false,
    badge: "Maksimum Yetki",
    color: "#fbbf24",
    model: "👑",
    perks: [
      "İHA ismine marka entegrasyonu",
      "Kanat üstü dev format ana logo",
      "Yarışma sonrası karbon gövde mülkiyeti",
      "Tüm mecralarda 'Ana Sponsor' statüsü",
    ],
  },
];

const Sponsorship = () => {
  return (
    <section id="sponsor" style={{ background: '#080808', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .sp-container { max-width: 1320px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 10; }
        
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.1); }
          50% { box-shadow: 0 0 40px rgba(168,85,247,0.3); }
        }

        .sp-pattern-bg {
          position: absolute; inset: 0; z-index: 1;
          background-image: url('/zilant-pattern.png');
          background-size: 600px;
          opacity: 0.03;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .sp-header { text-align: center; margin-bottom: 80px; }
        .sp-eyebrow { color: #a855f7; font-size: 13px; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 20px; display: block; }
        .sp-title { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; color: #fff; line-height: 1.1; letter-spacing: -0.02em; }
        
        .sp-grid { 
          display: grid; 
          grid-template-columns: repeat(4, 1fr); 
          gap: 20px; 
        }
        @media (max-width: 1200px) { .sp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .sp-grid { grid-template-columns: 1fr; } }
        
        .sp-card { 
          background: #0d0d0f; border: 1px solid rgba(255,255,255,0.05); 
          border-radius: 28px; padding: 32px; position: relative; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex; flex-direction: column; height: 100%;
        }

        .card-mikro { border-color: rgba(156,163,175,0.2); }
        .card-dostlar { 
          border-color: rgba(168,85,247,0.4); 
          background: linear-gradient(145deg, #0d0d0f 0%, #150b1d 100%);
        }
        .card-sistem { border-color: rgba(59,130,246,0.3); }
        .card-kurucu { 
          border: 2px solid transparent;
          background: linear-gradient(#0d0d0f, #0d0d0f) padding-box,
                      linear-gradient(90deg, #fbbf24, #ef4444, #fbbf24) border-box;
          background-size: 200% auto;
          animation: borderFlow 4s linear infinite;
        }

        .sp-card:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(0,0,0,0.6); z-index: 10; }

        .pkg-badge { 
          position: absolute; top: -12px; left: 32px; 
          padding: 6px 14px; border-radius: 100px; font-size: 10px; font-weight: 900; 
          color: #fff; z-index: 5; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          text-transform: uppercase;
        }

        .pkg-price-wrap { margin-bottom: 20px; }
        .pkg-price-val { font-size: 34px; font-weight: 950; color: #fff; letter-spacing: -0.03em; }
        .pkg-price-unit { font-size: 13px; color: #6b7280; font-weight: 600; margin-left: 4px; }

        .pkg-perk-list { list-style: none; padding: 0; margin: 0 0 30px; display: grid; gap: 12px; flex-grow: 1; }
        .pkg-perk-item { display: flex; gap: 10px; font-size: 13px; color: #d1d5db; line-height: 1.4; }
        .pkg-perk-item svg { flex-shrink: 0; margin-top: 2px; }

        .pkg-action-btn {
          width: 100%; padding: 15px; border-radius: 14px; font-weight: 800; font-size: 14px;
          text-align: center; text-decoration: none; transition: all 0.3s ease;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }

        .visual-model {
          height: 100px; width: 100%; border-radius: 14px; margin-bottom: 24px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center; position: relative;
          overflow: hidden;
        }
        .model-inner { opacity: 0.15; filter: grayscale(1); transition: all 0.4s ease; transform: scale(0.9); }
        .sp-card:hover .model-inner { opacity: 1; filter: grayscale(0); transform: scale(1.2); }

        .morale-banner {
          margin-top: 60px; padding: 40px; border-radius: 30px;
          background: linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(249,115,22,0.05) 100%);
          border: 1px solid rgba(239,68,68,0.3);
          display: flex; align-items: center; justify-content: space-between; gap: 30px;
          position: relative;
          box-shadow: 0 0 30px rgba(239,68,68,0.05);
          animation: glowPulseRed 4s infinite ease-in-out;
        }
        @keyframes glowPulseRed {
          0%, 100% { box-shadow: 0 0 20px rgba(239,68,68,0.05); border-color: rgba(239,68,68,0.3); }
          50% { box-shadow: 0 0 40px rgba(239,68,68,0.2); border-color: rgba(239,68,68,0.6); }
        }
        @media (max-width: 768px) { .morale-banner { flex-direction: column; text-align: center; padding: 30px 20px; } }

        .morale-tag {
          position: absolute; top: 0; left: 40px; transform: translateY(-50%);
          background: #ef4444; color: #fff; font-size: 10px; font-weight: 900;
          padding: 6px 16px; border-radius: 100px; letter-spacing: 0.1em;
          box-shadow: 0 5px 15px rgba(239,68,68,0.4);
          white-space: nowrap; z-index: 20;
          border: 2px solid #080808; /* Border to cut the frame line */
        }

        .collab-strip-premium {
          margin-top: 40px; padding: 48px; border-radius: 30px;
          background: linear-gradient(90deg, rgba(168,85,247,0.12) 0%, rgba(59,130,246,0.12) 100%);
          border: 1px solid rgba(168,85,247,0.3);
          display: flex; align-items: center; justify-content: space-between; gap: 40px;
          position: relative; overflow: hidden;
          animation: glowPulse 4s infinite ease-in-out;
        }
        
        /* Mosaic Styling */
        .mosaic-container {
          margin-top: 120px;
          padding: 80px 40px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%);
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .mosaic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 60px;
        }
        @media (max-width: 768px) {
          .mosaic-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; }
          .collab-strip-premium { padding: 30px; flex-direction: column; text-align: center; }
          .mosaic-container { padding: 40px 20px; }
        }
        .mosaic-slot {
          aspect-ratio: 16/9;
          background: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.4s ease;
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }
        .mosaic-slot:hover {
          background: rgba(168,85,247,0.05);
          border-color: rgba(168,85,247,0.4);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .mosaic-slot.empty::before {
          content: 'RESERVED';
          position: absolute;
          top: 10px; left: 10px;
          font-size: 8px;
          font-weight: 900;
          color: rgba(255,255,255,0.1);
          letter-spacing: 0.1em;
        }
        .slot-plus {
          font-size: 20px;
          color: #333;
          transition: all 0.4s ease;
        }
        .mosaic-slot:hover .slot-plus {
          color: #a855f7;
          transform: rotate(90deg);
        }
        .slot-text {
          font-size: 10px;
          font-weight: 800;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.4s ease;
        }
        .mosaic-slot:hover .slot-text {
          color: #fff;
        }
        .slot-glow {
          position: absolute;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%);
          top: -50px; right: -50px;
          opacity: 0; transition: opacity 0.4s ease;
        }
        .mosaic-slot:hover .slot-glow { opacity: 1; }
      `}</style>

      <div className="sp-pattern-bg" />

      <div className="sp-container">
        <div className="sp-header">
          <span className="sp-eyebrow">Strategic Partnership Model</span>
          <h2 className="sp-title">Gökyüzü Vizyonuna Ortak Olun</h2>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '800px', margin: '24px auto 0' }}>
            Bütçeniz ne olursa olsun, bu projenin bir parçası olmanız bizim için kıymetli. 
            Maddi veya ayni desteğinizle yerinizi ayırtın.
          </p>
        </div>

        <div className="sp-grid">
          {packages.map(p => (
            <div key={p.id} className={`sp-card card-${p.id}`}>
              {p.badge && <div className="pkg-badge" style={{ background: p.color }}>{p.badge}</div>}
              
              <div className="visual-model">
                <div className="model-inner" style={{ fontSize: '32px' }}>{p.model}</div>
                <div style={{ position: 'absolute', bottom: '8px', right: '8px', fontSize: '9px', color: p.color, fontWeight: 900, opacity: 0.4 }}>M-{p.id.toUpperCase()}</div>
              </div>

              <div style={{ fontSize: '10px', fontWeight: 800, color: p.color, letterSpacing: '0.15em', marginBottom: '6px' }}>{p.tier}</div>
              <div className="sp-pkg-name" style={{ marginBottom: '12px', fontSize: '22px' }}>{p.name}</div>
              
              <div className="pkg-price-wrap">
                <span className="pkg-price-val">{p.price}</span>
                <span className="pkg-price-unit">{p.id === 'kurucu' ? '' : '/ min'}</span>
              </div>

              <p className="sp-pkg-desc" style={{ fontSize: '14px', marginBottom: '24px' }}>{p.desc}</p>

              <ul className="pkg-perk-list">
                {p.perks.map((perk, i) => (
                  <li key={i} className="pkg-perk-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {perk}
                  </li>
                ))}
              </ul>

              <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer" className="pkg-action-btn" style={{ 
                background: p.highlight ? p.color : 'rgba(255,255,255,0.05)',
                border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                color: '#fff'
              }}>
                İletişime Geç
              </a>
            </div>
          ))}
        </div>

        {/* Morale Support Banner */}
        <div className="morale-banner">
          <div className="morale-tag">EKİP RUHU</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ 
              fontSize: '48px', 
              background: 'rgba(239,68,68,0.1)', 
              width: '80px', height: '80px', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '20px',
              border: '1px solid rgba(239,68,68,0.2)'
            }}>🏎️</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h4 style={{ color: '#fff', fontSize: '24px', fontWeight: '900' }}>Takıma Go-Kart Ismarla!</h4>
                <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '8px', color: '#fff', fontSize: '18px', fontWeight: '900', border: '1px solid rgba(239,68,68,0.5)' }}>₺500</span>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.5', maxWidth: '500px' }}>
                Yoğun Ar-Ge temposuna kısa bir mola! Bütçenize uygun bu destekle ekibin enerjisini tazeleyin.
              </p>
            </div>
          </div>
          <a href={`https://wa.me/${WA_NUMBER}?text=Merhaba%2C%20ekibe%20Go-Kart%20ısmarlayarak%20moral%20desteği%20vermek%20istiyoruz.`} target="_blank" rel="noopener noreferrer" style={{ 
            padding: '22px 44px', 
            borderRadius: '18px', 
            background: '#ef4444', 
            color: '#fff', 
            fontWeight: '900', 
            textDecoration: 'none', 
            fontSize: '18px', 
            whiteSpace: 'nowrap',
            boxShadow: '0 10px 25px rgba(239,68,68,0.4)',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(239,68,68,0.6)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(239,68,68,0.4)'; }}>
            ₺500 Destek Ol
          </a>
        </div>

        {/* Real Branding HUD Section */}
        <div style={{ marginTop: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="sp-eyebrow">Strategic Visibility</span>
            <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#fff' }}>Teknik Marka Yerleşimi</h3>
            <p style={{ color: '#9ca3af', fontSize: '16px', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0' }}>
              Ziron UAV ve resmi takım ekipmanları üzerindeki stratejik logo konumlandırma planımız.
            </p>
          </div>

          <div className="branding-hud-grid">
            <style>{`
              .branding-hud-grid {
                display: grid;
                grid-template-columns: 1.5fr 2.4fr 0.9fr;
                gap: 24px;
                align-items: stretch;
              }
              @media (max-width: 1024px) {
                .branding-hud-grid { grid-template-columns: 1fr; }
              }
            `}</style>

            {/* Jersey 2 (White) - FAR LEFT */}
            <div style={{ position: 'relative', background: 'rgba(255,255,255,0.01)', borderRadius: '30px', padding: '0', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/zilantforma2.png" alt="Jersey White" style={{ width: '135%', height: 'auto', borderRadius: '0', objectFit: 'cover', transform: 'scale(1.4) translateY(0%)' }} />
                <div style={{ position: 'absolute', top: '15px', right: '15px', padding: '5px 10px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '9px', color: '#fff', fontWeight: '800', zIndex: 5 }}>SIRT / YAN</div>
              </div>
              <div style={{ padding: '15px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '11px', fontWeight: '900', color: '#9ca3af', letterSpacing: '0.1em' }}>JERSEY WHITE</span>
              </div>
            </div>

            {/* UAV HUD - CENTER */}
            <div style={{ position: 'relative', background: 'rgba(255,255,255,0.01)', borderRadius: '30px', padding: '30px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <img src="/ziron-top-view.png" alt="Ziron UAV Top View" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.15))' }} />
                
                {/* HUD Markers - UAV */}
                <div style={{ position: 'absolute', top: '10%', left: '5%', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #a855f7' }}></div>
                  <div style={{ padding: '3px 8px', background: 'rgba(168,85,247,0.1)', border: '1px solid #a855f7', color: '#fff', fontSize: '9px', fontWeight: '800', borderRadius: '4px' }}>KANAT</div>
                </div>
                <div style={{ position: 'absolute', top: '45%', left: '40%', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #3b82f6' }}></div>
                  <div style={{ padding: '3px 8px', background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', color: '#fff', fontSize: '9px', fontWeight: '800', borderRadius: '4px' }}>GÖVDE</div>
                </div>
              </div>
              <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
                <span style={{ fontSize: '11px', fontWeight: '900', color: '#a855f7', letterSpacing: '0.1em' }}>UAV BRANDING</span>
              </div>
            </div>

            {/* Jersey 1 (Purple) - FAR RIGHT */}
            <div style={{ position: 'relative', background: 'rgba(255,255,255,0.01)', borderRadius: '30px', padding: '0', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/zilantforma1.png" alt="Jersey Purple" style={{ width: '110%', height: 'auto', borderRadius: '0', objectFit: 'cover', transform: 'scale(1.1) translateY(0%)' }} />
                <div style={{ position: 'absolute', top: '15px', right: '15px', padding: '5px 10px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '9px', color: '#fff', fontWeight: '800', zIndex: 5 }}>ÖN / OMUZ</div>
              </div>
              <div style={{ padding: '15px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <span style={{ fontSize: '11px', fontWeight: '900', color: '#9ca3af', letterSpacing: '0.1em' }}>JERSEY PURPLE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="collab-strip-premium">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '11px', fontWeight: '700' }}>Karbon Fiber</span>
              <span style={{ padding: '4px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '11px', fontWeight: '700' }}>3D Baskı</span>
              <span style={{ padding: '4px 12px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '11px', fontWeight: '700' }}>Lojistik</span>
            </div>
            <h4 style={{ fontSize: '26px', fontWeight: '900', color: '#fff', marginBottom: '10px' }}>Malzeme & Hizmet Ortaklığı</h4>
            <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.6', maxWidth: '700px' }}>
              Teknik ekipman veya üretim desteğiyle de bu İHA'nın kanatlarında yer alabilirsiniz.
            </p>
          </div>
          <a href={`https://wa.me/${WA_NUMBER}?text=Merhaba%2C%20ayni%20destek%20ve%20mentorluk%20konusunda%20görüşmek%20istiyoruz.`} target="_blank" rel="noopener noreferrer" style={{ padding: '20px 40px', borderRadius: '16px', background: '#fff', color: '#000', fontWeight: '900', textDecoration: 'none', fontSize: '16px', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}>
            Teklif İletin
          </a>
        </div>

        <div className="mosaic-container">
          <div style={{ textAlign: 'center' }}>
            <span className="sp-eyebrow">Zilant Ecosystem</span>
            <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#fff' }}>İnananlar Mozaiği</h3>
            <p style={{ color: '#6b7280', fontSize: '16px', marginTop: '12px' }}>
              Vizyonumuza ortak olan markaların ve bireylerin dijital anıtı. Yerinizi şimdiden ayırtın.
            </p>
          </div>

          <div className="mosaic-grid">
            <div className="mosaic-slot" style={{ background: 'rgba(168,85,247,0.05)', borderColor: 'rgba(168,85,247,0.2)' }}>
              <img src="/zilant-logo-color.png" alt="Zilant" style={{ width: '98%', height: '98%', objectFit: 'contain' }} />
              <div className="slot-glow" style={{ opacity: 1 }}></div>
            </div>

            {[1, 2, 3, 4, 5, 6, 7].map(i => (
              <a key={i} href={`https://wa.me/${WA_NUMBER}?text=Merhaba%2C%20İnananlar%20Mozaiği'nde%20yerimizi%20ayırtmak%20istiyoruz.`} target="_blank" rel="noopener noreferrer" className="mosaic-slot empty">
                <div className="slot-glow"></div>
                <div className="slot-plus">+</div>
                <div className="slot-text">{i % 2 === 0 ? 'Sizin Logonuz' : 'Vizyon Ortağı'}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
