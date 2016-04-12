var words = function(sentence) {
  return sentence.match(/[^\s]+/g)
    .reduce(function(wordCount, word, index) {
      if (word in wordCount) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
      return wordCount;
  }, Object.create(null));
};

module.exports = words;
