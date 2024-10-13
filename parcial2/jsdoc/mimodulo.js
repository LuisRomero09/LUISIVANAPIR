// mimodulo.js

/**
 * Suma dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de a y b.
 */
function sumar(a, b) {
    return a + b;
}

/**
 * Resta dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La resta de a y b.
 */
function restar(a, b) {
    return a - b;
}

// Exportar las funciones usando la sintaxis de CommonJS
module.exports = { sumar, restar };
