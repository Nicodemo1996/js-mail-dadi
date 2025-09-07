/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// Lancio del dado//
const playerRoll = Math.floor(Math.random() * 6) + 1;
const computerRoll = Math.floor(Math.random() * 6) + 1;

// esito risultati//
console.log("lancio giocatore: " + playerRoll);
console.log("lancio computer: " + computerRoll);


// vince il giocatore//
if (playerRoll > computerRoll) {
  console.log("Hai battito il banco!");
}

// pareggio//
else {
  console.log("il banco vince!");
}

//sconfitta//
else if (playerRoll < computerRoll) {
  console.log(" hai perso contro il banco !");
}




