//Assert Equal Function
let emoji = String.fromCodePoint(128512);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//findKeyByValue code:
const findKeyByValue = function(objectName, valueName) {
  const keysInObject = Object.keys(objectName);
  for (let key of keysInObject) {
    let valueOfKey = objectName[key];
    if (valueName === valueOfKey) {
      return key;
    }
  }
};




//Assertions:
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);