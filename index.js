const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (_, res) =>
  res.sendFile('brackeys-platformer.html', { root: path.join(__dirname, 'dist') })
);

app.listen(3000, () => console.log('http://localhost:3000'));