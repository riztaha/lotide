const head = require('../head');
const assertEqual = require('../assertEqual');

//EMOJI
// let emoji = String.fromCodePoint(128512);

//Assert Equal Function
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

//Calling the Assert Equal on the Head function.

assertEqual(head([5,6,7]), 5); //pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head([1,2,3]), 5); //should fail
assertEqual(head([]), 5); //should return undefined