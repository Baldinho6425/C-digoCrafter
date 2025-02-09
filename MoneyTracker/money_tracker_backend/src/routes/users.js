const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para listar usuários
router.get('/', (req, res) => {
    db.query('SELECT id, name, email FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        } else {
            res.json(results);
        }
    });
});

module.exports = router;
