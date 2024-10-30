const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname)); // Apunta a la carpeta actual (template)

// Servir archivos estáticos
app.use(express.static(path.join(__dirname))); // También apuntando a la carpeta actual

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Página de Inicio', message: '¡Hola, mundo!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
