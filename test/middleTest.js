const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

console.log(middle([1,2]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle([1,2,3,4,5,6,7]));

assertArraysEqual([1,2], []);
assertArraysEqual([1,2,3,4,5,6], [3,4]);
assertArraysEqual([1,2,3], [2]);