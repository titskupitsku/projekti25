const tarrabox = document.getElementById('tarrabox');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Kuvia kun painaa "Lisää"
const moreImages = [
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
    './Tarrakuvat/pokemontarra.png',
];

let currentIndex = 0;
const imagesPerClick = 8; // kuvien määrä per klikkaus

loadMoreBtn.addEventListener('click', () => {
    const nextImages = moreImages.slice(currentIndex, currentIndex + imagesPerClick);

    nextImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Poketarra";
        img.className = "Tarra-kuva";
        tarrabox.appendChild(img);
    });

    currentIndex += imagesPerClick;

});