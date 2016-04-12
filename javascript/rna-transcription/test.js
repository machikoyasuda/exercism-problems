Calculator = {};

(function() {
  var prettyResultText = 'The answer is: ';

  var printResult = function(answer) {
    console.log(answer);
  }

  Calculator.arithmetic = function() {
    return {
      add: function(addendOne, addendTwo) {
        var sum = addendOne + addendTwo;
        printResult(prettyResultText + sum);
      }
    }
  };

  Calculator.calculus = function() {
    return {
      derive: function(base, exponent) {
        printResult(prettyResultText + exponent + ' * ' + base);
      }
    }
  };
})();

====

module.exports = function() {
  return {
    toRna: function(dna){
      var rnaComplement =  {
        G : "C",
        C : "G",
        T : "A",
        A : "U"
      };
      return dna.split("").reduce(function(rna, nucleotide){
        return rna + rnaComplement[nucleotide]
      }, "");
    },
    toDna: function(rna){
      var dnaComplement = {
        G : "C",
        C : "G",
        U : "A",
        A : "T"
      };
      return rna.split("").reduce(function(dna, nucleotide){
        return dna + dnaComplement[nucleotide]
      }, "");
    }
  }
};
