  function capitalize (string) {
  const firstLetterCapital = string[0].toUpperCase()
  const cuttingString = string.slice(1,string.length)
  const result = firstLetterCapital.concat(cuttingString)
  return result
}

module.exports = capitalize;