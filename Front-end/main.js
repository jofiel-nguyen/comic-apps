// Search Functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', performSearch);

function performSearch() {
  const searchTerm = searchInput.value;
  console.log('Search term:', searchTerm);
  function performSearch() {
    const searchTerm = searchInput.value;
    const comics = [
      { title: 'Comic 1', author: 'John Doe' },
      { title: 'Comic 2', author: 'Jane Smith' },
      { title: 'Comic 3', author: 'Michael Johnson' },
      // Add more comic objects as needed
    ];
  
    // Filter the comics array based on the search term
    const searchResults = comics.filter((comic) => {
      const lowerCaseTitle = comic.title.toLowerCase();
      const lowerCaseAuthor = comic.author.toLowerCase();
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        lowerCaseTitle.includes(lowerCaseSearchTerm) ||
        lowerCaseAuthor.includes(lowerCaseSearchTerm)
      );
    });
  
    // Clear previous search results
    clearSearchResults();
  
    // Display search results in the UI
    displaySearchResults(searchResults);
  }
  function clearSearchResults() {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.style.display = 'none'; // Hide the search results container
  }
  function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    
    // Clear any previous search results
    searchResultsContainer.innerHTML = '';
  
    // Iterate over the results array and create HTML elements for each search result
    results.forEach((result) => {
      // Create the necessary HTML elements
      const resultItem = document.createElement('div');
      resultItem.classList.add('search-result');
      
      const titleElement = document.createElement('h3');
      titleElement.textContent = result.title;
  
      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${result.author}`;
  
      // Append the elements to the search results container
      resultItem.appendChild(titleElement);
      resultItem.appendChild(authorElement);
      searchResultsContainer.appendChild(resultItem);
    });
  }
  
  
}

// Comic Card Click Event
const comicCards = document.querySelectorAll('.comic-card');

comicCards.forEach((card) => {
  card.addEventListener('click', handleCardClick);
});

function handleCardClick(event) {
  const clickedCard = event.currentTarget;
  // Get the necessary information from the clicked card
  const comicTitle = clickedCard.querySelector('h3').textContent;
  const comicAuthor = clickedCard.querySelector('p').textContent;
  // Perform actions based on the clicked card, such as displaying details or navigating to a new page
  console.log('Clicked Comic:', comicTitle);
  console.log('Author:', comicAuthor);
  // Add your card click logic here
}
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
  