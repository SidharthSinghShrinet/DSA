//! Date:- 23/01/2026 (OLD QUESTIONS)
//^ Question 1 (Print 0,1,2 with the help of recursion)
/*
let count = 0;
function greet() {
  if (count === 3) {
    return;
  }
  console.log(count++);
  greet();
}

greet();
*/

//^ Question 2(Print a name 5 times with the help of recursion)
/*
function printName(n) {
  if (n === 0) {
    return;
  }
  console.log("Sitaram");
  printName(n - 1);
}

printName(5);
*/

/*
function printName(i, n) {
  if (i > n) {
    return;
  }
  console.log("Sitaram");
  printName(i + 1, n);
}

printName(1, 5);
*/

//^ Question 3 (Print the natural numbers from 1 to 100 with the help of recursion)
/*
function printNaturalNumber(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  printNaturalNumber(i + 1, n);
}

printNaturalNumber(1, 100);
*/

//^ Question 4 (Print the natural numbers from 100 to 1 with the help of recursion)4
/*
function printNaturalNumber(i, n) {
  if (i > n) {
    return;
  }
  console.log(n);
  printNaturalNumber(i, n - 1);
}

printNaturalNumber(1, 100);
*/

//^ Question 5 (Print the natural numbers from 1 to 100 with the help of recursion + Backtracking)
/*
function printNaturalNumber(i, n) {
  if (n < i) {
    return;
  }
  printNaturalNumber(i, n - 1);
  console.log(n);
}

printNaturalNumber(1, 100);
*/

//^ Question 6 (Print the natural numbers from 100 to 1 with the help of recursion + Backtracking)
/*
function printNaturalNumber(i, n) {
  if (i > n) {
    return;
  }
  printNaturalNumber(i + 1, n);
  console.log(i);
}

printNaturalNumber(1, 100);
*/

//^ Question 7(Find the sum of n natural numbers with the help of recursion)
/*
function printSum(n) {
  if (n === 0) {
    return 0;
  }
  return n + printSum(n - 1);
}

console.log(printSum(3));
*/
/*
let sum = 0;
function printSum(i, n) {
  if (i > n) {
    return;
  }
  sum = sum + i;
  printSum(i + 1, n);
}

printSum(1, 5);
console.log(sum);
*/

/*
function paramterizedPrintSum(i, n, sum) {
  if (i > n) {
    console.log(sum);
    return;
  }
  paramterizedPrintSum(i + 1, n, sum + i);
}

paramterizedPrintSum(1, 5, 0);
*/

//^ Question 8 (Reverse the array with the help of recursion)
function reverseArray(arr, i) {
  let mid = Math.floor(arr.length / 2);
  if (i > mid - 1) {
    console.log(arr);
    return;
  }
  // console.log(arr);
  [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
  reverseArray(arr, i + 1);
}

reverseArray([5, 3, 8, 7, 6], 0);
