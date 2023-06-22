const capitalize = require('./capitalize')


test('should return text with first letter capitalize', () => {
  const value = 'hello';
  const result = capitalize(value)
  expect(result).toBe('Hello')
})