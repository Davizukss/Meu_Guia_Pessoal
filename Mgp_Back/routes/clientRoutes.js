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

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).send('Por favor, forneça email e senha.');
  }

  try {
    const success = await authenticateClient(email, senha);
    if (success) {
      res.status(200).send('Login com sucesso');
    } else {
      res.status(401).send('Email ou senha incorretos.');
    }
  } catch (err) {
    console.error('Erro!', err);
    res.status(500).json({ message: 'Erro', error: err.message });
  }
});

module.exports = router;
