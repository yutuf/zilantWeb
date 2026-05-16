import { sql } from '@vercel/postgres';
import { readFileSync } from 'fs';
import path from 'path';

export default async function handler(req, res) {
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
    await sql`
      CREATE TABLE IF NOT EXISTS sponsorship_targets (
        id SERIAL PRIMARY KEY,
        external_id INTEGER UNIQUE,
        name TEXT,
        email TEXT,
        sector TEXT,
        phone TEXT,
        status TEXT,
        notes TEXT
      );
    `;

    // ZORLA GÜNCELLEME: Yanlış dosya yüklendiği için tablodaki her şeyi SİLİYORUZ.
    await sql`DELETE FROM sponsorship_targets;`;
    
    const filePath = path.join(process.cwd(), 'companies_with_phones.json');
    const companies = JSON.parse(readFileSync(filePath, 'utf8'));
    
    for (const c of companies) {
      await sql`
        INSERT INTO sponsorship_targets (external_id, name, email, sector, phone, status, notes)
        VALUES (${c.id}, ${c.name}, ${c.email}, ${c.sector}, ${c.phone}, ${c.status}, ${c.notes})
        ON CONFLICT (external_id) DO NOTHING;
      `;
    }

    if (req.method === 'GET') {
      const { rows } = await sql`SELECT * FROM sponsorship_targets ORDER BY external_id ASC;`;
      const formattedRows = rows.map(r => ({ ...r, id: r.external_id }));
      return res.status(200).json(formattedRows);
    }

    if (req.method === 'PUT') {
      const { id, status, notes } = req.body;
      await sql`
        UPDATE sponsorship_targets 
        SET status = ${status}, notes = ${notes} 
        WHERE external_id = ${id};
      `;
      return res.status(200).json({ message: 'Başarıyla güncellendi' });
    }

  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
