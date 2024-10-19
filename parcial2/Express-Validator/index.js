const express = require('express');
const { query, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

// Ruta que valida y sanitiza el parámetro 'person'
app.get('/hello', 
  query('person')
    .trim() // Elimina espacios en blanco al inicio y al final
    .notEmpty().withMessage('El campo "person" no debe estar vacío.') // Verifica que no esté vacío
    .isAlpha().withMessage('El campo "person" solo debe contener letras.') // Verifica que contenga solo letras
    .escape(), // Sanitiza el campo
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.query.person}!`);
    }
    res.status(400).send({ errors: result.array() });
});

// Inicializa el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
