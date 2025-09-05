const Button = document.getElementById("AvaaLisää");
const Näytä = document.getElementById("Avaa");

Button.addEventListener("click", event => {
   
    //Display thingy
    if(Näytä.style.display === "none"){
        Näytä.style.display = "grid";
        Button.textContent = "Hide";
    }
    else{
        Näytä.style.display = "none";
        Button.textContent = "Show";
    }
   
   //Visibility asiat
    if(Näytä.style.visibility === "hidden"){
        Näytä.style.visibility = "visible";
        Button.textContent = "Hide";
    }
    else{
        Näytä.style.visibility = "hidden";
        Button.textContent = "Show";
    }
});


