import React from 'react';

const members = [
  { name: "Yusuf Kerim", role: "Takım Kaptanı", code: "CMD", img: "/team/yusuf-kerim.png" },
  { name: "Emin Taha", role: "Elektronik & Aviyonik", code: "AVN", img: "/team/emin-taha.png" },
  { name: "Kerem", role: "Yazılım Geliştirme", code: "SOFT", img: "/team/kerem.png" },
  { name: "Metehan", role: "Gömülü Sistemler", code: "EMB", img: "/team/metehan.png" },
  { name: "Ali Eymen", role: "Otonom Algoritmalar", code: "AUTO", img: "/team/ali-eymen.png" },
  { name: "Ceyhun", role: "Mekanik Tasarım (CAD)", code: "CAD", img: "/team/ceyhun.png" },
  { name: "Hasan Salih", role: "Üretim & Entegrasyon", code: "MFG", img: "/team/hasan-salih.png" },
  { name: "Ahmet Eren", role: "Elektronik Sistemler", code: "ELEC", img: "/team/ahmet-eren.png" },
  { name: "Abdullah Emre", role: "Yapısal Mühendislik", code: "STR", img: "/team/abdullah-emre.png" }
];

const Team = () => {
  return (
    <section id="team" style={{ background: '#080808', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .team-container { max-width: 1400px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 2; }
        .team-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 24px; 
          margin-top: 60px;
        }
        @media (max-width: 1200px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr; } }
        
        .member-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-align: left;
        }
        .member-card:hover {
          background: rgba(168,85,247,0.04);
          border-color: rgba(168,85,247,0.3);
          transform: translateX(8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(168,85,247,0.1);
        }
        
        .member-avatar-wrap {
          width: 120px; height: 120px;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
        }
        .member-card:hover .member-avatar-wrap {
          transform: scale(1.08);
        }
        .member-img-container {
          position: absolute;
          inset: 10px;
          border-radius: 10px;
          overflow: hidden;
          z-index: 1;
        }
        .member-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .member-custom-frame {
          position: absolute;
          inset: 0;
          z-index: 5;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
        }
        .member-code {
          font-size: 9px;
          font-weight: 900;
          color: #a855f7;
          letter-spacing: 0.1em;
          position: absolute;
          bottom: 8px; right: 8px;
          background: #080808;
          padding: 3px 6px;
          border: 1px solid rgba(168,85,247,0.3);
          border-radius: 4px;
          z-index: 10;
        }
        .member-info {
          flex-grow: 1;
        }
        .member-name {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }
        .member-role {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 500;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        .team-bg-text {
          position: absolute;
          font-size: 15vw;
          font-weight: 900;
          color: rgba(255,255,255,0.01);
          bottom: -2vw; right: 0;
          white-space: nowrap;
          pointer-events: none;
          z-index: 1;
          text-transform: uppercase;
        }
      `}</style>

      <div className="team-bg-text">Zilant Crew</div>

      <div className="team-container">
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#a855f7', fontSize: '12px', fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Core Division · Zilant UAV</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', color: '#fff', marginTop: '16px' }}>Teknik Kadromuz</h2>
          <p style={{ color: '#9ca3af', fontSize: '17px', maxWidth: '600px', margin: '20px auto 0', lineHeight: '1.7' }}>
            Havacılık tutkusunu mühendislik disipliniyle birleştiren, Baykar Fen Lisesi çatısı altındaki Ar-Ge ekibi.
          </p>
        </div>

        <div className="team-grid">
          {members.map((m, i) => (
            <div key={i} className="member-card">
              <div className="member-avatar-wrap">
                <img src="/frame.png" alt="Frame" className="member-custom-frame" />
                <div className="member-img-container">
                  <img src={m.img} alt={m.name} className="member-img" />
                </div>
                <div className="member-code">{m.code}</div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <a href="https://linkedin.com/company/zilantuav" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 32px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#9ca3af',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#a855f7'; e.currentTarget.style.color = '#fff'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#9ca3af'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn Üzerinden Takip Edin ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
