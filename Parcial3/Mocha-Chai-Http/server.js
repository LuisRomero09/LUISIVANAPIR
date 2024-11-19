const express = require('express');
const app = express();
const port = 8082;

app.use(express.json());  // Middleware para parsear el cuerpo de la solicitud

// Definir la ruta para insertar un empleado
app.post('/empleado', (req, res) => {
  const { nombre, apPaterno, apMaterno, edad, sueldo } = req.body;
  
  // Aquí iría la lógica para insertar el empleado en la base de datos (o realizar alguna otra acción)
  console.log({ nombre, apPaterno, apMaterno, edad, sueldo });

  res.status(200).send('Empleado agregado correctamente');  // Responder con un mensaje de éxito
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
