# 🚀 JavaScript Problem Solving Log & Concepts

কন্টেস্টের বিভিন্ন ক্যাটাগরির প্রবলেম সমাধান করতে গিয়ে আমি জাভাস্ক্রিপ্টের যেসব গুরুত্বপূর্ণ কোর কনসেপ্ট, বিল্ট-ইন মেথড এবং এজ-কেস (Edge Cases) হ্যান্ডেল করা শিখেছি, তার বিস্তারিত নোট এখানে রাখা হলো। ভবিষ্যতের রিভিশনের জন্য এটি একটি দারুণ গাইডলাইন।

---
# Contest_3

## 📌 সূচিপত্র (Table of Contents)
1. [Reverse Each Word](#১-reverse-each-word)
2. [Temperature Converter](#২-temperature-converter)
3. [Valid Palindrome](#৩-valid-palindrome)
4. [Password Strength Classifier](#৪-password-strength-classifier)
5. [Repeated Digit Sum](#৫-repeated-digit-sum)

---

### ১. Reverse Each Word
* **সমস্যা:** একটি বাক্যের ভেতরের প্রতিটি শব্দকে তার নিজস্ব জায়গায় রেখে অক্ষরের ক্রমানুসারে উল্টো (Reverse) করা। (যেমন: `"Hello World"` $\rightarrow$ `"olleH dlroW"`)

#### 💡 মূল লজিক ও মেথড:
* পুরো বাক্যটিকে স্পেস দেখে ভাঙতে হবে $\rightarrow$ `str.split(' ')`
* প্রতিটি শব্দের ভেতরের অক্ষরগুলোকে আলাদা করতে হবে $\rightarrow$ `word.split('')`
* অক্ষরের তালিকা উল্টাতে হবে $\rightarrow$ `.reverse()`
* উল্টানো অক্ষরগুলো জোড়া লাগিয়ে শব্দ বানাতে হবে $\rightarrow$ `.join('')`
* সবশেষে শব্দগুলোকে আবার স্পেস দিয়ে জোড়া লাগাতে হবে $\rightarrow$ `.join(' ')`

#### 🛠️ লুপ ছাড়া স্মার্ট সমাধান (map() ব্যবহার):
```javascript
function reverseEachWord(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
```
* **যা শিখলাম:** `map()` হলো জাভাস্ক্রিপ্টের একটি আধুনিক লুপ যা প্রতিটি উপাদানের ওপর স্বয়ংক্রিয়ভাবে কাজ করে নতুন একটি অ্যারে ফেরত দেয়। এতে নিজের হাতে ভ্যারিয়েবল ট্র্যাকিং বা `push()` করতে হয় না।

---

### ২. Temperature Converter
* **সমস্যা:** ইনপুট তাপমাত্রা সেলসিয়াস (`'C'`) হলে ফারেনহাইটে, আর ফারেনহাইট (`'F'`) হলে সেলসিয়াসে রূপান্তর করা। ফলাফল দশমিকের পর সর্বোচ্চ ২ ঘর হতে হবে।

#### 💡 গাণিতিক সূত্র ও লজিক:
* $F = (C \times 9/5) + 32$
* $C = (F - 32) \times 5/9$

#### 🛠️ সমাধান কোড:
```javascript
function convertTemperature(value, unit) {
    let converted = (unit === 'C' || unit === 'c') ? (value * 9 / 5) + 32 : (value - 32) * 5 / 9;
    return Number(converted.toFixed(2));
}
```
* **যা শিখলাম:** `toFixed(2)` দশমিকের পর ২ ঘর নির্দিষ্ট করে, কিন্তু আউটপুটকে **স্ট্রিং** বানিয়ে ফেলে। হিডেন টেস্ট কেস পাস করতে হলে তাকে পুনরায় পিওর সংখ্যা বানাতে শুরুতে `Number()` দিয়ে র‍্যাপ (Wrap) করতে হয়। (যেমন: `32.00` না হয়ে শুধু `32` রিটার্ন হবে)।

---

### ৩. Valid Palindrome
* **সমস্যা:** বড়-ছোট হাতের অক্ষর (Case) এবং স্পেস, কমা বা কোলন ইগনোর করে একটি বাক্য প্যালিনড্রোম (সোজা ও উল্টো দিক থেকে সমান) কি না তা যাচাই করা।

#### 💡 মূল লজিক ও মেথড:
* সব অক্ষর ছোট হাতের করা $\rightarrow$ `.toLowerCase()`
* রেগুলার এক্সপ্রেশন বা রেজেক্স (Regex) ব্যবহার করে স্পেস ও যতিচিহ্ন মুছে ফেলা $\rightarrow$ `.replace(/[^a-z0-9]/g, '')`
* এরপর লেখাটিকে উল্টে মূল পরিষ্কার লেখার সাথে তুলনা করা $\rightarrow$ `cleanStr === reversedStr`

#### 🛠️ সমাধান কোড:
```javascript
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}
```
* **যা শিখলাম:** `/[^a-z0-9]/g` এর অর্থ হলো `a-z` এবং `0-9` বাদে বাকী সব ক্যারেক্টারকে উধাও বা ডিলিট করা। কন্ডিশনাল চেকের জন্য বাড়তি `if-else` না লিখে সরাসরি `return cleanStr === reversedStr;` লিখলে জাভাস্ক্রিপ্ট নিজে থেকেই `true`/`false` রিটার্ন করে।

---

### ৪. Password Strength Classifier
* **সমস্যা:** পাসওয়ার্ডের দৈর্ঘ্য এবং অক্ষরের বৈশিষ্ট্যের ওপর ভিত্তি করে সেটিকে "Strong", "Medium", বা "Weak" বলা।

#### 💡 শর্তসমূহ এবং অর্ডার অব এক্সিকিউশন:
* **Strong:** দৈর্ঘ্য $\geq 8$ এবং ৪টি টাইপই (বড় হাত, ছোট হাত, সংখ্যা, স্পেশাল) থাকতে হবে।
* **Medium:** দৈর্ঘ্য $\geq 6$ এবং যেকোনো ২টি টাইপ থাকতে হবে।
* **Weak:** বাকি সব।

#### 🛠️ সমাধান কোড (Regex বা ASCII ছাড়াই ক্লিন লুপ):
```javascript
function classifyPassword(password) {
    let len = password.length;
    let hasUpper = 0, hasLower = 0, hasDigit = 0, hasSpecial = 0;
    let specialChars = "!@#\$%^&*";

    for (let char of password) {
        if (char >= '0' && char <= '9') hasDigit = 1;
        else if (specialChars.includes(char)) hasSpecial = 1;
        else if (char >= 'A' && char <= 'Z') hasUpper = 1;
        else if (char >= 'a' && char <= 'z') hasLower = 1;
    }

    let score = hasUpper + hasLower + hasDigit + hasSpecial;
    if (len >= 8 && score === 4) return "Strong";
    if (len >= 6 && score >= 2) return "Medium";
    return "Weak";
}
```
* **যা শিখলাম:** কন্টেস্টে কন্ডিশনের অর্ডার খুব গুরুত্বপূর্ণ (আগে Strong চেক করতে হবে, তারপর Medium)। জাভাস্ক্রিপ্টে স্পেশাল ক্যারেক্টার এবং সংখ্যার কোনো বড়/ছোট হাত হয় না, তাই শুধু `char.toUpperCase()` চেক করলে ভুল আউটপুট আসতে পারে। ASCII রেঞ্জ (`char >= 'A' && char <= 'Z'`) ব্যবহার করা সবচেয়ে নিরাপদ।

---

### ৫. Repeated Digit Sum
* **সমস্যা:** একটি সংখ্যার অঙ্কগুলো বারবার যোগ করে চূড়ান্ত একটি এক অঙ্কের সংখ্যা (০-৯) বের করা। (যেমন: $9875 \rightarrow 29 \rightarrow 11 \rightarrow 2$)

#### 💡 লুপের লজিক (While Loop):
* সংখ্যাটি যতক্ষণ $9$-এর চেয়ে বড় থাকবে, তাকে স্ট্রিং বানিয়ে প্রতিটি অঙ্কে লুপ চালিয়ে যোগ করতে হবে এবং আসল ভ্যারিয়েবল আপডেট করতে হবে।

#### 🛠️ লুপ ছাড়া ১ লাইনের ওয়ান-শট সমাধান (Math Trick):
```javascript
function repeatedDigitSum(n) {
    return n === 0 ? 0 : 1 + (n - 1) % 9;
}
```
* **যা শিখলাম:** গণিতে একে **Digital Root** বলা হয়। যেকোনো বিশাল সংখ্যার অঙ্কগুলোর বারবার যোগফল মূলত সংখ্যাটিকে $9$ দিয়ে ভাগ করার পর প্রাপ্ত ভাগশেষের সমান হয়। এই গাণিতিক সূত্রটি ব্যবহার করলে কোড $O(1)$ টাইমে রান করে এবং কোডিং কন্টেস্টে টাইম লিমিট এক্সিড (TLE) হওয়ার কোনো সম্ভাবনাই থাকে না।
