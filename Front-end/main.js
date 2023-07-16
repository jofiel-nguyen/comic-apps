// Search Functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', performSearch);

function performSearch() {
  const searchTerm = searchInput.value;
  // Perform search operations based on the search term
  // Update the UI with the search results
  console.log('Search term:', searchTerm);
  // Add your search logic here
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
