let emoji = String.fromCodePoint(128512);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

// eqObjects function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Store keys of each object
  let object1Key = Object.keys(object1);
  let object2Key = Object.keys(object2);

  // If number of keys is not equal, return false
  if (object1Key.length !== object2Key.length) {
    return false;
  } else {
    // Loop through the object keys for each value.
    for (let i = 0; i < object1Key.length; i++) {
    // if (object1Key[i] === object2Key[i]) {
      // If the Value is an array,
      if (Array.isArray(object1Key[i])) {
        // Then run the eqArrays fn on the values to see if they are equal.
        return eqArrays(object1[i], object2[i]);
      }
      // Otherwise compare the value of the keys
      else if (object1[i] !== object2[i]) {
        return false;
      }
      return true;
    }
  }
};

// FUNCTION IMPLEMENTATION //
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Example label: ${inspect(actual)}`);
    console.log("The two objects are equal!");
  } else {
    console.log("The two objects are NOT EQUAL!");
  }
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  d: "1"
};
assertObjectsEqual((ab, ba), (ab, ba)); // => true