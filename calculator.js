const calculator = {
  add: (a,b) => {
    if(typeof(a) == "number" && typeof(b) == "number"){
      return a + b
    }else {
      throw new TypeError("Please add number")
    }
  },
  subtract: (a,b) =>{
      if(typeof(a) == "number" && typeof(b) == "number"){
        return a - b
      }else {
        throw new TypeError("Please add number")
      }
  },
  devide: (a,b) => {
    if(typeof(a) == "number" && typeof(b) == "number"){
      return a / b
    }else {
      throw new TypeError("Please add number")
    }
  },
  multiply: (a,b) =>{
    if(typeof(a) == "number" && typeof(b) == "number"){
      return a * b
    }else {
      throw new TypeError("Please add number")
    }
},
}

module.exports = calculator