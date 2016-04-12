'use strict';

function PhoneNumber(userInput){
  this.userInput = userInput;

  // remove everything but digits from user input
  this.cleaned = function() {
    return userInput.match(/\d+/g).join('');
  }
  this.number = function() {
    var cleanNumber = this.cleaned();

    if (cleanNumber.length <=9) return '0000000000';
    else if (cleanNumber.length==11 && cleanNumber[0]=='1') {
      var longCleaned = cleanNumber.split('')
      longCleaned.shift();
      return longCleaned.join('');
    }
    else if (cleanNumber.length==11 && cleanNumber[0]!='1') {
      return '0000000000';
    }
    else return cleanNumber;
  }

  this.areaCode = function() {
    var cleanNumber = this.cleaned();

    var arr = cleanNumber.split('');
    var areaC = [];
    for (var i=0; i<3; i++) {
      areaC.push(arr.shift());
    }
    return areaC.join('');
  }
};

PhoneNumber.prototype.toString = function() {
  var cleanNumber = this.cleaned();
  var cleanN = cleanNumber.split('');
  var firstNums = this.areaCode();
  var midNums = cleanN.splice(3,3).join('');
  var endNums = cleanN.splice(3,4).join('');
  return '(' + firstNums + ') ' + midNums + "-" + endNums;
}

module.exports = PhoneNumber;
