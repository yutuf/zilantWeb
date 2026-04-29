import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Background Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05) 0%, rgba(8, 8, 8, 1) 70%)',
        zIndex: -1
      }}></div>
      
      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(34, 34, 34, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 34, 34, 0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.5,
        zIndex: -2
      }}></div>

      <div className="container animate-fade-up">
        <div style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            border: '1px solid var(--color-accent-silver)',
            borderRadius: '4px',
            color: 'var(--color-accent-silver)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: '600',
            letterSpacing: '0.1em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            Teknofest Liselerarası İHA / Sabit Kanat
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '1.5rem',
            lineHeight: 1.1
          }}>
            Otonom Sistemlerin<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-text-primary)' }}>Geleceği:</span>{' '}
            <span className="text-purple">Zilant Takımı</span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--color-text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '600px'
          }}>
            Baykar Fen Lisesi bünyesinde yetişen; yapay zeka, gömülü sistemler ve ileri kompozit malzemeleri tek bir platformda birleştiren, endüstri standartlarında çalışan çok disiplinli mühendislik takımı.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#sponsor" className="btn btn-primary">Bizi Destekleyin</a>
            <a href="#tech" className="btn btn-secondary">Teknolojimiz</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
