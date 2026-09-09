// function reverseEachWord(str) {
//   let wordsArray = str.split(" ");
//   let reversedWordsArray = [];

  
//   for (let i = 0; i < wordsArray.length; i++) {
//     let currentWord = wordsArray[i];

//     let characters = currentWord.split("");

//     let reversedCharacters = characters.reverse();

//     let reversedWord = reversedCharacters.join("");

//     reversedWordsArray.push(reversedWord);
//   }

//   let result = reversedWordsArray.join(" ");

//   return result;
// }


function reverseEachWord(str) {
  let words = str.split(" ");

  let reversedWords = words.map((word) => word.split("").reverse().join(""));

  return reversedWords.join(" ");
}




let inputText = "Hello World";
let outputText = reverseEachWord(inputText);

console.log("Original Text:", inputText);
console.log("Reversed Text:", outputText); 
// output: olleH dlroW