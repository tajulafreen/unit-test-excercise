const reverseString = require('./reverse-string.js')


test('should return string', () => {
  const value = 'mahdi'
  const result = reverseString(value)
 
  expect(result).toBe('idham')
})