const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./config/db');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API do Money Tracker funcionando!');
});

// Importar as rotas
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

const transactionRoutes = require('./routes/transactions');
app.use('/api/transactions', transactionRoutes);
