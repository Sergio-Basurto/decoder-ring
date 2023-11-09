function polybius(input, encode = true) {
  // Define the Polybius square as an object with key-value pairs
  const alphabet = {
    // Each letter maps to a unique string representing its position on the grid
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  if (encode) {
    // Encoding logic begins here
    const encoded = []; // Initialize an empty array to hold the encoded characters

    // Loop over each character in the input string, converted to lowercase
    for (let char of input.toLowerCase()) {
      if (char === " ") {
        encoded.push(" "); // If the character is a space, keep it as a space
      } else if (char in alphabet) {
        // If the character is in our alphabet object, encode it
        encoded.push(alphabet[char]); // Push the encoded value onto the array
      }
    }
    // Join the array of encoded values into a single string and return it
    return encoded.join("");
  } else {
    // Decoding logic begins here

    // Check if the input length (excluding spaces) is even; if not, return false
    const charCount = input.replace(/ /g, "").length;
    if (charCount % 2 !== 0) {
      return false;
    }

    // Initialize an empty array to hold the decoded characters
    const decoded = [];
    let i = 0; // Initialize a counter i to 0

    // Loop over the input by index
    while (i < input.length) {
      if (input[i] === " ") {
        // If the character at index i is a space, add a space to the decoded array
        decoded.push(" ");
        i++; // Increment i to move to the next character
      } else {
        // Extract a pair of characters (a two-digit number)
        const char = input.slice(i, i + 2);

        if (char === "42") {
          // If the pair is "42", it could be 'i' or 'j'
          decoded.push("(i/j)");
        } else {
          // Find which letter corresponds to the pair of digits
          for (let letter in alphabet) {
            if (alphabet[letter] === char) {
              decoded.push(letter); // Add the decoded letter to the array
              break; // Break out of the loop once the letter is found
            }
          }
        }
        // Increment i by 2 since we are reading two digits at a time
        i += 2;
      }
    }
    // Join the array of decoded characters into a single string and return it
    return decoded.join("");
  }
}

module.exports = { polybius }; // Export the polybius function for use in other files
