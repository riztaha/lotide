//Assert Equal Function
let emoji = String.fromCodePoint(128512);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (str) {
  let result = {}
  for (const char of str) {
    if (char !== " ") {          //Want to remove spaces .. how do I remove the space?
      //console.log(result[char]) 
      if (result[char]) {
        result[char] += 1                       //if char repeats, add value 1 to the key ... why is this only adding 1
      } else {
        result[char] = 1                         //if char displays once, value should only be 1
      }
    }
  }
  console.log(result)
}

countLetters("lighthouse in the house")
assertEqual(countLetters("aa", { a: 2 }))