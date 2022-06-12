const formName = document.querySelector('input[type="text"]');
const formPlanet = document.querySelector("select");
const form = document.querySelector("form");
const recap = document.getElementById("recap");

let pseudo = "";
let planet = "";

formName.addEventListener("input", function(e) {
    pseudo = e.target.value;
})
formPlanet.addEventListener("input", function(e) {
    planet = e.target.value;
})
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (cgv.checked) {
        recap.innerHTML =
        `<h4>Nom : ${pseudo}</h4>
         <h4>Planète sélectionnée : ${planet}</h4>
         <h5>Bon voyage !</h5>`;
    }
    else {
        alert("Veuillez accepter les Conditions Générales de Vente");
    }
});