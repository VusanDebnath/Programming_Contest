function classifyPassword(password) {
  let len = password.length;

  let hasUpper = /[A-Z]/.test(password) ? 1 : 0;
  let hasLower = /[a-z]/.test(password) ? 1 : 0;
  let hasDigit = /[0-9]/.test(password) ? 1 : 0;
  let hasSpecial = /[!@#$%^&*]/.test(password) ? 1 : 0;

  let matchedTypes = hasUpper + hasLower + hasDigit + hasSpecial;

  if (len >= 8 && matchedTypes === 4) {
    return "Strong";
  }

  if (len >= 6 && matchedTypes >= 2) {
    return "Medium";
  }

  return "Weak";
}



// //Without regular expression__________*^*_____________
// function classifyPassword(password) {
//   let len = password.length;

//   let hasUpper = 0;
//   let hasLower = 0;
//   let hasDigit = 0;
//   let hasSpecial = 0;

//   let specialChars = "!@#$%^&*";

//   for (let i = 0; i < len; i++) {
//     let char = password[i];

//     if (char >= "0" && char <= "9") {
//       hasDigit = 1;
//     }
//     else if (specialChars.includes(char)) {
//       hasSpecial = 1;
//     }
//     else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
//       hasUpper = 1;
//     }
//     else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
//       hasLower = 1;
//     }
//   }

//   let matchedTypes = hasUpper + hasLower + hasDigit + hasSpecial;

//   if (len >= 8 && matchedTypes === 4) {
//     return "Strong";
//   }

//   if (len >= 6 && matchedTypes >= 2) {
//     return "Medium";
//   }

//   return "Weak";
// }


// 🔍 যদি && অংশটি না দিতাম (শুধু char === char.toUpperCase() রাখতাম):

// মনে করুন, পাসওয়ার্ডের ভেতরের একটি অক্ষর হলো একটি স্পেশাল ক্যারেক্টার @।
// কোড যখন এই লাইনে আসবে: javascriptif (char === char.toUpperCase()) 
// সে দেখবে: @ === @ (যা সত্য বা true)।

// ফলাফল কী হতো? কোডটি ভুল করে ধরে নিত যে পাসওয়ার্ডে একটি বড় হাতের অক্ষর (Upper Case) আছে এবং hasUpper = 1 করে দিত! অথচ @ কোনো বড় হাতের অক্ষরই নয়।





// 🎯 && দিয়ে কী নিশ্চিত করলাম?

// জাভাস্ক্রিপ্টকে বললাম:অক্ষরটির বড় হাতের রূপটি যেন তার নিজের সমান হয় (char === char.toUpperCase()) এবং (AND) অক্ষরটির বড় হাতের রূপ আর ছোট হাতের রূপ যেন একে অপরের সমান না হয় (char !== char.toLowerCase())।

// যেহেতু ইংরেজি অক্ষরের ক্ষেত্রে বড় হাত আর ছোট হাত আলাদা (যেমন: 'A' আর 'a' সমান নয়), তাই এই শর্তটি শুধু এবং শুধুমাত্র ইংরেজি অক্ষরের জন্যই সত্য হবে। কোনো সংখ্যা বা স্পেশাল ক্যারেক্টার ভুল করে এখানে ঢুকে পড়তে পারবে না।





//Ehabe o likha jay-------------*^*--------------------

// // বড় হাতের অক্ষর চেক (A থেকে Z এর মধ্যে কি না)
// if (char >= 'A' && char <= 'Z') {
//     hasUpper = 1;
// }
// // ছোট হাতের অক্ষর চেক (a থেকে z এর মধ্যে কি না)
// else if (char >= 'a' && char <= 'z') {
//     hasLower = 1;
// }
