"use strict";
console.log('OK');

var recettes = [
    {
        titre: "Salade Niçoise", 
        page: "recette_salade_nicoise.html",
        image: "salade.jpg"
    },
    {
        titre: "Tarte aux poireaux", 
        page: "recette_tarte_poireaux.html",
        image: "tarte.jpg"
    }
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {
    // Ici on reconstruit nos "li" = éléments de liste
    // Accés recette => recettes[i]
    // Accés titre d'une recette => recettes[i].titre
    // <li><a href="pages_entrees/recette_salade_nicoise.html">Salade Niçoise</a></li>
   html += "<li class=\"elem\" id=\"rec" + i + "\">" + recettes[i].titre + "</a></li>";
}

var liste = document.getElementById("liste");
liste.innerHTML = html;


/* Fonctionnalité modale */

var container = document.getElementById("rec_container");
container.addEventListener("click", () => {
    container.style.display = "none";
});

var elems = document.getElementsByClassName("elem");
var len = elems.length;
for(var i = 0; i < len; i++) {
    elems[i].addEventListener("click", (event) => {
        event.preventDefault();
        var index = parseInt(event.target.id.substring(3));
        showRecette(index);
    });
}

function showRecette(index) {
    console.log("Vous avez demandé la recette " + recettes[index].titre);
    container.style.display = "block";
}