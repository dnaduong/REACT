const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    database: 'finalexam',
    user: 'root',
    password: '',
});

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = 'INSERT INTO users (`firstname`, `lastname`, `country`, `subject`) VALUES (?)';
    const values = [req.body.firstname, req.body.lastname, req.body.country, req.body.subject];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const msnv = req.body.firstname;
    const lastname = req.body.lastname;
    const ngaysinh = req.body.country;
    const phongban = req.body.subject;


    const sql = 'UPDATE users SET firstname = ?, lastname = ?, country = ?, subject = ? WHERE id = ?';

    db.query(sql, [firstname, lastname, country, subject, id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error updating user' });
        }
        return res.json(data);
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM users WHERE id = ?';

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error updating user' });
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log('Server is running port 8081');
});
