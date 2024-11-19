let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:8082';

//node server.js
//npx mocha testChaiHTTP.js


describe('Inserta un empleado: ', () => {
  it('debería insertar un empleado', (done) => {
    chai.request(url)
      .post('/empleado')  // Ruta para insertar un empleado
      .send({
        nombre: "Enrique", 
        apPaterno: "Pena", 
        apMaterno: "Nieto", 
        edad: 50, 
        sueldo: 5000
      })
      .end((err, res) => {
        expect(res).to.have.status(200);  // Verificar que el código de estado es 200
        expect(res.text).to.be.a('string');  // Verificar que la respuesta es de tipo string
        done();  // Finalizar la prueba
      });
  });
});
