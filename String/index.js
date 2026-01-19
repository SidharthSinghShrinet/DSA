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
