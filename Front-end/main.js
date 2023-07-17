
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
  //Handle for Search
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
          var previewLink = item.volumeInfo.previewLink;

          // Create a link element around each search result card
          var link = document.createElement("a");
          link.href = previewLink;
          link.target = "_self"; 
          link.classList.add("search-result-link");

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

          link.appendChild(card);
          searchResults.appendChild(link);
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
//Popular Book
// Add event listener to the search button
var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);
const apiKey = 'AIzaSyBMAujdF-hgQ4Vgax5pFHQgELyycP3tmW4';

// Fetch popular comics data
const popularComicsApiUrl = `https://www.googleapis.com/books/v1/volumes?q=comics&key=${apiKey}`;
fetch(popularComicsApiUrl)
  .then(response => response.json())
  .then(data => {
    const popularComicsGrid = document.getElementById('popular-comics-grid');
    data.items.forEach(item => {
      const comicCard = createComicCard(item);
      const link = createLink(item.volumeInfo.previewLink);
      link.appendChild(comicCard);
      popularComicsGrid.appendChild(link);
    });
  })
  .catch(error => {
    console.error('Error fetching data for popular comics:', error);
  });

// Fetch latest releases data
const latestReleasesApiUrl = `https://www.googleapis.com/books/v1/volumes?q=latest&key=${apiKey}`;
fetch(latestReleasesApiUrl)
  .then(response => response.json())
  .then(data => {
    const latestReleasesGrid = document.querySelector('.latest-releases .comic-grid');
    data.items.forEach(item => {
      const comicCard = createComicCard(item);
      const link = createLink(item.volumeInfo.previewLink);
      link.appendChild(comicCard);
      latestReleasesGrid.appendChild(link);
    });
  })
  .catch(error => {
    console.error('Error fetching data for latest releases:', error);
  });

// Function to create a comic card element
function createComicCard(item) {
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

  return comicCard;
}
// Function to create a link element
function createLink(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_self'; // Open the link in the same web page
  link.classList.add('comic-card-link');
  return link;
}
