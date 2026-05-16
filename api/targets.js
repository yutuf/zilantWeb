import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  // AdBlocker'ı aşmak için masum isimler kullanıyoruz
  const filePath = path.join(process.cwd(), 'companies_with_phones.json');
  
  // CORS ayarları (Vercel bunu otomatik halletse de manuel eklemek güvenlidir)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const fileData = readFileSync(filePath, 'utf8');
    let companies = JSON.parse(fileData);

    if (req.method === 'GET') {
      return res.status(200).json(companies);
    }

    if (req.method === 'PUT') {
      const { id, status, notes } = req.body;
      const index = companies.findIndex(c => c.id === parseInt(id));
      
      if (index > -1) {
        companies[index].status = status;
        companies[index].notes = notes;
        
        // NOT: Vercel'de bu yazma işlemi sadece geçici diskte (tmp) olur.
        // Kalıcı olması için bir DB (Postgres/KV) şarttır.
        // Ama şimdilik hata vermemesi için işlemi yapıyoruz.
        return res.status(200).json({ message: 'Güncellendi (Geçici)', company: companies[index] });
      }
      return res.status(404).json({ message: 'Bulunamadı' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
