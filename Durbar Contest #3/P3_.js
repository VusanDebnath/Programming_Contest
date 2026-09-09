function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (cleanStr.length === 0) return true;

  let reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}
