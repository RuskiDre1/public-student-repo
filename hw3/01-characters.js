// 01-characters.js

// URL for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

// Fetch the character data from the Thrones API
fetch(url)
  .then(response => response.json())
  .then(characters => {
    // Call the function to display the characters on the page
    displayCharacters(characters);
  })
  .catch(error => {
    console.error('Error fetching character data:', error);
  });

// Function to display each character on the page
function displayCharacters(characters) {
  const charactersContainer = document.getElementById('characters-container');
  const characterTemplate = document.getElementById('character-template');

  // Loop through the characters and create elements for each one
  characters.forEach(character => {
    const characterElement = characterTemplate.content.cloneNode(true);

    // Populate the character card with character data
    const cardImg = characterElement.querySelector('.card-img-top');
    cardImg.src = character.imageUrl;
    cardImg.alt = `Picture of ${character.fullName}`;

    const cardTitle = characterElement.querySelector('.card-title');
    cardTitle.textContent = character.fullName;

    const cardText = characterElement.querySelector('.card-text');
    cardText.textContent = character.title;

    // Append the populated character card to the container
    charactersContainer.appendChild(characterElement);
  });
}
