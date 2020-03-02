// FUNCTION IMPLEMENTATION
let emoji = String.fromCodePoint(128512);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const head = function(arr){
  if (arr.length === 1) {
    return arr
  } else if (arr.length > 1) {
    return arr[0]
  }
  else { return "undefined" }
}


// TEST CODE
assertEqual(head([5,6,7]), 5); //pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //pass
assertEqual(head([1,2,3]), 5); //should fail
assertEqual(head([]), 5); //should return undefined 
