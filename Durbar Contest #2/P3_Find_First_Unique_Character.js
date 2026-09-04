function findFirstUniqueChar(s) {
    if (typeof s !== "string" || s.length === 0) return -1;

  const charCount = {};

  for (const char of s) {
    if (charCount[char]) {
      charCount[char]++; 
    } else {
      charCount[char] = 1; 
    }
  }

  for (const char of s) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return -1;
}


