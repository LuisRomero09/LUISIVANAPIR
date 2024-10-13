/**
 * Clase que representa una persona.
 */
class Persona {
    /**
     * Crea una nueva persona.
     * @param {string} nombre - El nombre de la persona.
     * @param {number} edad - La edad de la persona.
     */
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    /**
     * Devuelve la descripción de la persona.
     * @returns {string} La descripción de la persona.
     */
    describir() {
      return `${this.nombre} tiene ${this.edad} años.`;
    }
  }
  