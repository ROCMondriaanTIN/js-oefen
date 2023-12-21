console.log('Main loaded');

const container = document.querySelector('.container');

fetch('https://api.jikan.moe/v4/anime?q=one piece&sfw')
.then(myData => myData.json())
.then(myJsonData => showInConsole(myJsonData));

function showInConsole(myJsonData){
  console.log(myJsonData);
  const animeArray = myJsonData.data;
  for (let i = 0; i < animeArray.length; i++) {
    const anime = animeArray[i];
    const card = createCard(anime.title, anime.images.jpg.image_url);
    container.innerHTML += card;
    
  }
}

function createCard(title, imageLink){
  const card = `
    <div class="card">
      <h2>${title}</h2>
      <img src="${imageLink}" />
    </div>
  `;

  return card;
}