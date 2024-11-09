// math.test.js
import { test } from 'node:test';
import { expect } from 'chai';
import { sum, subtract } from './math.js';

// Prueba para la función sum
test('sum function', (t) => {
  const result = sum(3, 5);
  expect(result).to.equal(8, '3 + 5 debería ser 8');
});

// Prueba para la función subtract
test('subtract function', (t) => {
  const result = subtract(10, 4);
  expect(result).to.equal(6, '10 - 4 debería ser 6');
});
