const pokemonData = {
    "001": {
      name: "Bulbasaur",
      page: "pokemonsivut/0001bulbasaur.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_001_00.png",
      type: "Seen: 452 <br> Owned: 309",
    },
    "002": {
      name: "Ivysaur",
      page: "pokemonsivut/0002ivysaur.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_002_00.png",
      type: "Seen: 43 <br> Owned: 18"
    },
    "003": {
      name: "Venusaur",
      page: "pokemonsivut/0003venusaur.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_003_00.png",
      type: "Seen: 15 <br> Owned: 4"
    },
    "004": {
      name: "Charmander",
      page: "pokemonsivut/0004charmander.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_004_00.png",
      type: "Seen: 82 <br> Owned: 67"
    },
    "005": {
      name: "Charmeleon",
      page: "pokemonsivut/0005charmeleon.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_005_00.png",
      type: "Seen: 62 <br> Owned: 16"
    },
    "006": {
      name: "Charizard",
      page: "pokemonsivut/0006charizard.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_006_00.png",
      type: "Seen: 7 <br> Owned: 3"
    },
    "007": {
      name: "Squirtle",
      page: "pokemonsivut/0007squirtle.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_007_00.png",
      type: "Seen: 142 <br> Owned: 89"
    },
    "008": {
      name: "Wartortle",
      page: "pokemonsivut/0008wartortle.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_008_00.png",
      type: "Seen: 41 <br> Owned: 6"
    },
    "009": {
      name:"Blastoise",
      page: "pokemonsivut/0009blastoise.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_009_00.png",
      type: "Seen: 1 <br> Owned: 0"
    },
    "010": {
      name:"Caterpie",
      page: "pokemonsivut/0010caterpie.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_010_00.png",
      type: "Seen: 77 <br> Owned: 25"
    },
    "011": {
      name:"Metapod",
      page: "pokemonsivut/0011metapod.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_011_00.png",
      type: "Seen: 70 <br> Owned: 43"
    },
    "012": {
      name:"Butterfree",
      page: "pokemonsivut/0012butterfree.html",
      image: "pokedex-kuvat/gen1_chars/pokemon_icon_012_00.png",
      type: "Seen: 3 <br> Owned: 2"
    },
  };
const pokeItems = document.querySelectorAll('.poke-show');
  pokeItems.forEach(item => {
    item.addEventListener('click', () => {
      pokeItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const id = item.id || item.textContent.match(/#(\d{3})/)[1];
      const data = pokemonData[id];

      document.getElementById('poke-name').innerHTML = `<p><a href="${data.page}"class="poke-link">${data.name}</a></p>`;
      document.getElementById('poke-preview').innerHTML = `<img src="${data.image}" alt="${data.name}"/>`;
      document.getElementById('poke-type').innerHTML = `<p>${data.type}</p>`;
    });
  });

document.addEventListener('DOMContentLoaded', function () { //call function
  const portal = document.getElementById('pokeportal');
  let lastPortal = null;
  function showPortalBorder(target) {
    const rect = target.getBoundingClientRect(); //return the size of an element and its posi --> how we get the right size for the overflowing border
    const list = target.closest('.poke-list'); //find container
    if (!list) return;
    const listRect = list.getBoundingClientRect(); //overflow correctly only on fully visible items
    if (
      rect.top < listRect.top || 
      rect.bottom > listRect.bottom
    ) {
      if (lastPortal) lastPortal.remove();
      lastPortal = null;
      return;
    }
    // yeet old border v
    if (lastPortal) lastPortal.remove();
    // new border v
    const border = document.createElement('div');
    border.className = 'pokeportal-border';
    border.style.top = rect.top + 'px';
    border.style.left = rect.left + 'px';
    border.style.width = rect.width + 'px';
    border.style.height = rect.height + 'px';
    portal.appendChild(border);
    lastPortal = border;
  } // positioning the border correctly according to the list items so it overflows the parent element, since browsers don't allow that for css in child elements :-)
  function hidePortalBorder() {
    if (lastPortal) lastPortal.remove();
    lastPortal = null;
  }
  // how the border activates
  document.querySelectorAll('.poke-show').forEach(item => {
    item.addEventListener('mouseenter', () => showPortalBorder(item));
    item.addEventListener('mouseleave', hidePortalBorder);
  });

//portal posi, prevent misalignment + resize incase of window sizing
  window.addEventListener('scroll', hidePortalBorder, true);
  window.addEventListener('resize', hidePortalBorder);
});
