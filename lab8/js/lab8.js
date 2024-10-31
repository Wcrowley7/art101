// index.js - lab8
// Author: Will Crowley
// Date: October 30th, 2024
// License: Public Domain

array = [4,7,9,17,19,21,33,77,81,88,91];
console.log("My array", array);

function isEven(x) {
  var results = (x % 2 == 0);
  return results;
}

console.log("is 1 even? ", isEven(1));
console.log("is 2 even? ", isEven(2));

console.log("myarray: ", array);

var result = array.map(isEven);
console.log("Test of evenness of array:", result);

var result = array.map(function(x) {
  return x ** 0.5;
})

console.log("Squareroot of array:", result);
