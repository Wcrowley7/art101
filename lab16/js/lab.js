// index.js - lab16
// Author: Will Crowley
// Date: December 2nd, 2024
// License: Public Domain

$(document).ready(function () {
  // URL of the XKCD API
  const apiUrl = "https://xkcd.com/info.0.json";

  // Make AJAX request to fetch comic data
  $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (comicObj) {
          // Process and display the comic
          const outputDiv = $("#output");
          const comicTitle = `<h3>${comicObj.title}</h3>`;
          const comicImg = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
          
          outputDiv.html(comicTitle + comicImg);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error fetching the comic:", textStatus, errorThrown);
      }
  });
});
