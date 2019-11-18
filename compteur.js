var compteur = 1;
var messageAffiche = function () {
  console.log(compteur);
  compteur++;
};
var idIntervalle = setInterval(messageAffiche, 1000)
