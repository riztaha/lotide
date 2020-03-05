
// Testing to see if two arrays are equal
const eqArrays = function(a, b) {
   if (a.length !== b.length) {
     return false;
   }
   for (let i = 0; i < a.length; i++) {
     if (a[i] !== b[i]) {
       return false;
     }
   }
   return true;
 }
 
 //Assertion to see if the two arrays are equal
 const assertArraysEqual = function(a, b) {
   if (eqArrays(a,b)) { console.log("The two elements are equal!")}
   else {console.log("The two elements are NOT EQUAL!")}
 }

// Letter Positions code starts below.

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]
    if (letter !== " ") {
      results[letter] = []
    }
    
  }
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]
    results[letter].push(i)
  }
  return results
};

console.log(letterPositions("hello"))

assertArraysEqual(letterPositions("hhh"), { h: [0, 1, 2] })
assertArraysEqual(letterPositions("hello").e, [1])

// Mental Map: Create an empty object, for every letter in the sentence, if is it not a space, create an object with values that are arrays