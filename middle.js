//Function for middle.js
const middle = function(arr) {
  let newArr = []
  if (arr.length <= 1) {
    return undefined
  }
  if (arr.length <= 2) {
    newArr = []
    return newArr;
  }
  if (arr.length >=3 && arr.length % 2 === 0) {
    newArr = [arr[(arr.length / 2) - 1], arr[arr.length / 2]];
    return newArr
  } else {
    newArr = [arr[Math.floor(arr.length / 2)]];
    return newArr
  }
};

module.exports = middle