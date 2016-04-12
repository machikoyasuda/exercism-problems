module.exports = function() {
  var rnaComplement = { G : "C", C : "G", T : "A", A : "U"},
      dnaComplement = { G : "C", C : "G", U : "A", A : "T"},
      transcribeNucleotides = function(strand, transcribeType){
        return strand.replace(/./g, function(nucleotide) {
          return transcribeType[nucleotide]
        });
      }
  return {
    toRna: function(dna){
      return transcribeNucleotides(dna, rnaComplement);
    },
    toDna: function(rna){
      return transcribeNucleotides(rna, dnaComplement);
    }
  }
};
