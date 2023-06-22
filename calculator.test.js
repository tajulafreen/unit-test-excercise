const calculator = require('./calculator.js')
  let value1 = 2;
  let value2 = 2;
  let stringvalue1= 'hi';
  let stringvalue2= 'bye';
  let stringEmpty1= '';
  let stringEmpty2= '';
beforeEach(() =>{
   value1;
   value2;
   stringvalue1 
   stringvalue2
   stringEmpty1
   stringEmpty2 
})

// ADD METHOD
describe('add()', () => {
  // TEST 1
  test('should return sum of 2 numbers', () => {
    const result = calculator.add(value1, value2)
    expect(result).toBe(4) 
  })
  // TEST 2
  test('should throw error if we pass the string', () => {
    const result = ()=> calculator.add(stringvalue1, stringvalue2)
    expect(result).toThrow("Please add number") 
  })
  // TEST 3 
  test('should throw error if we pass empthy string', () => {
    const result = ()=> calculator.add(stringEmpty1, stringEmpty2)
    expect(result).toThrow("Please add number") 
  })
})

// SUBTRACT METHOD
describe('subtract()', () => {
  //TEST 1
  test('should return sabtract of 2 numbers', () => {
    const result = calculator.subtract(value1, value2)
    expect(result).toBe(0) 
  })
  // TEST 2
  test('should throw error if we pass the string', () => {
    const result = ()=> calculator.subtract(stringvalue1, stringvalue2)
    expect(result).toThrow("Please add number") 
  })
   // TEST 3 
   test('should throw error if we pass empthy string', () => {
    const result = ()=> calculator.subtract(stringEmpty1, stringEmpty2)
    expect(result).toThrow("Please add number") 
  })
})

// DEVIDE METHOD
describe('devide()', () => {
  //TEST 1
  test('should return devide of 2 numbers', () => {
    const result = calculator.devide(value1, value2)
    expect(result).toBe(1) 
  })
  // TEST 2
  test('should throw error if we pass the string', () => {
    const result = ()=> calculator.devide(stringvalue1, stringvalue2)
    expect(result).toThrow("Please add number") 
  })
   // TEST 3 
   test('should throw error if we pass empthy string', () => {
    const result = ()=> calculator.devide(stringEmpty1, stringEmpty2)
    expect(result).toThrow("Please add number") 
  })
})

// MULTIPLY METHOD
describe('multiply()', () => {
  // TEST 1
  test('should return multiply of 2 numbers', () => {
    const result = calculator.multiply(value1, value2)
    expect(result).toBe(4) 
  })
  // TEST 2
  test('should throw error if we pass the string', () => {
    const result = ()=> calculator.multiply(stringvalue1, stringvalue2)
    expect(result).toThrow("Please add number") 
  })
   // TEST 3 
   test('should throw error if we pass empthy string', () => {
    const result = ()=> calculator.multiply(stringEmpty1, stringEmpty2)
    expect(result).toThrow("Please add number") 
  })
})