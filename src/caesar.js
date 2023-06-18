const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLowerCase = input.toLowerCase();
    let result = "";

    for (let i = 0; i < inputLowerCase.length; i++) {
      const char = inputLowerCase[i];

      if (alphabet.includes(char)) {
        const currentIndex = alphabet.indexOf(char);
        let newIndex;

        if (encode) {
          newIndex = (currentIndex + shift + 26) % 26;
        } else {
          newIndex = (currentIndex - shift + 26) % 26;
        }

        const shiftedChar = alphabet[newIndex];
        result += shiftedChar;
      } else {
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
