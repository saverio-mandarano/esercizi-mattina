/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/
// const numberOne = parseFloat(prompt("Inserisci il primo numero:"));
// const numberTwo = parseFloat(prompt("Inserisci il secondo numero:"));
// let greaterNumber = `I numeri sono uguali.`;

// if (numberOne > numberTwo) {
//   console.log("Il numero maggiore è: ", numberOne);
//   greaterNumber = numberOne;
// } else if (numberTwo > numberOne) {
//   console.log("Il numero maggiore è: ", numberTwo);
//   greaterNumber = numberTwo;
// }

// document.getElementById("greaterNumber").innerHTML += ` ${greaterNumber}`


// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti. 
//  Esegui questo programma in due versioni, con il for e con il while (facoltativo)

//versione con for
let sum = 0;
for (let i=0; i<5; i++) {
    sum += parseFloat(prompt(`inserisci un numero`));
}
console.log(`la somma (con FOR) dei numeri è: ${sum}`);
alert(`la somma è: ${sum}`);

//versione con while
sum =0;
let i=0;
while (i < 5){
    sum += parseFloat(prompt(`inserisci un numero`));
    i++;
}
console.log(`la somma (con WHILE) dei numeri è: ${sum}`);
alert(`la somma è: ${sum}`);