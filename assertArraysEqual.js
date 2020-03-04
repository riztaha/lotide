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
}

const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) { console.log("The two arrays are equal!")}
  else {console.log("The two arrays are NOT EQUAL!")}
}

// console.log(eqArrays([1,2,3], [1,2,5]))
assertArraysEqual([1,2,3], [1,2,5]) // --> false
assertArraysEqual([1,2,3], [1,2,3]) // --> true
assertArraysEqual([1,2,3], [1,2,"3"]) // --> false

