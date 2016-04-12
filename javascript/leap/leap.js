var isLeapYear = function(year) {
  var isDivisibleBy = function(divisor) {
    return year % divisor === 0;
  };
  return isDivisibleBy(4) && !isDivisibleBy(100) || isDivisibleBy(400);
};

module.exports = isLeapYear;
