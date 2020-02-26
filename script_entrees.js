"use strict";
console.log('OK');

var recettes = [
    {
        titre: "Salade Niçoise", 
        page: "recette_salade_nicoise.html"
    },
    {
        titre: "Tarte aux poireaux", 
        page: "recette_tarte_poireaux.html"
    }
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {
    // Ici on reconstruit nos "li" = éléments de liste
    // Accés recette => recettes[i]
    // Accés titre d'une recette => recettes[i].titre
    // <li><a href="pages_entrees/recette_salade_nicoise.html">Salade Niçoise</a></li>
   html += "<li><a href=\"pages_entrees/" + recettes[i].page + "\">" + recettes[i].titre + "</a></li>";
}

var liste = document.getElementById("liste");
liste.innerHTML = html;