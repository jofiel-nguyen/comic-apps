// Define the API URL for fetching action comics
const apiKey = 'AIzaSyBMAujdF-hgQ4Vgax5pFHQgELyycP3tmW4';
const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=action&key=${apiKey}`;

// Fetch action comics data from the Google Books API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const actionComicsContainer = document.getElementById('content');

    // Loop through the fetched items and create comic cards with clickable links
    data.items.forEach(item => {
      const comicCard = document.createElement('div');
      comicCard.classList.add('comic-card');

      const thumbnail = item.volumeInfo.imageLinks?.thumbnail || 'placeholder.jpg';
      const title = item.volumeInfo.title || 'Unknown Title';
      const authors = item.volumeInfo.authors || ['Unknown Author'];

      const link = document.createElement('a');
      link.href = item.volumeInfo.previewLink;
      link.target = '_self'; 
      link.classList.add('comic-card-link');

      const image = document.createElement('img');
      image.src = thumbnail;
      image.alt = title;

      const titleElement = document.createElement('h3');
      titleElement.textContent = title;

      const authorElement = document.createElement('p');
      authorElement.textContent = 'Author: ' + authors.join(', ');

      link.appendChild(image);
      link.appendChild(titleElement);
      link.appendChild(authorElement);
      comicCard.appendChild(link);

      actionComicsContainer.appendChild(comicCard);
    });
  })
  .catch(error => {
    console.error('Error fetching data from Google Books API:', error);
  });
