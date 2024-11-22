// index.js - lab13
// Author: Will Crowley
// Date: November 18th, 2024
// License: Public Domain

function FizzBuzz() {

  for (let i = 1; i <= 200; i++) {
    let str = '';
    if (i % 3 == 0) {
      str += "Fizz";
    } 
    if (i % 5 == 0) {
      str += "Buzz";
    } 
    if (i % 7 == 0) {
      str += "Boom";
    }  
    if (str == '') {
   str += i;
    }  
    else {
      str += "!";
    }
    $("output").append("<p>" + str + "</p>")
  }
}
FizzBuzz();
