class Squares
  VERSION = 1

  def initialize(value)
    @value = value
  end

  def square_of_sums
    (1..@value).reduce(:+)**2
  end

  def sum_of_squares
    ((1..@value).map {|value| value**2}).reduce(:+)
  end

  def difference
    square_of_sums - sum_of_squares
  end
  
end
