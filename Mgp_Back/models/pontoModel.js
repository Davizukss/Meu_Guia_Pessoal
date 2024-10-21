// models/pontoModel.js
const sql = require('mssql');
const config = require('../config/dbconfig');

const addLocal = async (desc, nome, tipo, tipo_preco, nota_total, usu_id) => {
  try {
    await sql.connect(config);
    const query = `INSERT INTO Pontos_Turisticos (ptour_desc, ptour_nome, ptour_tipo, ptour_tipo_preco, ptour_nota_total, usu_id) VALUES  (@desc, @nome, @tipo, @tipo_preco, @nota_total, @usu_id)`;
    const request = new sql.Request();
    request.input('desc', sql.VarChar, desc);
    request.input('nome', sql.VarChar, nome);
    request.input('tipo', sql.VarChar, tipo);
    request.input('tipo_preco', sql.Char, tipo_preco);
    request.input('nota_total', sql.VarChar, nota_total);

    request.input('usu_id', sql.Char, usu_id);
    
    await request.query(query);
  } catch (err) {
    throw new Error(`Error adding local: ${err.message}`);
  } finally {
    sql.close();
  }
};


module.exports = {
  addLocal,
  getPontosTuristicos,
};
