# class Hamming
#   def self.compute(strand_one, strand_two)
#     (strand_one.chars).zip(strand_two.chars).count {|nucleotide_one, nucleotide_two| nucleotide_one != nucleotide_two}
#   end
# end
class Hamming
  def self.compute(x, y)
    if x.length!=y.length
    raise ArgumentError
    end
    count=0
    x.length.times do |i|
      if x[i]!=y[i]
      count+=1
      end
    end
    count
  end
  VERSION=1
end
