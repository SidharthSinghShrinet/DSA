//! Date =:- 17/01/2026

//^ Question 1 (Print all the characters of the string)
/*
function printString(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

printString("Hello World");
*/

//^ Question 2 (Print all the characters of the string in reverse order)
/*
function reversePrintString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}

reversePrintString("Hello World");
*/

//^ Question 3 (Count all the Capital characters in the string)
/*
function countCapital(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  console.log("Count of Capital characters = " + count);
}

countCapital("Hello World");
*/

//^ Question 4 (Count all the Small characters in the string)
/*
function smallCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      count++;
    }
  }
  console.log("Count of Small characters = " + count);
}

smallCount("Hello World");
*/

//^ Question 5 (Count the capitalCount and smallCount in the string)
/*
function countCapitalSmall(str) {
  let capitalCount = 0;
  let smallCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      capitalCount++;
    } else if (str[i] >= "a" && str[i] <= "z") {
      smallCount++;
    }
  }
  console.log("Capital Count = " + capitalCount);
  console.log("Small Count = " + smallCount);
}

countCapitalSmall("Hello World");
*/

//^ Question 6 (Count the Capital,Small and digits characters in the string)
/*
function countCapitalSmallDigit(str) {
  let capitalCount = 0;
  let smallCount = 0;
  let digitCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      capitalCount++;
    } else if (str[i] >= "a" && str[i] <= "z") {
      smallCount++;
    } else if (str[i] >= 0 && str[i] <= 9) {
      digitCount++;
    }
  }
  console.log("Capital Count = " + capitalCount);
  console.log("Small Count = " + smallCount);
  console.log("Digit Count = " + digitCount);
}

countCapitalSmallDigit("Jsp@123xyZ");
*/

//^ Question 7 (Count the capital,small,digit and special characters in the string)
/*
function countCapitalSmallDigitSpecial(str) {
  let capitalCount = 0;
  let smallCount = 0;
  let digitCount = 0;
  let specialCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      capitalCount++;
    } else if (str[i] > "a" && str[i] <= "z") {
      smallCount++;
    } else if (str[i] >= 0 && str[i] <= 9) {
      digitCount++;
    } else {
      specialCount++;
    }
  }
  console.log("Capital Count = " + capitalCount);
  console.log("Small Count = " + smallCount);
  console.log("Digit Count = " + digitCount);
  console.log("Special Count = " + specialCount);
}

countCapitalSmallDigitSpecial("Jsp@123_xyZ");
*/

//! Date :- 18/01/2026

//^ Question 1 (Reverse the string)
//$ 1st Method (Split-Reverse-Join)
/*
function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}

reverseString("Hello World!");
*/

//$ 2nd Method (For Loop + String Concatenation)
/*
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}

reverseString("Hello World!");
*/

//$ 3rd Way (Two Pointer Approach)
/*
function reverseString(str) {
  let arr = [...str];
  let left = 0;
  let right = arr.length - 1;
  console.log(arr);
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  arr = arr.join("");
  console.log(arr);
}

reverseString("Hello World!");
*/

//^ Question 2 (Check if the string is palindrome or not)
/*
//$ 1st Method  (Split-Reverse-Join)
function isPalindrome(str) {
  if (str.split("").reverse().join("").toLowerCase() === str.toLowerCase()) {
    console.log("String is Palindrome");
  } else {
    console.log("String is not Palindrome");
  }
}

isPalindrome("Madam");
isPalindrome("HahaH");
*/

//$ 2nd Method (For Loop + String Comparison)
/*
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Madam"));
*/

//$ 3rd Method (Two-pointer approach)
/*
function isPalindrome(str) {
  let arr = [...str];
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left].toLowerCase() !== arr[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("xyz"));
*/

//^ Question 3 (Check whether the string contains all the pattern like capital,small,digit and special characters or not)
/*
function checkPattern(str) {
  let capitalCount = 0;
  let smallCount = 0;
  let digitCount = 0;
  let specialCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      capitalCount++;
    } else if (str[i] >= "a" && str[i] <= "z") {
      smallCount++;
    } else if (str[i] >= 0 && str[i] <= 9) {
      digitCount++;
    } else {
      specialCount++;
    }
  }
  if (
    capitalCount === 0 ||
    smallCount === 0 ||
    digitCount === 0 ||
    specialCount === 0
  ) {
    console.log("String doesn't contain all the pattern");
    return false;
  } else {
    console.log("String contains all the pattern");
    return true;
  }
}

// let result = checkPattern("Jsp@123.com");
// let result = checkPattern("MERN@123");
// let result = checkPattern("Mern@");
// let result = checkPattern("Mern123");
let result = checkPattern("Mern@123");
console.log(result);
*/

//! Date :- 19/01/2026

//^ Question 1 (Find the total sum of all the digits in the string)
/*
function totalSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      sum = sum + Number(str[i]);
    }
  }
  console.log(sum);
}

totalSum("Jsp@12345");
*/

//^  Question 2 (Check whether the substring inside the string is palindrome or not and print the substring which is palindrome and sunbstring should not be include the main string)
/*
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

function CheckSubString(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let sub = str[i];
    for (let j = i + 1; j < str.length; j++) {
      sub += str[j];
      if (isPalindrome(sub) && sub.length !== str.length) {
        console.log(sub);
      }
    }
  }
}

CheckSubString("malayalam");
*/

//^ Question 3 (Find the occurrence of each character in the string)
/*
function findOccurrence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  for (let key in obj) {
    console.log(`${key} = ${obj[key]}`);
  }
}

findOccurrence("abcadcc");
*/

//^ Question 4 (Find the maximum occurence of character in the string)
//$ 1st Method
/*
function maximumOccurence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let max = 0;
  let ch = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      ch = key;
    }
  }
  console.log(`${ch} = ${max}`);
}

maximumOccurence("abbcadcc");
*/

//$ 2nd Method
/* 
function maximumOccurence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let max = 0;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }

  for (let key in obj) {
    if (obj[key] === max) {
      console.log(`${key} = ${max}`);
    }
  }
}

maximumOccurence("abcadcc");
*/

//^ Question 5 (Find the minimum occurence of character in the string)
/*
function minimumOccurence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  console.log(obj);
  let min = Infinity;
  let ch = "";
  for (let key in obj) {
    if (obj[key] <= min) {
      min = obj[key];
      ch = key;
    }
  }
  console.log(`${ch} = ${min}`);
}

minimumOccurence("abcadcc");
*/

//^ Question 6 (Remove the duplicate characters from the string)
/*
function removeDuplicates(str) {
  let newStr = "";
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
      newStr += str[i];
    }
  }
  // console.log(obj);
  console.log(newStr);
}

removeDuplicates("abcadcc");
*/

//! Date :- 20/01/2026
//^ Question 1 (Convert all the small letter characters in the string into capital characters)
/*
function convertCapital(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      newStr += String.fromCharCode(str.charCodeAt(i) - 32);
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

convertCapital("jsp@123");
*/

//^ Question 2 (Convert all the capital letter characters in the string into small characters)
/*
function convertSmall(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str >= "A" && str[i] <= "Z") {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

convertSmall("JSP@123");
*/

//^ Question 3 (Convert the characters into capital which is appearing twice or more in the string)
/*
function convertCapital(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] > 1) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  console.log(result);
}

convertCapital("abccdbe");
*/

//^ Question 4 (Convert the characters into small which is appearing twice or more in the string)
/*
function convertSmall(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] > 1) {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  console.log(result);
}

convertSmall("ABCCDBE");
*/

//^ Question 5 (Print the new string which is having the characters which is appearing once in the string)
/*
function printNonRepetitve(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      newString += str[i];
    }
  }
  console.log(newString);
}

printNonRepetitve("abccdbe");
*/

//^ Question 6 (Print the new string which is having the characters which is appearing twice or more in the string)
/*
function printRepetitve(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] > 1) {
      newString += str[i];
    }
  }
  console.log(newString);
}

printRepetitve("abccdbe");
*/

//! Date:- 21/01/2026

//^ Question 1(Remove all the special characters from the string)
/*
function removeSpecial(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] >= "A" && str[i] <= "Z") ||
      (str[i] >= "a" && str[i] <= "z") ||
      (str[i] >= "0" && str[i] <= "9")
    ) {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

removeSpecial("hello@23_!#45");
*/

//^ Question 2(Check whether two different strings are anagrams or not and output should be true or false)
/*
function checkAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }
  console.log(obj1, obj2);
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkAnagram("care", "race"));
*/

//^ Question 3(Reverse the each word inside the string)
//$ 1st Method (Split-Reverse-Join)
/*
function reverseWord(str) {
  let strArr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    newStr += strArr[i].split("").reverse().join("") + " ";
  }
  console.log(newStr);
}

reverseWord("JS is very easy");
*/

//$ 2nd Method (For Loop)
/*
function reverseWord(str) {
  let strArr = str.split(" ");
  // console.log(strArr);
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      newStr += strArr[i][j];
    }
    newStr += " ";
  }
  console.log(newStr);
}

reverseWord("JS is very easy");
*/

//$ 3rd Method (Three Pointer Method without Split Method)
/*
function stringReverse(str) {
  let j = 0;
  let k = 0;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      j = i - 1;
      if (i === str.length - 1) {
        j = i;
      }
      while (j >= k) {
        newStr += str[j--];
      }
      newStr += " ";
      k = i + 1;
    }
  }
  console.log(newStr);
}

stringReverse("JS is very easy");
*/

//! Date:- 22/01/2026

//& Test
//^ Question 1(Print the Pattern)
/*
function pattern(n) {
  let star = 1;
  let space = n - 1;
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      if (Math.ceil(star / 2) >= j) {
        str += i - j + 1 + " ";
      } else {
        str += j - i + 1 + " ";
      }
    }
    str += "\n";
    star += 2;
    space--;
  }
  console.log(str);
}

pattern(5);
*/

//^ Question 2(Print the alternate armstrong number from 10 to 500)
/*
function isArmstrong(num) {
  let sum = 0;
  let original = num;
  while (num > 0) {
    let rem = Math.floor(num % 10);
    sum = sum + Math.pow(rem, 3);
    num = Math.floor(num / 10);
  }
  return original == sum;
}

let arr = [];
for (let i = 10; i <= 500; i++) {
  if (isArmstrong(i)) {
    arr.push(i);
  }
}

arr = arr.filter((ele, idx) => idx % 2 === 0);

console.log(arr);
*/

//^ Question 3(Find the 2nd largest prime number in a range from 10 to 200)
/*
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let arr = [];
for (let i = 10; i <= 200; i++) {
  if (isPrime(i)) {
    arr.push(i);
  }
}

console.log(arr[arr.length - 2]);
*/

//^ Question 4(Find the three largest perfect number in a range from 1 to 1000)
/*
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

let arr = [];
for (let i = 1; i <= 1000; i++) {
  if (isPerfect(i)) {
    arr.push(i);
  }
}

console.log(arr[arr.length - 3]);
*/

//^ Question 5(Find the 1st three largest strong number in a range from 50 to 490)
/*
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function isStrong(num) {
  let sum = 0;
  let original = num;
  while (num > 0) {
    let rem = Math.floor(num % 10);
    sum = sum + factorial(rem);
    num = Math.floor(num / 10);
  }
  return original === sum;
}

let arr = [];
for (let i = 10; i <= 490; i++) {
  if (isStrong(i)) {
    arr.push(i);
  }
}

console.log(arr);
*/

//! Date:- 22/01/2026 (Recursion)
//^ Question 1
/*
function m1(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  m1(n - 1);
  console.log(n);
}

m1(4);
*/

//^ Question 2
function m1(n) {
  if (n === 0) {
    return;
  }
  console.log(++n);
  m1(n - 2);
  console.log(--n);
  console.log(n);
}

m1(4);
