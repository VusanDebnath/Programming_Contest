function convertToCamelCase(sentence) {
  if (!sentence || typeof sentence !== "string") return "";


  const words = sentence
    .trim()
    .split(/[\s+_\-]+/)
    .filter(Boolean);

  // if empty string
  if (words.length === 0) return "";

  
  const firstWord = words[0].toLowerCase();

  const restOfWords = words.slice(1).map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return [firstWord, ...restOfWords].join("");
}


