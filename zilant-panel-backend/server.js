const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

app.get('/', (req, res) => {
    res.send('Zilant Call Panel API is running. Use /api/companies to fetch data.');
});

// Get all companies
app.get('/api/companies', (req, res) => {
    db.all("SELECT * FROM companies", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Update a company status/notes
app.put('/api/companies/:id', (req, res) => {
    const { status, notes } = req.body;
    const { id } = req.params;
    
    db.run(
        "UPDATE companies SET status = ?, notes = ? WHERE id = ?",
        [status, notes, id],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: "Updated successfully", changes: this.changes });
        }
    );
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
