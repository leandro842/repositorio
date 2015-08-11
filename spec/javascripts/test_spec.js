//Prime Number
describe("Prime Number", function() {
    it("is a prime number", function() {
    expect(prime_number(17)).toBe(true);
  });
  
  it("is not a prime number", function() {
    expect(prime_number(4)).toBe(false);
  });
});

//Leap Year
describe("Leap Year", function() {
  describe("when a leap year", function() {
    it("must be true", function() {
      expect(leap_year(2012)).toBeTruthy();
    });
  });
  describe("when is not a leap year", function() {
    it("must be false", function() {
      expect(leap_year(2015)).toBeFalsy();
    });
  });
});

//Age +18
describe("Age +18", function() {
  describe("Legal age", function() {
    it("need be greater than 18 years old", function() {
      expect(majority(leandro)).toBeGreaterThan(18);
    });
  });
});
