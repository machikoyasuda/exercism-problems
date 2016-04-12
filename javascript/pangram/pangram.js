'use strict';

function Pangram(sentence){
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function isPangram() {
  const alphabetLength = 26;
  const onlyLetters = /[a-z]/g;
  let letters = this.sentence.toLowerCase().match(onlyLetters);
  if (letters === null) {
    return false;
  } else {
    let unique_letters = {};
    for (let letter of letters)
      unique_letters[letter] = letter;
    return Object.keys(unique_letters).length === alphabetLength;
  }
}

module.exports = Pangram;
