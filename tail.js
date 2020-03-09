
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  if (arr.length) {
    let lastIndex = arr.length - 1
    return arr[lastIndex]
  }
  
  // const newArr = [];
  // for (let i = 1; i < arr.length; i++) {
  //   let result = arr[i]; // Hello
  //   newArr.push(result);
  // }
  // if
  
  // return newArr;
};




module.exports = tail
