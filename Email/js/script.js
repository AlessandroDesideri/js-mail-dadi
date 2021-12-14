// Inizializzo array email
const listEmail = ('carlo@gmail.com' ,'alessandro@gmail.com' ,'desideri@gmail.com' )

// Chiedo email all'utente
let emailInserita = prompt('Inserisci la tua email')

// Controllo se l'email dell'utente rientra nell'array
let emailTrovata = false
for (let i = 0; i < listEmail.length; i++){

    if (emailInserita === listEmail[i]) {
        emailTrovata = true
    }
}
// Console log email
if (emailTrovata) {
    outputHtml.innerHTML = ('Email trovata');
} else {
    outputHtml.innerHTML = ('Email non trovata')
}