const request = require('supertest');
const app = require('./server');  // Importamos la app para usarla en las pruebas

describe('Inserta un empleado:', () => {
  it('debería insertar un empleado', async () => {
    const res = await request(app)
      .post('/empleado')
      .send({
        nombre: 'Enrique',
        apPaterno: 'Pena',
        apMaterno: 'Nieto',
        edad: 50,
        sueldo: 5000
      });

    expect(res.status).toBe(200);  // Verificar que el código de estado es 200
    expect(res.text).toBe('Empleado agregado correctamente');  // Verificar el mensaje de la respuesta
  });
});
