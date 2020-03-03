"use strict";
console.log('OK');

var recettes = [
    {
        titre: "Salade Niçoise", 
        page: "recette_salade_nicoise.html",
        image: "salade.jpg",
        description: "Fraîche, très parfumée, savoureuse au mille saveurs tout autant que simple, telle est la salade niçoise. A consommer sans modération en été, pour profiter des bons produits frais.",
        personnes: 4,
        temps: 28,
        difficulte: 0,
        cout: 1,
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "Pour réaliser la salade niçoise, il suffit de rassembler tous les ingrédients, puis de procéder de la manière suivante...///Faire durcir les oeufs (6 à 8 minutes après ébullition de l'eau), puis les faire bien refroidir à l'eau froide.///Hacher les cébettes et les disposer au fond du plat.///Ajouter les févettes, le poivron vert finement coupé, les radis coupés en rondelles et le thon bien égouté et émietté. Mélanger grossièrement tous ces ingrédients avec du sel et du poivre.///Couper les tomates en fines rondelles et les ajouter. Couper les oeufs durs en quartiers et les disposer sur le dessus et ajouter les filets d'anchois, les olives noires et le basilic finement ciselé.///Enfin, saupoudrer de sel et de poivre, puis arroser d'huile d'olive et de vinaigre de vin.///Mettre au frais 1 heure et bien mélanger la salade juste avant de la servir."
    },
    {
        titre: "Tarte aux poireaux", 
        page: "recette_tarte_poireaux.html",
        image: "tarte.jpg",
        description: "Servir avec une salade verte.",
        personnes: 6,
        temps: 50,
        difficulte: 0,
        cout: 1, 
        ingredients: "250 g de farine///140 g de beurre///2 cuillères à soupe d'eau///3 poireaux///400 g de lardons///3 oeufs///100 g de fromage râpé///25 cl de crème fraîche///Poivre///Sel",
        etapes: "Préchauffer le four à 210°C (thermostat 7).///Faire la pâte à tarte : malaxer le beurre et la farine, l'eau, étaler puis mettre dans le plat.///Émincer les poireaux.///Les faire dorer dans un peu de beurre.///Faire dorer les lardons à part.///Les égoutter soigneusement avant de les ajouter aux poireaux.///Faire l'appareil : mêler les oeufs, la crème, le sel et le poivre.///Étaler les poireaux et les lardons sur la pâte.///Parsemer de gruyère râpé, couvrir avec l'appareil.///Mettre au four 25 min."
    }
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {
    // Ici on reconstruit nos "li" = éléments de liste
    // Accés recette => recettes[i]
    // Accés titre d'une recette => recettes[i].titre
    // <li><a href="pages_entrees/recette_salade_nicoise.html">Salade Niçoise</a></li>
   html += "<li class=\"elem\" id=\"rec" + i + "\">" + recettes[i].titre + "</li>";
}

var liste = document.getElementById("liste");
liste.innerHTML = html;


/* Fonctionnalité modale */

var container = document.getElementById("rec_container");
container.addEventListener("click", (e) => {
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

    var element = document.getElementById('recette');
    element.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    var recetteHtml = "";
    recetteHtml += "<img src=\"../img/" + recettes[index].image + "\">";
    recetteHtml += "<div class=\"description\">";
    recetteHtml += "<h2>" + recettes[index].titre + "</h2>";
    recetteHtml += "<p>" + recettes[index].description + "</p>";
    recetteHtml += "<table><tr><th>Personnes</th><th>Temps</th><th>Difficulté</th><th>Coût</th></tr><tr>";
    recetteHtml += "<td>" + recettes[index].personnes + "</td>";
    recetteHtml += "<td>" + recettes[index].temps + "</td>";
    recetteHtml += "<td>" + recettes[index].difficulte + "</td>";
    recetteHtml += "<td>" + recettes[index].cout + "</td>";
    recetteHtml += "</tr></table>";
    recetteHtml += "</div><div class='contenu'><div class='ul'><h2>Ingrédients</h2>";
    recetteHtml += formatLst(recettes[index].ingredients, "ul");
    recetteHtml += "</div><div class='ol'><h2>Etapes</h2>";
    recetteHtml += formatLst(recettes[index].etapes, "ol");
    recetteHtml += "</div></div>";

    element.innerHTML = recetteHtml;
}

function formatLst(strToTab, type) {

    var tab = strToTab.split("///");
    var listHtml = "<" + type + ">";
    var max = tab.length;
    for(var i = 0; i < max; i++) {
        listHtml += "<li>" + tab[i] + "</li>";
    }

    listHtml += "</" + type + ">";
    
    return listHtml;
}

/* Fonctionnalité "Ajouter une nouvelle recette" */ 

// 1. Récupérer l'élément formulaire (et l'afficher en console)
var formulaire = document.getElementById("formAjout");
console.log(formulaire);

// 2. Ajouter un listener sur son évènement submit (et afficher en console "Le formulaire a été soumis")
// 3. Lorsque que le formulaire est soumis, afficher en plus dans la console, l'élément input pour la saisie du titre
// 4. Afficher la valeur de cet élément (toujours lors de la soumission du formulaire)
// 5. Stocker cette valeur dans une variable "titre"
// 6. Répéter l'opération avec les valeurs de tous les champs

formulaire.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    var titre = document.getElementsByName("titre")[0].value;
    //document.getElementById("titre").value = "";
    //console.log(titre);

    var description = document.getElementsByName("description")[0].value;
    //document.getElementById("description").value = "";
    //console.log(description);

    var personnes = parseInt(document.getElementsByName("nbPers")[0].value);
    //document.getElementById("personnes").value = "";
    //console.log(personnes);

    var temps = parseInt(document.getElementsByName("temps")[0].value);
    //document.getElementById("temps").value = "";
    //console.log(temps);

    var image = document.getElementsByName("image")[0].value;
    //document.getElementById("image").value = "";
    //console.log(image);

    var ingredients = document.getElementsByName("ingredients")[0].value;
    //document.getElementById("ingredients").value = "";
    //console.log(ingredients);

    var etapes = document.getElementsByName("etapes")[0].value;
    //document.getElementById("etapes").value = "";
    //console.log(etapes);

    var couts = document.getElementsByName("cout");
    var cout = 0;
    for(let el of couts) {
        if(el.checked) {
            cout = parseInt(el.value);
        }
    }
    //console.log(couts);
    //console.log(cout);

    var difficultes = document.querySelectorAll("#difficulte option");
    var difficulte = 0;
    for(let el of difficultes) {
        if(el.selected) {
            difficulte = parseInt(el.textContent);
        }
    }
    //console.log(difficultes);
    //console.log(difficulte);

    var recette = {

    }
    console.log(recette);
});