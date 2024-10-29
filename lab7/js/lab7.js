// index.js - lab7
// Author: Will Crowley
// Date: October 28th, 2024
// License: Public Domain


function sortUserName() {
  var userName = window.prompt("Hi! Please tell me your name so I can fix it.");
  console.log("userName = ", userName);
  
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);
 
  return nameSorted;

}


  // Output
document.writeln("I sorted your name. Here: ");
document.writeln(sortUserName() + "</br>");
