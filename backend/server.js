const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // This allows your frontend to send requests
app.use(express.json());

const routes = require('./routes/index');
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
