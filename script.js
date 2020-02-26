"use strict";
console.log('OK');
/*
// 1. Récupérer et afficher en console un des sous-menus en fonction de son id
var elem = document.getElementById('menuentrees');
console.log(elem);

// 2. Récupérer tous les éléments qui ont la classe 'sous-menu'
var sousMenus = document.getElementsByClassName('sous-menu');
console.log(sousMenus);

// 3. Récupérer toutes les listes (ul)
var listes = document.getElementsByTagName('ul');
console.log(listes);

// 4. Récupérer les éléments de liste qui sont dans les listes .sous-menu
var sousLis = document.querySelectorAll('.sous-menu li');
console.log(sousLis);*/

var titre = document.getElementsByTagName('h2');

var max = titre.length;

for(var i = 0; i < max; i++) {
    titre[i].style.color = "red";
}

