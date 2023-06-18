function polybius(input, encode = true) {
  const alphabet = {
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
    // Encoding logic
    const encoded = [];
    for (let char of input.toLowerCase()) {
      if (char === " ") {
        encoded.push(" ");
      } else if (char in alphabet) {
        encoded.push(alphabet[char]);
      }
    }
    return encoded.join("");
  } else {
    // Decoding logic
    // Check if the number of characters excluding spaces is odd
    const charCount = input.replace(/ /g, "").length;
    if (charCount % 2 !== 0) {
      return false;
    }

    const decoded = [];
    let i = 0;
    while (i < input.length) {
      if (input[i] === " ") {
        decoded.push(" ");
        i++;
      } else {
        const char = input.slice(i, i + 2);
        if (char === "42") {
          decoded.push("(i/j)");
        } else {
          for (let letter in alphabet) {
            if (alphabet[letter] === char) {
              decoded.push(letter);
              break;
            }
          }
        }
        i += 2;
      }
    }
    return decoded.join("");
  }
}

module.exports = { polybius };
