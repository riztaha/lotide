


//Function to see if two arrays are equal
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
 
//Function to test if the two arrays are indeed equal... NEEDS TO BE PAIRED WITH eqArrays!
const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) {
    console.log("The two arrays are equal!");
  } else {
    console.log("The two arrays are NOT EQUAL!");
  }
};

//Function for middle.js
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr.length / 2, arr.length / 2 + 1];
  } else {
    return [Math.ceil(arr.length / 2)];
  }
};

console.log(middle([1,2]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5,6,7]));

assertArraysEqual([1,2], []);
assertArraysEqual([1,2,3,4,5,6], [3,4]);
assertArraysEqual([1,2,3], [2]);
