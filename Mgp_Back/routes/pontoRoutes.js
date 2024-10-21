
const express = require('express');
const router = express.Router();
const { addLocal, getPontosTuristicos } = require('../models/pontoModel');

router.post('/add-local', async (req, res) => {
  const { desc, nome, tipo, tipo_preco, nota_total, usu_id } = req.body;

  try {
    await addLocal(desc, nome, tipo, tipo_preco, nota_total, usu_id);
    res.status(200).send('Local adicionado com sucesso!');
  } catch (err) {
    console.error('Erro!', err);
    res.status(500).send(`Detalhes: ${err.message}`);
  }
  
});


module.exports = router;
