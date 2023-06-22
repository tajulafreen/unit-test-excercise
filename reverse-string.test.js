const reverseString = require('./reverse-string.js')


test('should return string', () => {
  const value = 'afreen'
  const result = reverseString(value)
 
  expect(result).toBe('neerfa')
})