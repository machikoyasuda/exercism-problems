var Pangram = require('./pangram');

describe('Pangram()', function()  {

  it('empty sentence', function() {
    var pangram = new Pangram('');
    expect(pangram.isPangram()).toBe(false);
  });

  it('pangram with only lower case', function()  {
    var pangram = new Pangram("the quick brown fox jumps over the lazy dog");
    expect(pangram.isPangram()).toBe(true);
  });

  it("missing character 'x'", function()  {
    var pangram = new Pangram("a quick movement of the enemy will jeopardize five gunboats");
    expect(pangram.isPangram()).toBe(false);
  });

  it('pangram with mixed case and punctuation', function()  {
    var pangram = new Pangram("\"Five quacking Zephyrs jolt my wax bed.\"");
    expect(pangram.isPangram()).toBe(true);
  });

  it('pangram with non-ascii characters', function()  {
    var pangram = new Pangram("Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.");
    expect(pangram.isPangram()).toBe(true);
  });

});

describe('not a Pangram()', function() {
  describe('fewer than 26 characters', function() {
    it('only numbers', function() {
      var pangram = new Pangram("12345678910");
      expect(pangram.isPangram()).toBe(false);
    });
    it('only A', function() {
      var pangram = new Pangram("aaaaaaaaaaaaaaa");
      expect(pangram.isPangram()).toBe(false);
    });
    it('only question marks', function() {
      var pangram = new Pangram("??????????");
      expect(pangram.isPangram()).toBe(false);
    });
  });

  describe('more than 26 characters', function() {
    it('only numbers', function() {
      var pangram = new Pangram("12345678910123456789101234567891012345678910");
      expect(pangram.isPangram()).toBe(false);
    });
  });
})
