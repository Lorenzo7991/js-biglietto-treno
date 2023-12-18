// JS - HTML Test response
console.log('JS OK');

//Variabili di imput da parte dell'utente
const userKm = parseInt(prompt("Inserisci il numero di chilometri:", 800));
const userAge = parseInt(prompt("Inserisci la tua età a numero:", 26));
console.log(userKm, userAge);

//Variabile contenete il prezzo standard per km
const ticketStandardPrice = 0.21;
console.log(ticketStandardPrice);

//calcolo del prezzo standard per km senza applicare sconti
let totPrice = userKm * ticketStandardPrice;
console.log(totPrice);

if(userAge < 18){
    const minors = 0.2;
    totPrice = totPrice - (totPrice * minors);
} else if(userAge >= 65){
    const over = 0.4;
    totPrice = totPrice - (totPrice * over);
}

console.log(totPrice);