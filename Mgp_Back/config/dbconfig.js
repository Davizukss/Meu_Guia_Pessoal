// config/dbconfig.js
const sql = require('mssql');

const config = {
  user: 'sa',
  password: '*123456HAS*',
  server: 'localhost',
  database: 'MEUGUIAPESSOAL',
  options: {
    encrypt: false,
  },
};

module.exports = config;
