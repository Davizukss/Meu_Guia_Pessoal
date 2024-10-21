// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const { addClient, authenticateClient } = require('../models/clientModel');

router.post('/add-cli', async (req, res) => {
  const { nome, cpf, email, senha } = req.body;

  try {
    await addClient(nome, cpf, email, senha);
    res.status(200).send('Cliente adicionado com sucesso!');
  } catch (err) {
    console.error('Erro!', err);
    res.status(500).send(`Detalhes: ${err.message}`);
  }
});


module.exports = router;
