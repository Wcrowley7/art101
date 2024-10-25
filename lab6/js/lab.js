/*
 * Author: Will Crowley
 * Created: 24 October, 2024
 * License: Public Domain
 */


myTransport = ["Ford Transit", "bike", "Walk", "Skateboard"];

myMainRide = {
  make: "Ford",
  model: "Transit",
  color: "white",
  year: 2016,

  age: function() {
    return 2024 - this.year;
  }
}

document.writeln("Getting Around: " + myTransport[1] + "</br>");

document.writeln("myMainRide: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
  
