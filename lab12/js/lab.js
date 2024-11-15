// index.js - lab12
// Author: Will Crowley
// Date: November 11th, 2024
// License: Public Domain

function sortingHatLength(str) {
len = str.length;
let mod = len % 4;

if (mod == 0) {
  return "Gryffindor"
}
else if (mod == 1){
  return "Ravenclaw"
}
else if (mod == 2){
  return "Slytherin"
}
else if (mod == 3){
  return "Hufflepuff"
}
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
var name = document.getElementById("input").Value;
var house = sortingHat(name);
newText = "<p>The Sorting Hat has sorted you into " + houser + "</p>";
document.getElementById("output").innerHTML = newText;
})
