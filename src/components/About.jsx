import React from 'react';

const About = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="section-title">Biz Kimiz?</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
              Biz sadece bir yarışma takımı değil, uzun vadeli otonom teknoloji çözümleri üreten <span className="text-purple">9 kişilik disiplinli bir mühendislik kolektifiyiz.</span>
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>
              <strong>Zifer'den Gökyüzüne:</strong> 5 ay boyunca ilmek ilmek örülen elektrikli araç projemizden kalan paha biçilemez "öğrenmeyi öğrenme" kültürüyle, enerjimizi <strong>Sabit Kanat İHA</strong> alanına kaydırdık.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.7' }}>
              <strong>Mitolojik Kökler:</strong> Adımızı, Türk-Tatar mitolojisinde bilgeliği ve koruyuculuğu simgeleyen efsanevi "Kanatlı Yılan" <em>Zilant</em>'tan alıyoruz. Zilant; yerin derinliklerindeki disiplini, gökyüzünün hızıyla birleştirir.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              <strong>Baykar Fen Lisesi (BFL) Ekosistemi:</strong> Türkiye'nin teknoloji geleceğinin inşa edildiği Baykar Fen Lisesi çatısı altında doğduk. "Milli Teknoloji Hamlesi" vizyonuyla yoğrulan ekibimiz, lise seviyesinin ötesinde bir Ar-Ge disiplinine ve "mühendisliği bir yaşam biçimi" olarak gören bir karaktere sahiptir. Hedefimiz finale kalmak ve süreci bir Mansiyon Ödülü ile taçlandırmaktır.
            </p>
            
            <ul style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--color-accent-silver)', fontSize: '1.5rem', lineHeight: 1 }}>⚙</div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Sistem Entegrasyonu & Mekanik</h4>
                  <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)' }}>"Twin tail boom" (çift kuyruk bumu) aerodinamiği, karbon fiber el yatırması ve modüler gövde tasarımı.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--color-accent-purple)', fontSize: '1.5rem', lineHeight: 1 }}>🧠</div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Tam Otonomi ve Hassas Görev</h4>
                  <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)' }}>Önceden tanımlı koordinat bazlı yük bırakma, 3-5 derece süzülme açısıyla Flare otonom iniş algoritması.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--color-accent-silver)', fontSize: '1.5rem', lineHeight: 1 }}>📡</div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Haberleşme & Aviyonik</h4>
                  <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)' }}>Pixhawk Cube Orange+ ile MAVLink üzerinden "sıfır gecikmeli" veri işleme ve hatasız yer istasyonu haberleşmesi.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '-20px',
              border: '1px solid var(--color-border-light)',
              borderRadius: 'var(--radius-lg)',
              zIndex: 0
            }}></div>
            <div style={{
              width: '100%',
              aspectRatio: '4/3',
              backgroundColor: 'var(--color-bg-surface-light)',
              borderRadius: 'var(--radius-md)',
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '1px solid var(--color-border)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.15), rgba(0,0,0,0.5))',
              }}></div>
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐉</div>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  [ Kanatlı Yılan - Zilant ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
