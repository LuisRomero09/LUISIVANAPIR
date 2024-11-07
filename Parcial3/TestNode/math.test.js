// math.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum, subtract } from './math.js';

// Prueba para la función sum
test('sum function', (t) => {
  const result = sum(3, 5);
  assert.strictEqual(result, 8, '3 + 5 debería ser 8');
});

// Prueba para la función subtract
test('subtract function', (t) => {
  const result = subtract(10, 4);
  assert.strictEqual(result, 6, '10 - 4 debería ser 6');
});
