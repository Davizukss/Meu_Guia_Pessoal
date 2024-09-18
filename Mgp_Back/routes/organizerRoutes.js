// routes/organizerRoutes.js
const express = require('express');
const router = express.Router();
const { addOrganizer, authenticateOrganizer } = require('../models/organizerModel');

router.post('/add-org', async (req, res) => {
  const { nome, cnpj, email, senha } = req.body;

  try {
    await addOrganizer(nome, cnpj, email, senha);
    res.status(200).send('Organizador adicionado com sucesso!');
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
    const success = await authenticateOrganizer(email, senha);
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
