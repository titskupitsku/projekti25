const Button = document.getElementById("AvaaLisää");
const Näytä = document.getElementById("Avaa");

Button.addEventListener("click", event => {
   
    //Display thingy
    if (Näytä.style.display === "none" || Näytä.style.display === "") {
        Näytä.style.display = "grid";
        Button.textContent = "Hide";
    } else {
        Näytä.style.display = "none";
        Button.textContent = "Show";
    }
});


//Haku jutut
document.getElementById('hakutarra').addEventListener('input', function(e) {
    const search = e.target.value.toLowerCase();
   
document.querySelectorAll('.Tarra-kuva').forEach(img => {

      if (img.alt.toLowerCase().includes(search)) {
        img.style.display = '';
    } else {
        img.style.display = 'none'; }
});
});

// Event tab jutut
function open(){}   

document.querySelectorAll('.Tarra-kuva').forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener('click', function() {
        const imagepop = document.getElementById('imgpoptarra');
        const tarrai = document.getElementById('tar-img');
        const caption = document.getElementById('imgtarraotsikko');
        imagepop.style.display = "block";
        tarrai.src = img.src;
        caption.textContent = img.alt;
    });
});



