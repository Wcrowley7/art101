// index.js - lab11
// Author: Will Crowley
// Date: November 11th, 2024
// License: Public Domain

function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

$("#submit").click(function(){
});

const userName = $("#user-name").val();

userNameSorted = sortString(userName);

$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');