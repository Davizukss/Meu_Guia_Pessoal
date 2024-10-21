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

module.exports = router;
