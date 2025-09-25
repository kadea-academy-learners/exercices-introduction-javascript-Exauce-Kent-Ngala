// Exercice 9
// Écrivez votre code ici
// Valeur totale de l'héritage

// Declaration des variables

let maison = 6000000;
let terrains = 4000000;
let liquidites = 2000000;
 let totalHeritage = maison + terrains + liquidites;

 // Première categorie

let partPremiereCategorie = totalHeritage * 0.75;
let partEnfant = partPremiereCategorie / 3;
let partEric = partEnfant / 2;
let partClaire = partEnfant / 2;

// Deuxième catégorie
let partDeuxiemeCate = totalHeritage * 0.25;
let partConjointFrereNiece = partDeuxiemeCate / 3;

// Affichage resultat des parts
console.log("Paul :" + partEnfant + "CDF");
console.log("Marie :" + partEnfant + "CDF");
console.log("Eric :" + partEric + "CDF");
console.log("Claire :" + partClaire + "CDF");
console.log("Madame Mukuna :" + partConjointFrereNiece + "CDF");
console.log("Joseph :" + partConjointFrereNiece + "CDF");
console.log("Sarah :" + partConjointFrereNiece + "CDF");


