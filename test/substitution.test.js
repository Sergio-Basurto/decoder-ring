// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("#substitution()", () => {
  it("should encode the input string using the given substitution alphabet", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";

    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });

  it("should encode the input string while maintaining spaces", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";

    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });

  it("should decode the input string using the given substitution alphabet", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "thinkful";

    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });

  it("should handle special characters in the substitution alphabet", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";

    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });

  it("should decode the input string while maintaining spaces and handle special characters", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "message";

    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });

  it("should return false when the substitution alphabet is invalid (not 26 characters or has duplicate characters)", () => {
    const input = "thinkful";

    // Invalid substitution alphabet (length not 26)
    const alphabet1 = "short";
    const actual1 = substitution(input, alphabet1);
    expect(actual1).to.be.false;

    // Invalid substitution alphabet (has duplicate characters)
    const alphabet2 = "abcabcabcabcabcabcabcabcyz";
    const actual2 = substitution(input, alphabet2);
    expect(actual2).to.be.false;
  });
});
