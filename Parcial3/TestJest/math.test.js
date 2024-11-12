const { sum, subtract } = require('./math');

test('sum function', () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});

test('subtract function', () => {
  const result = subtract(10, 4);
  expect(result).toBe(6);
});
