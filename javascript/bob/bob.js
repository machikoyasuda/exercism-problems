var Bob = function() {
  this.hey = function(phrase) {
    if (isSilent(phrase)) return "Fine. Be that way!";
    if (isShouting(phrase)) return "Whoa, chill out!";
    if (isAsking(phrase)) return "Sure.";
    return "Whatever.";
  };

  var isSilent = function(phrase) {
    return !phrase.trim();
  };

  var isShouting = function(phrase) {
    return phrase.toUpperCase() === phrase && hasLetters(phrase);
  };

  var isAsking = function(phrase) {
    return String(phrase).slice(-1) === "?";
  };

  var hasLetters = function(phrase) {
    return /[A-Z]/.test(phrase.toUpperCase());
  };
};

module.exports = Bob;
