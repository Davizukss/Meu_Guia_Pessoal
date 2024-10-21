// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const clientRoutes = require('./routes/clientRoutes');
const organizerRoutes = require('./routes/organizerRoutes');
const pontoRoutes = require('./routes/pontoRoutes');

const { authenticateClient } = require('./models/clientModel');
const { authenticateOrganizer } = require('./models/organizerModel');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', clientRoutes);
app.use('/api', organizerRoutes);
app.use('/api', pontoRoutes);

app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
      // Try to login as an organizer first
      const isOrganizer = await authenticateOrganizer(email, senha);
      if (isOrganizer) {
          return res.json({ success: true, role: 'organizer' });
      }

      // Try to login as a client if not an organizer
      const isClient = await authenticateClient(email, senha);
      if (isClient) {
          return res.json({ success: true, role: 'client' });
      }

      // If neither login works, return an error
      res.json({ success: false, message: 'Invalid email or password' });
  } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});

const config = require('./config/dbconfig');
const sql = require('mssql');


// Dentro do app:
// const fetchPontosTuristicos = async () => {
//   try {
//       const response = await fetch(`http://localhost:3001/listar?max=${max}&min=${min}`);

//       if (response.ok) {
//           const data = await response.json(); // Parse JSON response
//           setPontosTuristicos(prev => [...prev, ...data]); // Append new data
//           setMax(max + 5); // Increase max for next fetch
//           setMin(min + 5); // Increase min for next fetch
//       } else {
//           console.error('Failed to fetch data:', response.statusText);
//       }
//   } catch (error) {
//       console.error('Erro ao buscar pontos turísticos:', error);
//   }
// };

app.get('/listar', async (req, res) => {
  try {
    await sql.connect(config);
    
    // Extracting the query parameters
    const max = parseInt(req.query.max, 10); // Parse as integer
    const min = parseInt(req.query.min, 10); // Parse as integer

    const request = new sql.Request();
    let query = 'SELECT * FROM Pontos_Turisticos WHERE ptour_id =< @max AND ptour_id >= @min';

    request.input('max', sql.BigInt, max);
    request.input('min', sql.BigInt, min);
  
  
      let result = await request.query(query);
      res.send(result.recordset);
  } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
  }finally {
    sql.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
