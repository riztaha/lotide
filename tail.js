
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
