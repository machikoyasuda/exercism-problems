class Nucleotide

  DNA_NUCLEOTIDES = ["A", "C", "G", "T"]

  def self.from_dna(dna)
    @dna = dna.chars
    fail ArgumentError unless validate
    self
  end

  def self.validate
    (@dna.uniq - DNA_NUCLEOTIDES).empty?
  end

  def self.count(nucleotide)
    @dna.count nucleotide
  end

  def self.histogram
    histogram = {}
    DNA_NUCLEOTIDES.each do |nucleotide|
      histogram[nucleotide] = @dna.count(nucleotide)
    end
    histogram
  end
end
