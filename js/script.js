//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//VARIABLE USER DEFINITION
//Km to travel and age of the passenger
const userKilometre = parseInt( prompt('Quanti Km deve percorrere?') );
const userAge = parseInt( prompt('Qual è l\ età del passeggero?') );


//LOGIC
//Km and price comparison
const price = userKilometre * 0.21;

//price and discount comparison based on the age of the passenger
let discountPrice = 0;

if ( userAge < 18 ) {
    discountPrice = ( price * 20 ) / 100;

} else if ( userAge > 65 ) {
    discountPrice = ( price * 40 ) /100;

}

const finalPrice = price - discountPrice;

//OUTPUT
//print final price
alert ( 'Il prezzo del biglietto è : ' + finalPrice.toFixed(2) + '€' );