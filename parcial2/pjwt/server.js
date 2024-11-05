// server.js
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!'); // Respuesta simple
});

// Ruta para iniciar sesión y obtener un token
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aquí deberías verificar el usuario y la contraseña en tu base de datos
    // Este es un ejemplo simple, deberías implementar una verificación real
    if (username === 'usuario' && password === 'contraseña') {
        const user = { username }; // Crear un objeto de usuario

        // Generar un token
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        console.log('No se proporcionó token');
        return res.sendStatus(401); // No autorizado
    }

    const actualToken = token.split(' ')[1]; // Obtener el token sin "Bearer"

    jwt.verify(actualToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('Error de verificación del token:', err.message);
            return res.sendStatus(403); // Prohibido
        }
        req.user = user; // Guardar la información del usuario en el request
        next(); // Pasar al siguiente middleware o ruta
    });
};

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Este es un contenido protegido', user: req.user });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
