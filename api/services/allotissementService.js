'use strict';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

exports.allotir = function (lots) {

    var arrayLots = [];
    var arrayLotsAllotis = [];

    // Récupération des valeurs des articles pour les places dans un tableau
    for (let index = 0; index < lots.length; index++) {
        arrayLots[index] = parseInt(lots.charAt(index));
    }

    // Tri par articles croissants
    arrayLots.sort();

    // On récupère les articles par ordre décroissant
    while (arrayLots.length > 0) {
        var value = arrayLots.pop();
        var estAlloti = false;
        // Si lot avec de la place disponible, on complète
        for (let index = 0; index < arrayLotsAllotis.length && !estAlloti; index++) {
            const element = arrayLotsAllotis[index];
            if (value + element.reduce(reducer) <= 10){
                // On peut compléter le lot sans dépasser la valeur maximale
                element[element.length] = value;
                estAlloti = true;
            }
        }
        // Si l'article ne rentre dans aucun lot, on recrée un lot
        if (!estAlloti) {
            arrayLotsAllotis[arrayLotsAllotis.length] = [value];
        }
    }

    return arrayLotsAllotis;
}