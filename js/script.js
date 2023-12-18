// JS - HTML Test response
console.log('JS OK');

//Recupero dell'elemento di "stampa" nel DOM
document.getElementById('userMessage');
console.log(userMessage);

//Variabili di imput da parte dell'utente
const userKm = parseInt(prompt("Inserisci il numero di chilometri:", 800));
const userAge = parseInt(prompt("Inserisci la tua età a numero:", 26));
console.log("kilometri utente: " + userKm,"Età utente: " + userAge);

//Variabile contenete il prezzo standard per km
const ticketStandardPrice = 0.21;

//calcolo del prezzo standard per km senza applicare sconti
let totPrice = userKm * ticketStandardPrice;


if(userAge < 18){
    const minors = 0.2;
    totPrice = totPrice - (totPrice * minors);
} else if(userAge >= 65){
    const over = 0.4;
    totPrice = totPrice - (totPrice * over);
}
//Stampa del prezzo finale in cosole e in pagina
console.log("Prezzo finale: " + totPrice.toFixed(2));
userMessage.innerHTML = `<strong>Il prezzo finale della tua tratta è:</strong> ${totPrice.toFixed(2)} euro`