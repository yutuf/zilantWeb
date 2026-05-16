const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

const jsonPath = path.join(__dirname, '..', 'companies_with_phones.json');
const companies = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS companies (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        sector TEXT,
        phone TEXT,
        status TEXT,
        notes TEXT
    )`);

    db.run("DELETE FROM companies"); // Clear existing data if any

    const stmt = db.prepare("INSERT INTO companies (id, name, email, sector, phone, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?)");
    for (const company of companies) {
        stmt.run(company.id, company.name, company.email, company.sector, company.phone, company.status, company.notes);
    }
    stmt.finalize();
});

db.close(() => {
    console.log("Database initialized and seeded with companies.");
});
