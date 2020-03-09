const eqArrays = require('./eqArrays')

const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) {
    console.log("The two arrays are equal!");
  } else {
    console.log("The two arrays are NOT EQUAL!");
  }
};

module.exports = assertArraysEqual
