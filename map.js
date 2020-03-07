// challenge: create a map function that will take in two args
// arg1 - an array, arg2 - a callback function which will create a new arr
//




const map = function(array, callback) {
   // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

// const callback = map(words, word => word[0]);
// console.log(callback);

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
};

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);