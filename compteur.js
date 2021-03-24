ask = prompt("How much secondes to count ?")


var seconde = ask;
var messageAffiche = function () {
  console.log(seconde);
  seconde++;
};
var idIntervalle = setInterval(messageAffiche, 1000)

