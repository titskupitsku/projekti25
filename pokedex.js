const pokemonData = {
    "0001": {
      name: "Bulbasaur",
      page: "pokemonsivut/0001bulbasaur.html",
      image: "pokedex-kuvat/pokemon_icon_001_00.png",
      type: "Poison"
    },
    "0002": {
      name: "Ivysaur",
      page: "pokemonsivut/0002venusaur.html",
      image: "pokedex-kuvat/pokemon_icon_002_00.png",
      type: "Grass - Poison"
    },
    "0003": {
      name: "Venusaur",
      page: "pokemonsivut/0003ivysaur.html",
      image: "pokedex-kuvat/pokemon_icon_003_00.png",
      type: "Grass - Poison"
    },
    "0004": {
      name: "Charmander",
      page: "pokemonsivut/0004charmander.html",
      image: "pokedex-kuvat/pokemon_icon_004_00.png",
      type: "Fire"
    },
    "0005": {
      name: "Charmeleon",
      page: "pokemonsivut/0005charmeleon.html",
      image: "pokedex-kuvat/pokemon_icon_005_00.png",
      type: "Fire"
    },
    "0006": {
      name: "Charizard",
      page: "pokemonsivut/0006charizard.html",
      image: "pokedex-kuvat/pokemon_icon_006_00.png",
      type: "Fire - Flying"
    }
  };
const pokeItems = document.querySelectorAll('.poke-show');
  pokeItems.forEach(item => {
    item.addEventListener('click', () => {
      pokeItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const id = item.id || item.textContent.match(/#(\d{4})/)[1];
      const data = pokemonData[id];

      document.getElementById('poke-name').innerHTML = `<p><a href="${data.page}"class="poke-link">${data.name}</a></p>`;
      document.getElementById('poke-preview').innerHTML = `<img src="${data.image}" alt="${data.name}"/>`;
      document.getElementById('poke-type').innerHTML = `<p>${data.type}</p>`;
    });
  });


