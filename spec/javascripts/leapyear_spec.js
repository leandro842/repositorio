describe("verificar se o ano é bissexto", function() {
  describe("quando o ano é bissexto", function() {
    it("deve ser verdadeiro", function() {
      expect(leapyear(2012)).toBeTruthy();
    });
  });
  describe("quando o ano não é bissexto", function() {
    it("deve ser falso", function() {
      expect(leapyear(2015)).toBeFalsy();
    });
  });
});
