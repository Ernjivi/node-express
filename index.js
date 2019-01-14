const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.post('/', (req, res) => {
  res.send('Es una petición POST');
});

app.put('/', (req, res) => {
  res.send('Es una petición PUT');
});

app.delete('/', (req, res) => {
  res.send('Es una petición DELETE');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
