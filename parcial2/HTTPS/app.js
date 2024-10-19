const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { query, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

// Generar clave privada y certificado autofirmado si no existen
const keyPath = path.join(__dirname, 'key.pem');
const certPath = path.join(__dirname, 'cert.pem');

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  // Generar clave y certificado si no existen
  const { execSync } = require('child_process');
  execSync(`openssl req -nodes -new -x509 -keyout ${keyPath} -out ${certPath} -days 365 -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"`);
}

// Leer los archivos de clave privada y certificado
const privateKey = fs.readFileSync(keyPath, 'utf8');
const certificate = fs.readFileSync(certPath, 'utf8');

// Crear las credenciales
const credentials = { key: privateKey, cert: certificate };

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

// Crear el servidor HTTPS
const httpsServer = https.createServer(credentials, app);

// Escuchar en el puerto 8443
httpsServer.listen(8443, () => {
  console.log('Servidor HTTPS ejecutándose en el puerto 8443');
});
