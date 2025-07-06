const express = require('express');
const app = express();
app.use(express.json());

app.get('/products', (req, res) => res.json([{ id: 1, name: "Sample Product" }]));
app.listen(3001, () => console.log('API running on port 3001'));