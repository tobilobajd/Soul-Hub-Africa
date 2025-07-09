const express = require('express');
const cors = require('cors');
const routes = require('./routes/index'); // ✅ Import the route file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // ✅ Enable CORS
app.use(express.json()); // ✅ Parse JSON

app.use('/', routes); // ✅ Mount the routes

app.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
