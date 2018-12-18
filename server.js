const express = require('express');
const app = express();
const path = require('path');
const products = require('./products')

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));


app.get('/*goods', (req, res) => res.sendFile(path.join(__dirname +'/public/thegoods.html')));
app.get('/products', (req, res) => res.json(products));
app.get('*', (req, res) => res.sendFile(path.join(__dirname +'/public/index.html')));

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}`)
)
