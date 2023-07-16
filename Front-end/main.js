
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
// Make sure to replace 'YOUR_API_KEY' with your actual Google Books API key
const apiKey = 'AIzaSyDzj3i_4Ho9MPwpz4dtGO4pJGjt1zQaXDk';
const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=comics&key=${apiKey}`;

// Perform a fetch request to the Google Books API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the response data and generate the comic cards dynamically
    const popularComicsGrid = document.getElementById('popular-comics-grid');
    data.items.forEach(item => {
      const comicCard = document.createElement('div');
      comicCard.classList.add('comic-card');
      
      const thumbnail = item.volumeInfo.imageLinks?.thumbnail || 'placeholder.jpg';
      const title = item.volumeInfo.title || 'Unknown Title';
      const authors = item.volumeInfo.authors || ['Unknown Author'];
      
      comicCard.innerHTML = `
        <img src="${thumbnail}" alt="${title}">
        <h3>${title}</h3>
        <p>Author: ${authors.join(', ')}</p>
      `;
      
      popularComicsGrid.appendChild(comicCard);
    });
  })
  .catch(error => {
    console.error('Error fetching data from Google Books API:', error);
  });
