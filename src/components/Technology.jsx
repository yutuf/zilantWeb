import React from 'react';

const Technology = () => {
  const techs = [
    {
      title: "Otonom Uçuş & Navigasyon",
      icon: "🧠",
      desc: "Mission Planner üzerinden tanımlanan 'Takeoff' komutuyla 15° tırmanma açısıyla kalkış. Önceden tanımlı hedef koordinat üzerinde DO_SET_SERVO komutuyla otonom yük bırakma. İnişte ise 3°-5° süzülme açısıyla 'Flare' manevrası yaparak tam otonom ve güvenli iniş. Manuel, Otonom ve Failsafe modları arası akıllı geçiş."
    },
    {
      title: "Aviyonik & Haberleşme",
      icon: "⚡",
      desc: "Pixhawk Cube Orange+ merkezli uçuş. Tüm uçuş verileri (hız, irtifa, batarya) gerçek zamanlı telemetri ile yer istasyonuna aktarılır. EMI/EMC izolasyon protokolleri ile parazit önleme, havacılık standartlarında lehimleme ve profesyonel kablolama altyapısı."
    },
    {
      title: "Yapısal & Kompozit Mühendisliği",
      icon: "🛡️",
      desc: "CNC ile parça parça kesilerek birleştirilen özgün köpük gövde ve kanat yapımız, karbon fiber el yatırması yöntemiyle güçlendirilecektir. Ağırlık ve işçilik dengesizliklerini tolere eden 'Twin Tail Boom' kuyruk mimarisi. 5000mAh 4S batarya ile milimetrik CG (Ağırlık Merkezi) tasarımı."
    }
  ];

  return (
    <section id="tech" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <h2 className="section-title center">Derin Mühendislik</h2>
          <p className="section-subtitle center">
            Tasarım, Aviyonik ve Üretimde "mühendisliği bir yaşam biçimi olarak gören" detaycı ve endüstri standartlarında bir Ar-Ge kültürü.
          </p>
        </div>

        <div className="grid grid-3">
          {techs.map((tech, idx) => (
            <div key={idx} className="card">
              <div style={{
                fontSize: '2rem',
                marginBottom: 'var(--spacing-4)',
                background: 'var(--color-bg-base)',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-light)'
              }}>
                {tech.icon}
              </div>
              <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-accent-purple)', fontSize: 'var(--font-size-lg)' }}>
                {tech.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
