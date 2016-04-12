class Gigasecond
  VERSION = 1
  GIGASECOND = 10**9

  def self.from(date)
    date + GIGASECOND
  end

end
