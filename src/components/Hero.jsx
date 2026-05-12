import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const stats = [
    { val: "130cm", label: "Kanat Açıklığı" },
    { val: "9", label: "Disiplinli Mühendis" },
    { val: "2026", label: "Teknofest Sabit Kanat" },
    { val: "ELRS", label: "True Diversity Link" },
  ];

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      <style>{`
        @keyframes pulseOrb {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.06); }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-18px) rotate(2deg); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes attentionPulse {
          0% { box-shadow: 0 0 0 0 rgba(168,85,247,0.5); }
          70% { box-shadow: 0 0 0 20px rgba(168,85,247,0); }
          100% { box-shadow: 0 0 0 0 rgba(168,85,247,0); }
        }
        .hero-grid-bg {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(50,50,60,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50,50,60,.2) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .hero-pattern-overlay {
          position: absolute; inset: 0; z-index: 1;
          background-image: url('/zilant-pattern.png');
          background-size: 600px;
          opacity: 0.04;
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .hero-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          animation: pulseOrb 7s ease-in-out infinite;
        }
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; }
          .hero-logo-side { display: none; }
        }
        .hero-logo-side {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hero-logo-img {
          width: min(520px, 95%);
          height: auto;
          animation: floatLogo 5s ease-in-out infinite;
          filter: drop-shadow(0 0 40px rgba(168,85,247,0.45)) drop-shadow(0 0 80px rgba(168,85,247,0.2));
          position: relative;
          z-index: 2;
        }
        .hero-logo-glow {
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%);
          animation: pulseOrb 5s ease-in-out infinite;
          z-index: 1;
        }
        .hero-text-side {
          animation: heroFadeUp .9s ease forwards;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border: 1px solid rgba(168,85,247,.4); border-radius: 100px;
          font-size: 12px; font-weight: 600; color: #c084fc; letter-spacing: .08em;
          margin-bottom: 28px; background: rgba(168,85,247,.06);
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #a855f7;
          animation: pulseOrb 2s ease-in-out infinite;
        }
        
        /* CTA Layout */
        .hero-cta-group {
          display: flex;
          gap: 16px;
          margin-top: 48px;
          align-items: stretch;
        }
        @media (max-width: 500px) {
          .hero-cta-group { flex-direction: column; }
        }

        .hero-pdf-btn-premium {
          display: flex; align-items: center; justify-content: center; gap: 16px;
          padding: 24px 40px; border-radius: 20px;
          background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
          color: #fff; font-weight: 900; font-size: 18px; text-decoration: none;
          box-shadow: 0 12px 40px rgba(168,85,247,0.5);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          font-family: 'Space Grotesk', sans-serif;
          position: relative;
          animation: attentionPulse 2s infinite;
          border: 2px solid rgba(255,255,255,0.25);
          flex: 1.5;
        }
        .hero-pdf-btn-premium:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 50px rgba(168,85,247,0.7);
          color: #fff;
        }
        .hero-pdf-btn-premium .btn-icon {
          background: rgba(255,255,255,0.25);
          border-radius: 100px;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-sub-cta-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        
        .hero-secondary-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,.1);
          color: #9ca3af; font-weight: 700; font-size: 13px; text-decoration: none;
          background: rgba(255,255,255,.02); transition: all .3s ease;
          flex: 1;
          white-space: nowrap;
        }
        .hero-secondary-btn:hover {
          background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.3); color: #fff;
        }

        .hero-stats-row {
          display: flex; gap: 0;
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.07); border-radius: 14px;
          padding: 22px 28px; margin-top: 56px;
          position: relative; z-index: 10;
        }
        .hero-stat { flex: 1; text-align: center; }
        .hero-stat-val { font-size: clamp(1.2rem,2.5vw,1.8rem); font-weight: 800; color: #f0f0f0; line-height: 1; }
        .hero-stat-label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: .1em; margin-top: 4px; }
        .hero-stat-divider { width: 1px; background: rgba(255,255,255,.07); align-self: stretch; margin: 4px 0; }
      `}</style>

      {/* BG Layers */}
      <div className="hero-grid-bg" />
      <div className="hero-pattern-overlay" />
      <div className="hero-orb" style={{ width: 700, height: 700, top: '-250px', right: '-150px', background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }} />
      <div className="hero-orb" style={{ width: 350, height: 350, bottom: '-80px', left: '-80px', background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 70%)', animationDelay: '3.5s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-layout">
          {/* Left: Text */}
          <div className="hero-text-side">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Baykar Fen Lisesi Ar-Ge Takımı
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: 1.05, marginBottom: '24px', fontWeight: 800 }}>
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(240,240,240,.35)' }}>BFL</span> <span style={{ color: '#a855f7' }}>Zilant UAV</span><br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(240,240,240,.35)' }}>Geleceği</span><br />
              <span style={{ color: '#fff' }}>Otonom İnşa Et.</span>
            </h1>

            <p style={{ fontSize: 'clamp(.95rem,1.8vw,1.15rem)', color: '#9ca3af', maxWidth: '520px', lineHeight: 1.75 }}>
              Türkiye'nin öncü eğitim kurumu <strong style={{ color: '#a855f7' }}>Baykar Fen Lisesi</strong> bünyesinde, havacılık tutkusu ve mühendislik disipliniyle yetişen genç zihinler. Zilant Team, gökyüzünde otonom geleceği tasarlıyor.
            </p>

            <div className="hero-cta-group">
              <a href="/zilantx-tanitim.pdf" download className="hero-pdf-btn-premium">
                <span className="btn-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </span>
                ZilantX Tanıtım Dosyası
              </a>
              
              <div className="hero-sub-cta-col">
                <a href="#sponsor" className="hero-secondary-btn">
                  Değer Ortağı Ol
                </a>
                <a href="#tech" className="hero-secondary-btn">
                  Teknik Mimari ↓
                </a>
              </div>
            </div>
          </div>

          {/* Right: Logo */}
          <div className="hero-logo-side">
            <div className="hero-logo-glow" />
            <img
              src="/zilant-logo-color.png"
              alt="Zilant UAV Logo"
              className="hero-logo-img"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats-row">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="hero-stat">
                <div className="hero-stat-val">{s.val}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
              {i < stats.length - 1 && <div className="hero-stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
