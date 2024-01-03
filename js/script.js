const fetchData = () => {
  const url = "https://rickandmortyapi.com/api/character";

  fetch(url)
    .then((response) => response.json())
    .then((character) => {
      console.log(character);
    });
};

fetchData();
