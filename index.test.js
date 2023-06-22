// const { test } = require('node:test');
const stringLength = require('./index.js')

test('should give the length of string', () => {
  const value = 'afreen';
  expect(stringLength(value)).toBe(6);
});

test('should throw error if number is greater than 10', () => {
  const value = 'tajulafreen13456';
  const result = () => stringLength(value)
  expect(result).toThrow("String length must be less than 10")
})

test('should throw error if number is greater than 10', () => {
  const value = '';
  const result = () => stringLength(value)
  expect(result).toThrow("String length must be less than 10")
})
test('should throw error if number is greater than 10', () => {
  const value = 124;
  const result = () => stringLength(value)
  expect(result).toThrow("String length must be less than 10")
})