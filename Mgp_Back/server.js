// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const organizerRoutes = require('./routes/organizerRoutes');

const { authenticateClient } = require('./models/clientModel');
const { authenticateOrganizer } = require('./models/organizerModel');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', clientRoutes);
app.use('/api', organizerRoutes);


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


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
