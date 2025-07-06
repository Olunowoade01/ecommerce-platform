const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => res.json([{ id: 1, name: "Sample Product" }]));

app.listen(3001, () => console.log('API running on port 3001'));