const pokemonData = {
    "0001": {
      name: "Bulbasaur",
      image: "pokedex-kuvat/pokemon_icon_001_00.png",
      type: "Poison"
    },
    "0002": {
      name: "Ivysaur",
      image: "pokedex-kuvat/0002ivysaur.png",
      type: "Grass/Poison"
    },
    "0003": {
      name: "Venusaur",
      image: "pokedex-kuvat/0003venusaur.png",
      type: "Poison-grass"
    }
  };
const pokeItems = document.querySelectorAll('.poke-show');


  // Add click event to each .poke-show
  pokeItems.forEach(item => {
    item.addEventListener('click', () => {
      pokeItems.forEach(el => el.classList.remove('active'));

      // Add 'active' to clicked one
      item.classList.add('active');


      const id = item.id || item.textContent.match(/#(\d{4})/)[1];
      const data = pokemonData[id];

      // Update name
      document.getElementById('poke-name').innerHTML = `<p>${data.name}</p>`;

      // Update image
      document.getElementById('poke-preview').innerHTML = `<img src="${data.image}" alt="${data.name}" />`;

      // Update type
      document.getElementById('poke-type').innerHTML = `<p>${data.type}</p>`;
    });
  });


