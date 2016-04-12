class Complement
  VERSION = 2
  RNA_PATTERN = {
            'G' => 'C',
            'C' => 'G',
            'T' => 'A',
            'A' => 'U',
          }
  DNA_PATTERN = RNA_PATTERN.invert

  def self.of_dna(dna_strand)
    dna_strand.each_char do |strand|
      if RNA_PATTERN.include? strand
        rna << RNA_PATTERN[strand]
      else
        raise ArgumentError
      end
    end
    rna
  end

  def self.of_rna(rna_strand)
    rna_strand.each_char do |strand|
      if DNA_PATTERN.include? strand
        dna << DNA_PATTERN[strand]
      else
        raise ArgumentError
      end
    end
    dna
  end
end
