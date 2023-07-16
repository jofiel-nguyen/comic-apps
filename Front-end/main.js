
function openModal(pdfUrl) {
    var modal = document.getElementById("myModal");
    var modalPdf = document.getElementById("modalPdf");
    
    modal.style.display = "block";
    modalPdf.src = pdfUrl;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    var modalPdf = document.getElementById("modalPdf");
    
    modal.style.display = "none";
    modalPdf.src = "";
  }
  // main.js

// Function to handle the search button click event
function handleSearch() {
  var searchInput = document.getElementById("search-input").value;
  var searchResults = document.getElementById("search-results");

  // Clear previous search results
  searchResults.innerHTML = "";

  // Make API request to search for books/comics
  var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(searchInput);

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Process the API response and display search results
      if (data.totalItems > 0) {
        for (var i = 0; i < data.items.length; i++) {
          var item = data.items[i];
          var title = item.volumeInfo.title;
          var authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : "Unknown Author";
          var thumbnail = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "No Image";

          // Create a card for each search result
          var card = document.createElement("div");
          card.classList.add("search-result-card");

          var image = document.createElement("img");
          image.src = thumbnail;
          image.alt = title;

          var titleElement = document.createElement("h3");
          titleElement.textContent = title;

          var authorElement = document.createElement("p");
          authorElement.textContent = "Author: " + authors;

          card.appendChild(image);
          card.appendChild(titleElement);
          card.appendChild(authorElement);

          searchResults.appendChild(card);
        }
      } else {
        // No search results found
        var message = document.createElement("p");
        message.textContent = "No results found.";
        searchResults.appendChild(message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Add event listener to the search button
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);
