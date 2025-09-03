/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
 Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle emai */


// Lista delle e-mail //

const emailList = ["ginluca.fuscaldo@example.com", "lindita.lama@example.com", "diego.muto@example.com", "stefano.lombardo@example.com", "alfredo.lettieri@example.com", "giuseppe.vizza@example.com", "melina.larocca@example.com", "raffaele.scarola@example.com", "elisabetta.tangari@example.com"]

//E-MAIL UTENTE//
const emailUtente = prompt("Inserisci il tuo indirizzo email:");

//BOOLEANO (FALSO)//
let inList = false;

//CONTROLLO UTENTE IN LISTA///

