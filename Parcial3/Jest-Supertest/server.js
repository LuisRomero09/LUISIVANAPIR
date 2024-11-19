// server.js
//npx jest testEmpleado.test.js
const express = require('express');
const app = express();
const port = 8082;

app.use(express.json());

// Ruta para insertar un empleado
app.post('/empleado', (req, res) => {
  const { nombre, apPaterno, apMaterno, edad, sueldo } = req.body;

  

  console.log({ nombre, apPaterno, apMaterno, edad, sueldo });
  res.status(200).send('Empleado agregado correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;  
