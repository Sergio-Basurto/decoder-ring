const caesarModule = (function () {
  // Define the caesar function within the caesarModule
  function caesar(input, shift, encode = true) {
    // Check if the shift value is not present, is 0, or outside the range -25 to 25, return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    // Define the alphabet for reference
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Convert input text to lowercase to make it case-insensitive
    const inputLowerCase = input.toLowerCase();

    // Initialize an empty string to store the final result
    let result = "";

    // Loop through each character in the input text
    for (let i = 0; i < inputLowerCase.length; i++) {
      // Get the current character from the input text
      const char = inputLowerCase[i];

      // Check if the character is a letter in the alphabet
      if (alphabet.includes(char)) {
        // Find the current index of the character in the alphabet
        const currentIndex = alphabet.indexOf(char);
        let newIndex;

        // Calculate the new index after applying the shift
        if (encode) {
          // For encoding, shift to the right
          newIndex = (currentIndex + shift + 26) % 26;
        } else {
          // For decoding, shift to the left
          newIndex = (currentIndex - shift + 26) % 26;
        }

        // Get the character from the alphabet at the new index
        const shiftedChar = alphabet[newIndex];

        // Append the shifted character to the result string
        result += shiftedChar;
      } else {
        // If the character is not in the alphabet (like spaces or punctuation),
        // add it to the result string as is
        result += char;
      }
    }

    // Return the final encrypted/decrypted string
    return result;
  }

  // Make the caesar function available outside the module
  return {
    caesar,
  };
})();

// Export the caesar function for use in other modules/files
module.exports = { caesar: caesarModule.caesar };
