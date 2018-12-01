const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('*', (req, res) => res.sendfile(path.join(__dirname +'/public/index.html')));

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}`)
)
