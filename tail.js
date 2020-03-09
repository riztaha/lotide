// let emoji = String.fromCodePoint(128512);
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  const newArr = [];

  for (let i = 1; i < arr.length; i++) {
    let result = arr[i]; // Hello
    newArr.push(result);
  }
  
  return newArr;
};




module.exports = tail
