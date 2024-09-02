const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const config = {
  user: 'sa', 
  password:'123456',
  server: 'localhost',
  database: 'teste01',
  options: {
    encrypt: false, 
  },
};

//CODIGO

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
