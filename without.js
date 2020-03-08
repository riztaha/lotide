const eqArrays = function (a, b) {
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

const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log("The two arrays are equal!");
  } else {
    console.log("The two arrays are NOT EQUAL!");
  }
}


const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    let exists = false;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        exists = true;
      } 
    }
    if (!exists) {
      newArr.push(source[i])
    }
  }
  return newArr;
}

    // for (let x = 0; x < itemsToRemove.length; x++) {
    //   if (source[i] !== itemsToRemove[x]) {
    //     newsource.push(x);
    //   }
    //   return newsource
    // }
 

//   newsource.push(source[element])
// }
// }
// for (let i = 0; i < source.length; i++) {
// }
// console.log(newsource)
// }
// source.forEach(element => if (source[!remove]) {
//  {newArr.push[element]}
// });

console.log(without([1, 2, 3, 4, 5, 6], [2, 5]))
console.log('_______')

// console.log(for)
// have an array
// have another array that want to remove from original array
// create a new array that will store the original array without the remove array
// for of loop through the remove array to see what elements need to be removed
// for of loop through the arr to see what elements are being removed
// push those elements into the new array.