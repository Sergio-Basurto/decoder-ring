// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("#polybius()", () => {
  describe("Encoding", () => {});

  describe("Decoding", () => {
    it("should decode the input string using the Polybius square", () => {
      const input = "4432423352125413";
      const expected = ["thinkful", "th(i/j)nkful"];

      const actual = polybius(input, false);

      expect(expected).to.include(actual);
    });
  });
});
