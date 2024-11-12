// server.js
import express from 'express';
import { sum, subtract } from './math.js';

const app = express();
const port = 3000;

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  const result = sum(Number(a), Number(b));
  res.send(`La suma de ${a} y ${b} es: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = subtract(Number(a), Number(b));
  res.send(`La resta de ${a} y ${b} es: ${result}`);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
