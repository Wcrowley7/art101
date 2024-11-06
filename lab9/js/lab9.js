// index.js - lab9
// Author: Will Crowley
// Date: October 30th, 2024
// License: Public Domain

$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
    $(this).parent().toggleClass("special");

});



$("#problems").append("<button id='button-problems'>Make Special</button>");

$("#button-problems").click(function(){
$("#problems").toggleClass("special");
});


$("#Results").append("<button id='button-results'>Make Special</button>");

$("#button-Results").click(function(){
$("#Results").toggleClass("special");
});
