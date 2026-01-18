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
