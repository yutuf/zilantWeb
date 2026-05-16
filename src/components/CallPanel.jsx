import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Search, 
  CheckCircle2, 
  ChevronRight,
  Users,
  Target,
  FileText,
  Lock,
  ArrowRight
} from 'lucide-react';

// Vercel Serverless API yolu (AdBlocker'ı aşmak için masum isim)
const API_BASE = "/api";

const TEAM_PASSWORD = "zilant2026";

const STATUS_COLORS = {
  "Aranmadı": "#6b7280",
  "Arandı": "#3b82f6",
  "Ulaşılamadı": "#ef4444",
  "İlgileniyor": "#a855f7",
  "Reddedildi": "#ef4444",
  "Olumlu": "#22c55e"
};

const CallPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isZilantAuth') === 'true');
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);
  
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Hepsi");
  const [activeCompany, setActiveCompany] = useState(null);
  const [callerName, setCallerName] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetchCompanies();
    }
  }, [isAuthenticated]);

  const fetchCompanies = async () => {
    try {
      const res = await fetch(`${API_BASE}/targets`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setCompanies(data);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching companies:", err);
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === TEAM_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isZilantAuth', 'true');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const updateStatus = async (id, status, notes) => {
    try {
      await fetch(`${API_BASE}/targets`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, notes })
      });
      fetchCompanies();
      if (activeCompany && activeCompany.id === id) {
        setActiveCompany({ ...activeCompany, status, notes });
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "Hepsi" || c.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: companies.length,
    called: companies.filter(c => c.status !== "Aranmadı").length,
    positive: companies.filter(c => c.status === "Olumlu" || c.status === "İlgileniyor").length
  };

  const getTranscript = (company) => {
    const name = company.name;
    const sector = company.sector;
    const caller = callerName || "[İsminiz]";

    return `Merhaba, ben Baykar Fen Lisesi Zilant İHA Takımı'ndan ${caller}. 
    
${sector} alanındaki çalışmalarınızı yakından takip ediyoruz. Biz şu anda Teknofest 2026 için tam otonom bir İHA geliştiriyoruz. 

${name} olarak vizyonumuzun bir parçası olmanız, teknik destek veya sponsorluk anlamında ekosisteme katkı sağlamanız bizim için çok değerli. 

Uygunsanız projemizin detaylarını içeren bir tanıtım dosyası iletmek ve kısa bir tanışma toplantısı planlamak isteriz.`;
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{ 
            width: '80px', height: '80px', background: 'rgba(168,85,247,0.1)', 
            borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            margin: '0 auto 24px', border: '1px solid rgba(168,85,247,0.2)' 
          }}>
            <Lock color="#a855f7" size={32} />
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>Zilant Call Panel</h2>
          <p style={{ color: '#6b7280', marginBottom: '32px' }}>Lütfen ekip şifresini giriniz</p>
          
          <form onSubmit={handleLogin}>
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <input 
                type="password"
                placeholder="Şifre..." 
                autoFocus
                style={{ 
                  width: '100%', background: 'rgba(255,255,255,0.03)', border: loginError ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  padding: '16px 20px', borderRadius: '16px', color: '#fff', outline: 'none', textAlign: 'center', fontSize: '18px'
                }}
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
              />
            </div>
            {loginError && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '16px' }}>Hatalı şifre, lütfen tekrar deneyin.</p>}
            <button type="submit" style={{ 
              width: '100%', padding: '16px', borderRadius: '16px', background: '#a855f7', color: '#fff', 
              fontWeight: 800, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              Giriş Yap <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#fff' }}>Yükleniyor...</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', padding: '40px 24px' }}>
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px;
          backdrop-filter: blur(10px);
        }
        .stat-card {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .company-row {
          padding: 16px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1fr auto;
          align-items: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .company-row:hover {
          background: rgba(255,255,255,0.03);
        }
        .badge {
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .btn {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary { background: #a855f7; color: #fff; }
        .btn-primary:hover { background: #9333ea; transform: translateY(-2px); }
        .transcript-box {
          background: rgba(168,85,247,0.05);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 16px;
          padding: 24px;
          font-size: 15px;
          line-height: 1.6;
          color: #d1d5db;
          white-space: pre-line;
        }
        input, select, textarea {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 12px 16px;
          border-radius: 12px;
          outline: none;
        }
        input:focus { border-color: #a855f7; }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}>Zilant Call Center</h1>
            <p style={{ color: '#6b7280' }}>Sponsorluk görüşme ve takip paneli</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Arayan:</span>
            <input 
              placeholder="İsminizi girin..." 
              value={callerName} 
              onChange={e => setCallerName(e.target.value)}
              style={{ width: '180px' }}
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <div className="glass-card stat-card">
            <div style={{ background: 'rgba(59,130,246,0.1)', padding: '12px', borderRadius: '16px' }}>
              <Users color="#3b82f6" />
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 900 }}>{stats.total}</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Toplam Firma</div>
            </div>
          </div>
          <div className="glass-card stat-card">
            <div style={{ background: 'rgba(168,85,247,0.1)', padding: '12px', borderRadius: '16px' }}>
              <Phone color="#a855f7" />
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 900 }}>{stats.called}</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Aranan</div>
            </div>
          </div>
          <div className="glass-card stat-card">
            <div style={{ background: 'rgba(34,197,94,0.1)', padding: '12px', borderRadius: '16px' }}>
              <Target color="#22c55e" />
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 900 }}>{stats.positive}</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Olumlu Dönüş</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: activeCompany ? '1fr 450px' : '1fr', gap: '30px', transition: 'all 0.4s ease' }}>
          {/* Main List */}
          <div className="glass-card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '20px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
                <input 
                  placeholder="Firma veya sektör ara..." 
                  style={{ width: '100%', paddingLeft: '44px' }} 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <select value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
                <option>Hepsi</option>
                {Object.keys(STATUS_COLORS).map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {filteredCompanies.map(c => (
                <div key={c.id} className="company-row" onClick={() => setActiveCompany(c)}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px' }}>{c.name}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>{c.sector}</div>
                  </div>
                  <div style={{ fontSize: '14px', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={14} /> {c.phone}
                  </div>
                  <div>
                    <span className="badge" style={{ background: `${STATUS_COLORS[c.status]}20`, color: STATUS_COLORS[c.status] }}>
                      {c.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280' }}>
                    {c.notes ? <FileText size={16} /> : null}
                  </div>
                  <ChevronRight size={18} color="#333" />
                </div>
              ))}
            </div>
          </div>

          {/* Call Detail View */}
          {activeCompany && (
            <div className="glass-card" style={{ padding: '32px', position: 'sticky', top: '40px', height: 'fit-content' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800 }}>Görüşme Detayı</h3>
                <button onClick={() => setActiveCompany(null)} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer' }}>Kapat</button>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#a855f7' }}>{activeCompany.name}</div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>{activeCompany.phone}</div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#6b7280', marginBottom: '12px', textTransform: 'uppercase' }}>Konuşma Metni (Transcript)</div>
                <div className="transcript-box">
                  {getTranscript(activeCompany)}
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#6b7280', marginBottom: '12px', textTransform: 'uppercase' }}>Görüşme Notları</div>
                <textarea 
                  rows="3" 
                  style={{ width: '100%', resize: 'none' }} 
                  placeholder="Görüşme detaylarını buraya yazın..."
                  value={activeCompany.notes}
                  onChange={e => updateStatus(activeCompany.id, activeCompany.status, e.target.value)}
                />
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#6b7280', marginBottom: '12px', textTransform: 'uppercase' }}>Durum Güncelle</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <button className="btn" style={{ background: '#3b82f620', color: '#3b82f6' }} onClick={() => updateStatus(activeCompany.id, "Arandı", activeCompany.notes)}>Arandı</button>
                  <button className="btn" style={{ background: '#a855f720', color: '#a855f7' }} onClick={() => updateStatus(activeCompany.id, "İlgileniyor", activeCompany.notes)}>İlgileniyor</button>
                  <button className="btn" style={{ background: '#22c55e20', color: '#22c55e' }} onClick={() => updateStatus(activeCompany.id, "Olumlu", activeCompany.notes)}>Olumlu</button>
                  <button className="btn" style={{ background: '#ef444420', color: '#ef4444' }} onClick={() => updateStatus(activeCompany.id, "Reddedildi", activeCompany.notes)}>Reddedildi</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallPanel;
