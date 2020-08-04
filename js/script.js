//richiedo nome cliente
var name = prompt("Come si chiama?");
var infoName = "Gentile, " + name;
document.getElementById("html-name").innerHTML = infoName;
//richiedo eta passeggero con controllo numerico
var age;
  age = parseInt(prompt("Quanti anni ha?"));
while (isNaN  (age)){
  age = prompt("Ops, hai sbagliato qualcosa! Riprova");
}

var infoAge = "Età: " + age;
var min, max, standard ;

if (age < 18) {
  infoAge = min = "Non sei ancora maggiorenne! Hai quindi diritto ad uno sconto del 20%!!"
} else if (age >=65) {
  infoAge = max = "Sei più che maggiorenne! Hai quindi diritto ad uno sconto del 40%!!"
} else {
  infoAge = standard = ""
}
document.getElementById("html-age").innerHTML = infoAge;


//richiedo destinazione
var city = prompt("Dove vuole andare?");
var infoCity = "Destinazione: " + city;
document.getElementById("html-city").innerHTML = infoCity;

//richiedo numero di km con controllo numerico
var km
  km = parseInt(prompt("Quanti km sono?"))
while (isNaN(km)){
  km = prompt("Ops, hai sbagliato qualcosa! Riprova");
}

var infoKm = "Km: " + km;
document.getElementById("html-km").innerHTML = infoKm;

//calcolo prezzo piglietto
var price = (0.21 * km).toFixed(2);
var infoPrice = "Il prezzo senza sconto è " + price;
document.getElementById("html-price").innerHTML = infoPrice;

//sconto
var infoPriceDiscount = "Il prezzo scontato è " + price;
var noDiscount = "Non ha diritto ad alcuno sconto";

if (infoAge = min){
  price = (price * 0.8).toFixed(2);
  document.getElementById("html-price-discount").innerHTML = infoPriceDiscount;
} else if (infoAge = max){
  price = (price * 0.6).toFixed(2);
  document.getElementById("html-price-discount").innerHTML = infoPriceDiscount;
} else {
  document.getElementById("html-price-discount").innerHTML = noDiscount;
}
