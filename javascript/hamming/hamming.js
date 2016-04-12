var compute = function (strandOne, strandTwo) {
  return strandOne.split('')
    .reduce(function (hammingDistance, currentNucleotide, index) {
      if (!strandTwo[index]) {
        throw new Error('DNA strands must be of equal length.')
      } else if (currentNucleotide !== strandTwo[index]) {
        return hammingDistance + 1
      } else {
        return hammingDistance
      }
    }, 0)
}

module.exports = compute
