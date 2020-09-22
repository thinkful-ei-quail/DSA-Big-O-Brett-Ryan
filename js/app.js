//1. What is the Big O for this?

// Array of 15 people
// search for one that has golden retriever

//1. O(1) - only one call is made.

//2. O(n) - Calls are made linearly

// 2, Even or Odd:

// -- 100 things to check - 100 times

function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}

// O(n)

// 3. Are you here?
// O(n^2)

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// 4. Doubler
// O(n)

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// 5. Naive Search:
// O(n)
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// console.log(naiveSearch([2, 3, 4, 5, 6], 5));

// 6. Creating Pairs
// O(n^2)
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

//7. Compute the sequence
// O(n)
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// console.log(compute(6));

// 8. An efficient search
// it is a single loop that is dividing the array in half each time
// O(log n)
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//console.log(efficientSearch([1, 2, 3, 4, 5, 6, 7, 8], 5));

// 9 Random Element
// O(1)
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(findRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));

// 10. What am I?
// This is a prime number finder

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isWhat(15));

// Information is Entropy

// 11. Towers of Hanoi

// Move the biggest disk that can move to

// take the biggest one that can move to
// the smallest one it can move to
// the biggest one that can move to the smallest one

// O(n^2)

var hanoi = function (disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};

// hanoi(13, 'src', 'aux', 'dst');

// 12

// Counting Sheep: O(n)

// Power Calculator: O(n)

// Reverse String: O(n)
function reverse2(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) res = str[i] + res;
  return res;
}

// console.log(reverse2('string'));

// nth Triangular Number

// recursive O(n)
function triangleR(n) {
  if (n <= 1) {
    return n;
  }
  return n + triangleR(n - 1);
}
console.log('tr', triangleR(5));

// iterative: O(1)
function triangeleS(n) {
  return (n * (n + 1)) / 2;
}

console.log('ts', triangeleS(5));

// factorial

// iterative O(n)
function sFact(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) {
    rval *= i;
  }
  return rval;
}

console.log(sFact(4));

// recursive O(n)
function rFact(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * rFact(num - 1);
  }
}

console.log(rFact(4));
