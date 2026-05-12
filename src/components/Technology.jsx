import React, { useState } from 'react';

const techInventory = [
  {
    category: "UÇUŞ KONTROL",
    icon: "◈",
    color: "#a855f7",
    items: [
      {
        name: "SkyNeuro FCU",
        spec: "Standalone Uçuş Kontrol Ünitesi",
        detail: "Yüksek işlem gücüne sahip bağımsız uçuş kontrol sistemi. Gerçek zamanlı durum tahmini, gelişmiş PID döngüleri ve otonom görev yürütme kapasitesi.",
        tags: ["Standalone", "High-Performance", "MAVLink"]
      }
    ]
  },
  {
    category: "GÜÇ ÜNİTESİ",
    icon: "⚡",
    color: "#c084fc",
    items: [
      {
        name: "SunnySky 2820 920KV",
        spec: "İtki Motoru",
        detail: "Verimlilik ve itki dengesi optimize edilmiş brushless motor. Sabit kanat platformu için ideal güç-ağırlık oranı.",
        tags: ["Brushless", "920KV", "High-Efficiency"]
      },
      {
        name: "Skywalker 80A V2",
        spec: "Elektronik Hız Kontrol (ESC)",
        detail: "80A akım kapasiteli, BEC entegre elektronik hız kontrolcüsü. Seri protokolü ile FCU entegrasyonu.",
        tags: ["80A", "BEC Entegre", "V2"]
      }
    ]
  },
  {
    category: "HABERLEŞME",
    icon: "📡",
    color: "#7c3aed",
    items: [
      {
        name: "RadioMaster RP4TD-M",
        spec: "True Diversity ELRS Alıcı",
        detail: "Çift antenli True Diversity teknolojisi ile sinyal kayıplarına karşı maksimum redundancy. ExpressLRS protokolüyle ultra düşük gecikme süresi.",
        tags: ["True Diversity", "ELRS", "Dual-Receiver"]
      }
    ]
  },
  {
    category: "NAVİGASYON",
    icon: "🛰",
    color: "#9333ea",
    items: [
      {
        name: "GEP-M1025-MQ",
        spec: "M10 GPS Modülü",
        detail: "M10 çip mimarisine sahip yüksek hassasiyetli GPS. Çoklu uydu takibi ile milimetrik konumlandırma hassasiyeti.",
        tags: ["M10 Chip", "Multi-GNSS", "High-Accuracy"]
      },
      {
        name: "Dijital Pitot Tüpü",
        spec: "Diferansiyel Hava Hızı Sensörü",
        detail: "Dinamik basınç farkı ölçümüyle gerçek hava hızı verisi sağlar. Stall önleme algoritmalarına kritik veri kaynağı.",
        tags: ["Differential Pressure", "Airspeed", "Stall Protection"]
      }
    ]
  },
  {
    category: "YAPISAL",
    icon: "🛡",
    color: "#6d28d9",
    items: [
      {
        name: "Twin Tail Boom Airframe",
        spec: "130cm Kanat Açıklığı",
        detail: "Karbon fiber takviyeli kompozit gövde yapısı. Yüksek burulma direnci ve optimize edilmiş aerodinamik yüzeyler.",
        tags: ["Carbon Fiber", "Composite", "Aerodynamic"]
      }
    ]
  }
];

const Technology = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="tech" className="section" style={{ background: '#080808', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes scanLine { 0% { top: 0%; } 100% { top: 100%; } }
        @keyframes techFadeIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes crosshairPulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.3); opacity: 0.8; } }

        .tech-circuit-bg {
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(168,85,247,0.06) 1.5px, transparent 1.5px);
          background-size: 40px 40px; opacity: 0.4; pointer-events: none;
        }

        .inv-grid-container {
          position: relative; max-width: 1200px; margin: 0 auto 80px;
          padding: 2px; border-radius: 26px;
          background: linear-gradient(135deg, rgba(168,85,247,0.2) 0%, transparent 50%, rgba(168,85,247,0.2) 100%);
        }

        .inv-grid {
          display: grid; grid-template-columns: 280px 1fr; gap: 0;
          background: #0c0c10; border-radius: 24px; overflow: hidden;
          position: relative; z-index: 2;
        }

        .inv-sidebar { display: flex; flex-direction: column; border-right: 1px solid rgba(168,85,247,0.15); background: #08080a; }
        
        .inv-sidebar-btn {
          padding: 26px 30px; border: none; background: transparent; color: #4b5563;
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em; text-align: left;
          cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.02);
          transition: all 0.4s ease; display: flex; align-items: center; gap: 18px;
          position: relative; overflow: hidden;
        }
        .inv-sidebar-btn::after {
          content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 0;
          background: currentColor; opacity: 0.1; transition: width 0.3s ease;
        }
        .inv-sidebar-btn:hover { color: #fff; background: rgba(255,255,255,0.02); }
        .inv-sidebar-btn.active { color: #fff; background: rgba(168,85,247,0.08); }
        .inv-sidebar-btn.active::after { width: 100%; }

        .sidebar-icon-wrap {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease; font-size: 14px;
        }

        .inv-panel { 
          padding: 60px; min-height: 450px; position: relative;
          background: radial-gradient(circle at 100% 0%, rgba(168,85,247,0.03) 0%, transparent 50%);
        }
        
        .panel-watermark {
          position: absolute; bottom: 40px; right: 40px; font-size: 120px;
          font-weight: 900; color: rgba(255,255,255,0.015); pointer-events: none;
          text-transform: uppercase; letter-spacing: -0.05em;
        }

        .item-card { animation: techFadeIn 0.6s ease forwards; }
        
        .status-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; font-weight: 900; color: #10b981;
          text-transform: uppercase; letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        .status-dot { width: 5px; height: 5px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981; }

        .inv-item-name { font-size: 32px; font-weight: 900; color: #fff; margin-bottom: 8px; letter-spacing: -0.01em; }
        .inv-item-spec { font-size: 13px; color: #a855f7; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px; }
        .inv-item-detail { font-size: 16px; color: #9ca3af; line-height: 1.8; margin-bottom: 30px; max-width: 600px; }
        
        .inv-tag { 
          padding: 6px 14px; background: rgba(168,85,247,0.05); 
          border: 1px solid rgba(168,85,247,0.15); border-radius: 8px; 
          font-size: 11px; font-weight: 800; color: #a855f7;
          text-transform: uppercase;
        }

        .uav-showcase-frameless {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          margin-top: 60px; padding: 0 40px;
          position: relative;
        }
        @media(max-width:992px){ .uav-showcase-frameless { grid-template-columns: 1fr; padding: 0; } }

        .uav-visual-stack { position: relative; }
        .uav-scan-line {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.6), transparent);
          box-shadow: 0 0 15px rgba(168,85,247,0.4); z-index: 5;
          animation: scanLine 6s infinite linear;
        }
        .crosshair {
          position: absolute; width: 24px; height: 24px;
          border: 1px solid rgba(168,85,247,0.6); border-radius: 50%;
          animation: crosshairPulse 2s infinite; z-index: 10;
        }
        .crosshair::before, .crosshair::after {
          content: ''; position: absolute; background: #a855f7;
        }
        .crosshair::before { top: 50%; left: -6px; right: -6px; height: 1px; }
        .crosshair::after { left: 50%; top: -6px; bottom: -6px; width: 1px; }
      `}</style>

      <div className="tech-circuit-bg"></div>

      <div className="container">
        <div className="tech-header" style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span className="tech-header-eyebrow" style={{ color: '#a855f7', fontWeight: '800', letterSpacing: '0.3em' }}>SYSTEMS & COMPONENTS</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', color: '#fff', margin: '24px 0' }}>Teknik Donanım</h2>
          <p style={{ color: '#6b7280', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Otonom görev kabiliyetimizi oluşturan mühendislik ürünü donanım mimarimiz.
          </p>
        </div>

        <div className="inv-grid-container">
          <div className="inv-grid">
            <div className="inv-sidebar">
              {techInventory.map((cat, i) => (
                <button
                  key={i}
                  className={`inv-sidebar-btn ${activeCategory === i ? 'active' : ''}`}
                  onClick={() => setActiveCategory(i)}
                  style={activeCategory === i ? { color: cat.color } : {}}
                >
                  <div className="sidebar-icon-wrap" style={activeCategory === i ? { borderColor: cat.color, background: `${cat.color}15` } : {}}>
                    {cat.icon}
                  </div>
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="inv-panel">
              <div className="panel-watermark">{techInventory[activeCategory].category.split(' ')[0]}</div>
              
              {techInventory[activeCategory].items.map((item, i) => (
                <div key={i} className="item-card" style={{ marginBottom: '50px' }}>
                  <div className="status-badge">
                    <span className="status-dot"></span>
                    System Online
                  </div>
                  <div className="inv-item-name">{item.name}</div>
                  <div className="inv-item-spec">{item.spec}</div>
                  <p className="inv-item-detail">{item.detail}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {item.tags.map((tag, t) => (
                      <span key={t} className="inv-tag" style={{ borderColor: `${techInventory[activeCategory].color}40`, color: techInventory[activeCategory].color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="uav-showcase-frameless">
          <div className="uav-visual-stack">
            {/* HUD Elements over the UAV image */}
            <div className="crosshair" style={{ top: '35%', left: '45%' }}></div>
            <div className="crosshair" style={{ top: '65%', left: '75%' }}></div>
            <div className="uav-scan-line"></div>
            
            <img src="/ziron-uav-angled.png" alt="Ziron UAV" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 2 }} />
            
            <div style={{ position: 'absolute', bottom: '0', left: '0', color: '#a855f7', fontSize: '10px', fontWeight: '900', letterSpacing: '0.1em' }}>
              &gt; TRACKING ACTIVE... [BFL-ZRT-09]
            </div>
          </div>
          
          <div>
            <span style={{ color: '#a855f7', fontWeight: '800', fontSize: '12px', letterSpacing: '0.2em' }}>TECHNICAL SPECS</span>
            <h3 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', margin: '20px 0' }}>Ziron İHA Platformu</h3>
            <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px' }}>
              Twin tail boom tasarımı ve karbon fiber takviyeli kompozit yapısı ile maksimum dayanıklılık ve aerodinamik verimlilik.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { l: "Kanat Açıklığı", v: "130 cm" },
                { l: "Ağırlık (MTOW)", v: "3.2 kg" },
                { l: "Uçuş Süresi", v: "45 dk+" },
                { l: "Operasyonel Menzil", v: "5 km" }
              ].map((s, i) => (
                <div key={i} style={{ padding: '24px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '8px' }}>{s.l}</div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#fff' }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
