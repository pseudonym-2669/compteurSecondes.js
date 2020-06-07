var seconde = 1;
var messageAffiche = function () {
  console.log(seconde);
  seconde++;
};
var idIntervalle = setInterval(messageAffiche, 1000)


var secondes = 2;
var messageAffiche = function () {
  console.log(secondes);
  secondes++;
};
var idIntervalle = setInterval(messageAffiche, 1000)

var minute = 60;
var messageAffiche = function () {
  console.log(minute);
  minute++;
};
var idIntervalle = setInterval(messageAffiche, 1000)

var TwoMinute = minute*2;
var messageAffiche = function () {
  console.log(TwoMinute);
  TwoMinute++;
};
var idIntervalle = setInterval(messageAffiche, 1000)


var heure = 3600;
var messageAffiche = function () {
  console.log(heure);
  heure++;
};
var idIntervalle = setInterval(messageAffiche, 1000)

var TwoHeure = heure*2;
var messageAffiche = function () {
  console.log(TwoHeure);
  TwoHeure++;
};
var idIntervalle = setInterval(messageAffiche, 1000)

