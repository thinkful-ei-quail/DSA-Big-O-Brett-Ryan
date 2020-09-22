// Find the largest product that can be obtained by
// multiplying two items from the array

/*
function largestProduct(arr){
  for (let i=0; i< arr.length; i++) {
    for (let j=0; j<arr.length; j++){

    }
  }
}
*/

/*
function largestProduct(arr) {
  let largestValue = 0;
  let secondLargestValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) > largestValue) {
      secondLargestValue = largestValue;
      largestValue = Math.abs(arr[i]);
    } else if (Math.abs(arr[i] > secondLargestValue)) {
      secondLargestValue = Math.abs(arr[i]);
    }
  }
  return largestValue * secondLargestValue;
}
*/

// this function fails when
// console.log(largestProduct([-10, 7, -5])); // should be 50, outputs 70

/* // Edit this for smallestValue
function largestProduct(arr) {
  let largestValue = 0;
  let secondLargestValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) > largestValue) {
      secondLargestValue = largestValue;
      largestValue = Math.abs(arr[i]);
    } else if (Math.abs(arr[i] > secondLargestValue)) {
      secondLargestValue = Math.abs(arr[i]);
    }
  }
  return largestValue * secondLargestValue;
}
*/

// A single for-loop so it is just O(n)

// Start off by creating examples of what you think
// the output should be.
// Think of edge cases

// sorting algorithms cannot get better than O(log n)
function largestProduct(oldArr) {
  if (oldArr.length <= 1) {
    throw new Error(' More than one input value needed');
  }
  const arr = oldArr.concat();
  arr.sort((a, b) => a - b);

  const largestProduct = arr[arr.length - 1] * arr[arr.length - 2];
  const smallestProduct = arr[0] * arr[1];

  if (largestProduct > smallestProduct) {
    return largestProduct;
  } else {
    return smallestProduct;
  }
}

console.log(largestProduct([2, 5, 2, 6, 8])); // 48
console.log(largestProduct([10, 2, 3, 7, 5])); // 70
console.log(largestProduct([10, 10, 2, 3, 5])); // 100
console.log(largestProduct([10, 10.5, 2, 3, 5])); // 105
console.log(largestProduct([-10, 2, 3, -10])); // 100
// this would be a part where you would ask your interviewer
// what they expect. Could be 5. Could be throw error.
// We can't make a product with just one value
console.log(largestProduct([5])); // error
