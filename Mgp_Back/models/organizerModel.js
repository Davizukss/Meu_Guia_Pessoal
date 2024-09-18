// models/organizerModel.js
const sql = require('mssql');
const config = require('../config/dbconfig');

const addOrganizer = async (nome, cnpj, email, senha) => {
  try {
    await sql.connect(config);
    const query = `INSERT INTO Organizador (org_nome, org_senha, org_email, org_cnpj) VALUES (@nome, @senha, @email, @cnpj)`;
    const request = new sql.Request();
    request.input('nome', sql.VarChar, nome);
    request.input('senha', sql.VarChar, senha);
    request.input('email', sql.VarChar, email);
    request.input('cnpj', sql.Char, cnpj);
    await request.query(query);
  } catch (err) {
    throw new Error(`Error adding organizer: ${err.message}`);
  } finally {
    sql.close();
  }
};

const authenticateOrganizer = async (email, senha) => {
  try {
    await sql.connect(config);
    let query = 'SELECT * FROM Organizador WHERE org_email = @email AND org_senha = @senha';
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);
    request.input('senha', sql.VarChar, senha);
    let result = await request.query(query);
    return result.recordset.length > 0;
  } catch (err) {
    throw new Error(`Error authenticating organizer: ${err.message}`);
  } finally {
    sql.close();
  }
};

module.exports = {
  addOrganizer,
  authenticateOrganizer,
};
