//! Date:- 27/01/2026 (Array)

//^ Question 1 (Find the highest element in an array)
/*
function highest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(highest([5, 7, 6, 9, 14, 2]));
*/

//^ Question 2 (Find the lowest element in an array)
/*
function lowest(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(lowest([5, 7, 6, 9, 14, 2]));
*/

//^ Question 3 (Find the second highest element in an array)
//$ 1st Way
/*
function secondHighest(arr) {
  let firstHighest = arr[0];
  let secondHighest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstHighest) {
      secondHighest = firstHighest;
      firstHighest = arr[i];
    } else if (secondHighest < arr[i] && arr[i] < firstHighest) {
      secondHighest = arr[i];
    }
  }
  return secondHighest;
}

console.log(secondHighest([5, 7, 6, 9, 14, 10, 2]));
*/

//$ 2nd Way
/*
function secondHighest(arr) {
  arr.sort((a, b) => a - b);
  let newSet = new Set(arr);
  let newArr = Array.from(newSet);
  return newArr[newArr.length - 2];
}

console.log(secondHighest([5, 7, 6, 9, 14, 14, 10, 2]));
*/

//^ Question 4 (Find the second lowest element in an array)
function secondLowest(arr) {
  let firstLowest = arr[0];
  let secondLowest = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < firstLowest) {
      secondLowest = firstLowest;
      firstLowest = arr[i];
    } else if (secondLowest > arr[i] && arr[i] > firstLowest) {
      secondLowest = arr[i];
    }
  }
  return [firstLowest, secondLowest];
}

console.log(secondLowest([5, 7, 6, 9, 14, 14, 10, 2, 3]));
