const takeUntil = function(array, callback) {
  let answer = [];
  for (let element in array) {
    answer.push(array[element]);
    if (callback(array[element])) {
      return answer.slice(0, element);
    } else {
      element++;
    }
  }
  // console.log(element, array[element])
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const eqArrays = function(a, b) {
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
 
const assertArraysEqual = function(a, b) {
  if (eqArrays(a,b)) {
    console.log("The two arrays are equal!");
  } else {
    console.log("The two arrays are NOT EQUAL!");
  }
};

let data3 = ['Hi', 'my', 'name', 'is', 'not', 'Taha'];
assertArraysEqual(takeUntil(data3, x => x === 'not'), ['Hi', 'my', 'name', 'is']);