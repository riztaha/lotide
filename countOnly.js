// We have a bunch of legos
// We want to build a racecare with the legos
// We need certain legos to build the racecare from the pile
// We need to make sure we have the legos we need are in the pile.

//x We have to create a new object
// We have to view through the object and look for the trues
// We have to vew through the array and see how many trues exists

//Assert Equal Function
let emoji = String.fromCodePoint(128512);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(emoji + ' ' + emoji + ' ' + emoji + ` Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

 // countOnly.....
 // allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//const object = person["firstName"]

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (const i of allItems) {
    if (itemsToCount[i]) {
      console.log(i)
    if (result[i]) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  }
    // if (Object.keys(itemsToCount) === i) {
    //   result[i] += 1
    // }
  }
  return result
}




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);