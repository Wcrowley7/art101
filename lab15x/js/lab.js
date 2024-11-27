// index.js - lab15
// Author: Will Crowley
// Date: November 25th, 2024
// License: Public Domain


$(document).ready(function () {
  // Attach a click event to the button
  $('#yesnoButton').click(function () {
      // Make the AJAX request
      $.ajax({
          // Correct API URL
          url: "https://yesno.wtf/api",
          // No additional data required
          data: {},
          // GET request
          type: "GET",
          // Expecting JSON data
          dataType: "json",
          // Success callback
          success: function (data) {
              console.log(data);

              // Display the result
              $('#response').html(`
                  <p>Answer: <strong>${data.answer.toUpperCase()}</strong></p>
                  <img src="${data.image}" alt="${data.answer}" style="max-width:300px;"/>
              `);
          },
          // Error callback
          error: function (jqXHR, textStatus, errorThrown) {
              console.error("Error:", textStatus, errorThrown);
              $('#response').text("Failed to fetch the Yes/No response. Please try again.");
          }
      });
  });
});