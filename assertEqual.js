// FUNCTION IMPLEMENTATION
let emoji = String.fromCodePoint(128512);

//
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE has been removed and added to assertEqualTest.js file.

module.exports = assertEqual