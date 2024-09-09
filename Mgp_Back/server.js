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
    
    
    const query = `INSERT INTO Turista (usu_nome, usu_senha, usu_email, usu_tour_cpf) VALUES (@nome, @email, @senha, @cpf)`;
    
    
    const request = new sql.Request();
    
    
    request.input('nome', sql.VarChar, nome);
    request.input('email', sql.VarChar, email);
    request.input('senha', sql.VarChar, senha);
    request.input('cpf', sql.Char, cpf);
    
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
  const { email, senha } = req.body;
  let sucesso = true;
  if ( !email|| !senha) {
    return res.status(400).send('Please provide both name and email.');
  }
  try {
    
    await sql.connect(config);
    const query = 'select * from Organizador where email = @email and senha= @senha';
    const request = new sql.Request();
    
    
    request.input('email', sql.VarChar, email);
    request.input('senha', sql.VarChar, senha);
    
   
    let result = await request.query(query);

    if (result.recordset.length === 0) {
      query = 'SELECT * FROM Turista WHERE email = @email AND senha = @senha';

      request.input('email', sql.VarChar, email);
      request.input('senha', sql.VarChar, senha);

      result = await request.query(query);
      if (result.recordset.length === 0) {
       sucesso = false;
      }
    }

    if(sucesso == true){
      await request.query(query);
      res.status(200).send('Cadastro com sucesso');
    }else{ 
      return res.status(401).send('Email ou senha incorretos.');
    }

  } catch (err) {
    console.error('Erro no Banco de Dados:', err);
    res.status(500).json({ message: 'Erro', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
