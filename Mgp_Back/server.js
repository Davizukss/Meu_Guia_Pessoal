// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const organizerRoutes = require('./routes/organizerRoutes');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', clientRoutes);
app.use('/api', organizerRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
