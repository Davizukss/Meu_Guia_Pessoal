// models/clientModel.js
const sql = require('mssql');
const config = require('../config/dbconfig');

const addClient = async (nome, cpf, email, senha) => {
  try {
    await sql.connect(config);
    const query = `INSERT INTO Turista (usu_nome, usu_senha, usu_email, usu_tour_cpf) VALUES (@nome, @senha, @email, @cpf)`;
    const request = new sql.Request();
    request.input('nome', sql.VarChar, nome);
    request.input('senha', sql.VarChar, senha);
    request.input('email', sql.VarChar, email);
    request.input('cpf', sql.Char, cpf);
    await request.query(query);
  } catch (err) {
    throw new Error(`Error adding client: ${err.message}`);
  } finally {
    sql.close();
  }
};

const authenticateClient = async (email, senha) => {
  try {
    await sql.connect(config);
    let query = 'SELECT * FROM Turista WHERE usu_email = @email AND usu_senha = @senha';
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);
    request.input('senha', sql.VarChar, senha);
    let result = await request.query(query);
    return result.recordset.length > 0;
  } catch (err) {
    throw new Error(`Error authenticating client: ${err.message}`);
  } finally {
    sql.close();
  }
};

module.exports = {
  addClient,
  authenticateClient,
};
