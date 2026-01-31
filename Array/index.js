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
/*
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
*/

//! Date:- 28/01/2026
//^ Question 1 (Find the occurences of each element in an array)
/*
function occuences(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
}

occuences([10, 1, 5, 1, 10, 6]);
*/

//^ Question 2(Make the array where all the element should be unique).
//$ 1st Way(Inbuilt Method)
/*
function uniqueArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
}
uniqueArray([10, 1, 5, 1, 10, 6]);
*/

//$ 2nd Way
/*
function uniqueArray(arr) {
  let newArr = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      newArr[newArr.length] = arr[i];
      obj[arr[i]] = 1;
    }
  }
  console.log(newArr);
  console.log(obj);
}

uniqueArray([10, 1, 5, 1, 10, 6]);
*/

//^ QUestion 3 (Reverse the Array with the help of Two-Pointer Method)
/*
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  console.log(arr);
}

reverseArray([10, 20, 30, 40, 50]);
*/

//^ Question 4(Reverse the array with the help of map() method)
/*
function reverseArray(arr) {
  let newArr = arr.map((ele, idx, arr) => {
    return arr[arr.length - 1 - idx];
  });
  return newArr;
}

console.log(reverseArray([10, 20, 30, 40, 50]));
*/

//^ Question 5(Find the occurences of each element with the help of reduce() method)
/*
function occurences(arr) {
  let newObj = arr.reduce((acc, ele, idx, arr) => {
    if (acc[ele]) {
      acc[ele]++;
    } else {
      acc[ele] = 1;
    }
    return acc;
  }, {});
  console.log(newObj);
}

occurences([10, 1, 5, 1, 10, 6, 1]);
*/

//! Date:- 29/01/2026

//^ Question 1(Implement the Linear Search)
/*
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 20, 30, 40, 50], 30));
*/

//^ Question 2(Implement the Binary Search)
/*
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.trunc((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70], 70));
*/

//^ Question 3(Implement the Bubble Sort)
/*
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}

bubbleSort([50, 70, 40, 30, 20, 10]);
*/

//^ Question 4(Implement the Selection Sort)
/*
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[index] > arr[j]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  console.log(arr);
}

selectionSort([50, 70, 40, 30, 20, 10]);
*/

//! Date:- 30/01/2026

//^ Question 5(Implement the Insertion Sort)
/*
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
*/

//! Date:- 31/01/2026

//^ Question 1(Implement the Quick Sort)
/*
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  let left = start;
  let right = end;
  let pivotIndex = Math.trunc((start + end) / 2);
  let pivotValue = arr[pivotIndex];
  while (left <= right) {
    while (pivotValue > arr[left]) left++;
    while (pivotValue < arr[right]) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  quickSort(arr, start, right);
  quickSort(arr, left, end);
  return arr;
}

console.log(quickSort([6, 2, 9, 5, 1, 7, 3]));
*/
