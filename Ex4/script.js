let listeDesCouleurs = ["blue", "red", "green", "yellow", "orange","grey","white"];

document.addEventListener("click", function(event) {
    a = event.target;
    a.style.color = listeDesCouleurs[Math.floor(Math.random() * listeDesCouleurs.length)]
    
});





