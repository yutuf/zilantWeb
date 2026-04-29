import React from 'react';

const Team = () => {
  const members = [
    { name: "Yusuf Kerim", role: "Takım Kaptanı" },
    { name: "Emin Taha", role: "Elektronik & Aviyonik" },
    { name: "Kerem", role: "Yazılım Geliştirme" },
    { name: "Muhammet", role: "Gömülü Sistemler" },
    { name: "Ali Eymen", role: "Otonom Algoritmalar" },
    { name: "Metehan", role: "Mekanik Tasarım (CAD)" },
    { name: "Hasan Salih", role: "Üretim & Entegrasyon" },
    { name: "Ahmet Eren", role: "Elektronik Sistemler" },
    { name: "Abdullah Emre", role: "Yapısal Mühendislik" }
  ];

  return (
    <section id="team" className="section" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title center">Ekibimiz</h2>
          <p className="section-subtitle center" style={{ maxWidth: '600px' }}>
            Baykar Fen Lisesi bünyesinde, farklı mühendislik disiplinlerini tek bir vizyonda birleştiren 9 kişilik çalışma grubu.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
          gap: '30px' 
        }}>
          {members.map((m, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              padding: '20px',
              transition: 'all 0.3s ease',
            }} className="team-member">
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'var(--color-bg-surface-light)',
                border: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--color-accent-purple)',
                fontSize: '24px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }} className="member-avatar">
                {m.name.charAt(0)}
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '6px', color: '#fff' }}>{m.name}</h4>
              <p style={{ 
                color: 'var(--color-text-secondary)', 
                fontSize: '13px', 
                fontWeight: '500',
                letterSpacing: '0.02em'
              }}>
                {m.role}
              </p>
            </div>
          ))}
        </div>
        
        <style>{`
          .team-member:hover .member-avatar {
            border-color: var(--color-accent-purple);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.15);
            transform: scale(1.05);
          }
          .team-member:hover h4 {
            color: var(--color-accent-purple) !important;
          }
        `}</style>

        <div style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid var(--color-border-light)',
          textAlign: 'center'
        }}>
          <a href="https://linkedin.com/company/zilantuav" target="_blank" rel="noopener noreferrer" style={{ 
            color: 'var(--color-text-muted)', 
            textDecoration: 'none', 
            fontSize: '13px', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            transition: 'color 0.2s ease'
          }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}>
            Teknik kadro detayları için LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
