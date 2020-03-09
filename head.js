const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION


const head = function(arr) {
  if (arr.length === 1) {
    return arr;
  } else if (arr.length > 1) {
    return arr[0];
  } else {
    return "undefined";
  }
};

// TEST CODE

module.exports = head