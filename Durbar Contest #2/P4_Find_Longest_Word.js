function findLongestWord(sentence) {
  if (typeof sentence !== "string" || !sentence.trim()) return "";

  const words = sentence.split(/[\s,.\?!;:"()_\\-]+/).filter(Boolean);

  if (words.length === 0) return "";

  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
