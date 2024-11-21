import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const app = express();

// Cargar la especificación OpenAPI
const swaggerDocument = JSON.parse(fs.readFileSync('./openapi.json', 'utf8'));

// Ruta de la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Endpoint de ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola, mundo!' });
});

// Puerto
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`Documentación en http://localhost:${PORT}/api-docs`);
});
