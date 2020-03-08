//Assertion functions
const eqArrays = function(a, b) {
  // console.log(a,b);
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) {
    console.log("The two arrays are equal!");
  } else {
    console.log("The two arrays are NOT EQUAL!");
  }
}

//Flatten function
const flatten = function(arr) {
  let newArr = []
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let nestedArr = arr[i]
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i])
      } else {
      for (let x = 0; x < nestedArr.length; x++) {
        newArr.push(nestedArr[x])
      }
      // console.log(arr[i])
    }
  }
  return newArr
}

// console.log(
// console.log(flatten([1,2,3,[4,5],[6,[7],8]])) // Does not work with double nested-arrays.
console.log(flatten([1, 2, [3, 4], 5, [6]]))
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])