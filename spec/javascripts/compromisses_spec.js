describe("verify prime number", function() {

  it("when prime number", function() {
    expect(prime_number(17)).toBe(true);
  });
  
  it("when is not a prime number", function() {
    expect(prime_number(4)).toBe(false);
  });
});

describe("verify if leapyear", function() {
  it("when leapyear", function() {
    expect(leapyear(2012).toEqual("É bissexto")
  });
  it("when not leapyear", function() {
    expect(leapyer(2015).to Equal("Não é bissexto"))
  });
});
