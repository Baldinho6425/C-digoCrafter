const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 🔹 Listar todas as transações do usuário
router.get('/:user_id', (req, res) => {
    const { user_id } = req.params;
    db.query('SELECT * FROM transactions WHERE user_id = ?', [user_id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao buscar transações' });
        } else {
            res.json(results);
        }
    });
});

// 🔹 Criar uma nova transação
router.post('/', (req, res) => {
    const { user_id, category_id, amount, type, description, transaction_date } = req.body;

    if (!user_id || !amount || !type || !transaction_date) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
    }

    const query = 'INSERT INTO transactions (user_id, category_id, amount, type, description, transaction_date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [user_id, category_id, amount, type, description, transaction_date], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao adicionar transação' });
        } else {
            res.json({ message: 'Transação adicionada com sucesso!', id: result.insertId });
        }
    });
});

// 🔹 Atualizar uma transação
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { category_id, amount, type, description, transaction_date } = req.body;

    const query = 'UPDATE transactions SET category_id = ?, amount = ?, type = ?, description = ?, transaction_date = ? WHERE id = ?';
    db.query(query, [category_id, amount, type, description, transaction_date, id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao atualizar transação' });
        } else {
            res.json({ message: 'Transação atualizada com sucesso!' });
        }
    });
});

// 🔹 Excluir uma transação
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM transactions WHERE id = ?', [id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao excluir transação' });
        } else {
            res.json({ message: 'Transação excluída com sucesso!' });
        }
    });
});

module.exports = router;
