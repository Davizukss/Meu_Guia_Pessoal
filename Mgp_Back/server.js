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
  database: 'MEUGUIAPESSOAL',
  options: {
    encrypt: false, 
  },
};




app.post('/add-org', async (req, res) => {
  const { nome, cnpj, email, senha } = req.body;

  try {
    
    await sql.connect(config);
    
    
    const query = `INSERT INTO Organizador (org_nome, org_senha, org_email, org_cnpj) VALUES (@nome, @senha, @email, @cnpj )`;
    
    
    const request = new sql.Request();
    
    
    request.input('nome', sql.VarChar, nome);
    request.input('senha', sql.VarChar, senha);
    request.input('email', sql.VarChar, email);
    request.input('cnpj', sql.Char, cnpj);

    
    await request.query(query);

    res.status(200).send('Organizador adicionado com sucesso!');
  } catch (err) {
    console.error('Erro!', err);
    res.status(500).send(`Detalhes: ${err.message}`);
  } finally {
    
    sql.close();
  }
});

app.post('/add-cli', async (req, res) => {
  const { nome, cpf, email, senha } = req.body;

  try {
    
    await sql.connect(config);
    
    
    const query = `INSERT INTO Turista (usu_nome, usu_senha, usu_email, usu_tour_cpf) VALUES (@nome, @senha, @email, @cpf )`;
    
    
    const request = new sql.Request();
    
    
    request.input('nome', sql.VarChar, nome);
    request.input('senha', sql.VarChar, senha);
    request.input('email', sql.VarChar, email);
    request.input('cpf', sql.Char, cnpj);
    
    await request.query(query);

    res.status(200).send('Organizador adicionado com sucesso!');
  } catch (err) {
    console.error('Erro!', err);
    res.status(500).send(`Detalhes: ${err.message}`);
  } finally {
    
    sql.close();
  }
});

app.get('/login', async (req, res) => {
  const { email, senha } = req.query; // Use req.query for GET requests
  let sucesso = true;

  if (!email || !senha) {
      return res.status(400).send('Please provide both email and password.');
  }

  try {
      await sql.connect(config);
      let query = 'SELECT * FROM Organizador WHERE org_email = @email AND org_senha = @senha';
      let request = new sql.Request();
      
      request.input('email', sql.VarChar, email);
      request.input('senha', sql.VarChar, senha);
      
      let result = await request.query(query);

      if (result.recordset.length === 0) {
          query = 'SELECT * FROM Turista WHERE usu_email = @email AND usu_senha = @senha';
          request = new sql.Request(); // Create a new request for the second query
          request.input('email', sql.VarChar, email);
          request.input('senha', sql.VarChar, senha);

          result = await request.query(query);
          if (result.recordset.length === 0) {
              sucesso = false;
          }
      }

      if (sucesso) {
          res.status(200).json({ success: true });
      } else {
          res.status(401).json({ success: false, message: 'Incorrect email or password.' });
      }
  } catch (err) {
      console.error('Database error:', err);
      res.status(500).json({ message: 'Error', error: err.message });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
