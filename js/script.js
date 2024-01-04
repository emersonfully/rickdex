const fetchData = (page) => {
  const getCharacterId = (id) =>
    `https://rickandmortyapi.com/api/character/${id}`;

  const charactersPromises = [];
  const charactersPerPage = 10;

  const startIndex = (page - 1) * charactersPerPage + 1;
  const endIndex = startIndex + charactersPerPage - 1;

  for (let i = startIndex; i <= endIndex; i++) {
    charactersPromises.push(
      fetch(getCharacterId(i)).then((response) => response.json())
    );
  }

  Promise.all(charactersPromises).then((characters) => {
    const lisCharacters = characters.reduce((accumulator, character) => {
      let statusClass;
      if (character.status === "Alive") {
        statusClass = "alive";
      } else if (character.status === "Dead") {
        statusClass = "dead";
      } else {
        statusClass = "unknown";
      }

      accumulator += `
        <li class="card">
          <img class="card-image" src="${character.image}"/>
          <h2 class="card-title">${character.id} - ${character.name}</h2>
          <p class="card-subtitle ${statusClass}">${character.status}</p>
          <p class="card-subtitle">${character.origin.name}</p>
          <p class="card-subtitle">${character.location.name}</p>
          <p class="card-subtitle">${character.species}</p>
        </li>`;

      return accumulator;
    }, '');

    const ul = document.querySelector('[data-js="rickdex"]');
    ul.innerHTML = lisCharacters;
  });
};


fetchData(1);

const paginationContainer = document.querySelector('[data-js="pagination"]');
const totalPages = 20; 

for (let i = 1; i <= totalPages; i++) {
  const pageButton = document.createElement('button');
  pageButton.textContent = i;
  pageButton.addEventListener('click', () => fetchData(i));
  paginationContainer.appendChild(pageButton);
}
