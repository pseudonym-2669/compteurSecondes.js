ask = prompt("combien de secondes à compter ?")


var seconde = ask;
var messageAffiche = function () {
  console.log(seconde);
  seconde++;
};
var idIntervalle = setInterval(messageAffiche, 1000)

