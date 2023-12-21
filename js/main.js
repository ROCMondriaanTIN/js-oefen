console.log('Main loaded');

const container = document.querySelector('.container');


//fetch function to fetch data from anime API (in this case about the show 'One Piece')
fetch('https://api.jikan.moe/v4/anime?q=one piece&sfw')
  .then(myData => myData.json())
  .then(myJsonData => showCards(myJsonData));

  //this function shows the cards on the page and updates the borders
function showCards(myJsonData) {
  console.log(myJsonData);
  const animeArray = myJsonData.data;
  for (let i = 0; i < animeArray.length; i++) {
    const anime = animeArray[i];
    //card is created here and the title of the anime show and image are passed to the function
    const card = createCard(anime.title, anime.images.jpg.image_url);
    //adding the card to the container 
    container.innerHTML += card;
  }
  //calling the function to update the borders of each card
  updateCardsBorderColor();
}

//this function creates a single card and returns the HTML code
function createCard(title, imageLink) {
  const card = `
    <div class="card">
      <h2>${title}</h2>
      <img src="${imageLink}" />
    </div>
  `;

  return card;
}

/*this function updates the border of each card found on the page
in case i is even the 'card-even' class is added to the card with classlist
in case i is odd the 'card-odd' class is added to the card with classlist
*/
function updateCardsBorderColor() {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    //modulo is used here to determine whether i is odd or even
    if (i % 2 === 0) {
      card.classList.add('card-even');
    } else {
      card.classList.add('card-odd');
    }
  }

}