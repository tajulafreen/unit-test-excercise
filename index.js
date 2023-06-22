 function stringLength(string) {
  if(string.length > 1 && string.length < 10) {
    return string.length;
  } else {
  throw new Error("String length must be less than 10")
  }
}

module.exports = stringLength;