const fetchData = () => {
  const getCharacterId = (id) =>
    `https://rickandmortyapi.com/api/character/${id}`;

  const charactersPromises = [];

  for (let i = 1; i <= 20; i++) {
    charactersPromises.push(
      fetch(getCharacterId(i)).then((response) => response.json())
    );
  }

  Promise.all(charactersPromises).then((characters) => {

    const lisCharacters = characters.reduce((accumulator, character) => {
      accumulator += `
      <li class="card">
        <img class="card-image" src=${character.image}/>
          <h2 class="card-title">${character.id} - ${character.name}</h2>
          <p>${character.status}</p>
      </li>`
      return accumulator
    }, '')

    const ul = document.querySelector('[data-js="rickdex"]')

    console.log(lisCharacters)
  });
};

fetchData();
