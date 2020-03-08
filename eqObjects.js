let emoji = String.fromCodePoint(128512);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function (a, b) {
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
const eqObjects = function (object1, object2) {
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
        return eqArrays(object1[i], object2[i])
      }
      else if(object1[i] !== object2[i]) {
        return false
      }
      return true;
    }
  }
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
assertEqual(eqObjects(ab, ba), true); // => true
const abc = {
  a: "1",
  b: "2",
  c: "3"
};
assertEqual(eqObjects(ab, abc), false); // => false

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
console.log(eqObjects(cd, dc), true); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
console.log(eqObjects(cd, cd2));