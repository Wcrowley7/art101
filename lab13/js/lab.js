// index.js - lab13
// Author: Will Crowley
// Date: November 18th, 2024
// License: Public Domain

function FizzBuzz() {

  for (let i = 1; i <= 200; i++) {
    // check for multiple of 15 first
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 7 == 0) {
      console.log("Boom");
    }  if (str == '') {
   str += i;
    }  
    else {
      str += "!";
    }
    $("output").append("<p>" + str + "</p>")
  }
  
}
FizzBuzz();
