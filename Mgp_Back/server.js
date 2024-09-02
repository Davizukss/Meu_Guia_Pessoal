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




app.post('/add-org', async (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email|| !senha) {
    return res.status(400).send('Please provide both name and email.');
  }

  try {
    
    await sql.connect(config);
    
    
    const query = `INSERT INTO Organizador (nome, email, senha) VALUES (@nome, @email, @senha)`;
    
    
    const request = new sql.Request();
    
    
    request.input('nome', sql.VarChar, nome);
    request.input('email', sql.VarChar, email);
    request.input('senha', sql.VarChar, senha);
    
    await request.query(query);

    res.status(200).send('Org added successfully.');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send(`Failed to add client. Error details: ${err.message}`);
  } finally {
    
    sql.close();
  }
});

app.get('/login', async (req, res) => {
  const { email, senha } = req.body;
  if ( !email|| !senha) {
    return res.status(400).send('Please provide both name and email.');
  }
  try {
    
    await sql.connect(config);

    const query = 'select * from Organizador where email = @email and senha= @senha';
    
    const request = new sql.Request();
    
    
    request.input('email', sql.VarChar, email);
    request.input('senha', sql.VarChar, senha);
    
    await request.query(query);

    res.status(200).send('Org added successfully.');
    
    await request.query(query);
    
    res.status(200).send('login ok');
  } catch (err) {
    
    console.error('Database error:', err);
    res.status(500).json({ message: 'Error fetching clients', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
