// Write your tests here!
const assert = require("assert");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should encode a string with positive shift value", () => {
    const encoded = caesar("abc", 1);
    assert.strictEqual(encoded, "bcd");
  });

  it("should decode a string with negative shift value", () => {
    const decoded = caesar("cde", -2, false);
    assert.notStrictEqual(decoded, "abc");
  });

  it("should handle wrapping around the alphabet", () => {
    const encoded = caesar("xyz", 3);
    assert.strictEqual(encoded, "abc");
  });

  it("should maintain non-alphabetic characters", () => {
    const encoded = caesar("abc123!@#", 1);
    assert.strictEqual(encoded, "bcd123!@#");
  });

  it("should return false for invalid shift value", () => {
    const encoded = caesar("abc", 0);
    assert.strictEqual(encoded, false);
  });
});
