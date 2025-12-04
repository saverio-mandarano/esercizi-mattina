/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/
 const numberOne = parseFloat(prompt("Inserisci il primo numero:"));
 const numberTwo = parseFloat(prompt("Inserisci il secondo numero:"));
 let greaterNumber = `I numeri sono uguali.`;

 if (numberOne > numberTwo) {
   console.log("Il numero maggiore è: ", numberOne);
   greaterNumber = numberOne;
 } else if (numberTwo > numberOne) {
   console.log("Il numero maggiore è: ", numberTwo);
   greaterNumber = numberTwo; }

 document.getElementById("greaterNumber").innerHTML += ` ${greaterNumber}`


// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti. 
//  Esegui questo programma in due versioni, con il for e con il while (facoltativo)

//versione con for
let sum = 0;
for (let i=0; i<5; i++) {
    let number = parseFloat(prompt(`inserisci un numero`));

    while (isNaN(number)){ //check
        number = parseFloat(prompt(`inserire numero VALIDO`));
    }
    
    sum += number;
}
console.log(`la somma (con FOR) dei numeri è: ${sum}`);
alert(`la somma (con FOR) è: ${sum}`);

//versione con while
sum = 0;
let i=0;
while (i < 5){
    let number = parseFloat(prompt(`inserisci un numero`));

    while (isNaN(number)){ //check
        number = parseFloat(prompt(`inserire numero VALIDO`));
    }

    sum += number;
    i++;
}
console.log(`la somma (con WHILE) dei numeri è: ${sum}`);
alert(`la somma (con WHILE) è: ${sum}`);

// Snack 5
//  Crea un array vuoto. 
//  Chiedi per 6 volte all’utente di inserire un numero, 
//  se è dispari inseriscilo nell’array
const arrayDispari = [];

for (let i=0; i<6; i++) {
    let number = parseFloat(prompt(`inserisci un numero`));

    while (isNaN(number)){ //check
        number = parseFloat(prompt(`inserire numero VALIDO`));
    }
    
    if (number % 2 !== 0) {
       arrayDispari.push(number);
    }
}
console.log(arrayDispari);

// L’utente inserisce due parole in successione, con due prompt. 
//  Il software stampa prima la parola più corta, poi la parola più lunga.
const stringOne = (prompt("Inserisci la prima parola:"));
const stringTwo = (prompt("Inserisci la seconda parola:"));

if (stringOne.length < stringTwo.length){
  console.log(`la parola più corta è: ${stringOne}`);
  console.log(`la parola più lunga è: ${stringTwo}`);
}
else if (stringTwo.length < stringOne.length){
  console.log(`la parola più corta è: ${stringTwo}`);
  console.log(`la parola più lunga è: ${stringOne}`);
}
else{
  console.log(`le parole sono della stessa lunghezza, ed hanno lunghezza: ${stringOne.length}`);
  console.log(`la parole è: ${stringOne}` );
}

