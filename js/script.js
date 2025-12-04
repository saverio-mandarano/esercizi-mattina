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
  greaterNumber = numberTwo;
}

document.getElementById("greaterNumber").innerHTML += ` ${greaterNumber}`


