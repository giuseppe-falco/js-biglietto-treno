//richiedo nome cliente
var name = prompt("Come si chiama?");
var infoName = "Gentile, " + name;
console.log(infoName);

//richiedo eta passeggero con controllo numerico
var age;
  age = parseInt(prompt("Quanti anni ha?"));
while (isNaN  (age)){
  age = prompt("Ops, hai sbagliato qualcosa! Riprova");
}

var infoAge = "Età: " + age;
var min, max;
console.log(infoAge);

if (age < 18) {
  infoAge = min = "Non sei ancora maggiorenne!"
} else if (age >=65) {
  infoAge = max = "Sei più che maggiorenne!"
}
console.log(infoAge);


//richiedo destinazione
var city = prompt("Dove vuole andare?");
var infoCity = "Destinazione: " + city;
console.log(infoCity);

//richiedo numero di km con controllo numerico
var km
  km = parseInt(prompt("Quanti km sono?"))
while (isNaN(km)){
  km = prompt("Ops, hai sbagliato qualcosa! Riprova");
}

var infoKm = "KM: " + km;
console.log(infoKm);

//calcolo prezzo piglietto
var price = 0.21 * km;
console.log("Il prezzo senza sconto è " + price)
//sconto
if (infoAge = min){
  price = (price * 0.8).toFixed(2);
} else if (infoAge = max){
  price = (price * 0.6).toFixed(2);
}
console.log("Il prezzo scontato è " + price)
//prezzo finale biglietto
