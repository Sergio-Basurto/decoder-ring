const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      [...new Set(alphabet)].length !== 26
    ) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLowercase = input.toLowerCase();

    if (encode) {
      let encoded = "";
      for (let i = 0; i < inputLowercase.length; i++) {
        const char = inputLowercase[i];
        if (char === " ") {
          encoded += " ";
        } else {
          const index = standardAlphabet.indexOf(char);
          const encodedChar = alphabet[index];
          encoded += encodedChar;
        }
      }
      return encoded;
    } else {
      let decoded = "";
      for (let i = 0; i < inputLowercase.length; i++) {
        const char = inputLowercase[i];
        if (char === " ") {
          decoded += " ";
        } else {
          const index = alphabet.indexOf(char);
          const decodedChar = standardAlphabet[index];
          decoded += decodedChar;
        }
      }
      return decoded;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
