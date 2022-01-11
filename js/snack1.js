console.log('JS OK!')

/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

// 1- Inserire due numeri (Prompt)
// 2- Dettare le condizioni
// 3- Stampare in pagina

// ! Costante da stampare in pagina
const display = document.getElementById('risultato');

// 1- Inserire due numeri (Prompt)
const firstNumber = parseInt(prompt('Scegli il primo numero', '2').trim());
const secondNumber = parseInt(prompt('Scegli il secondo numero', '5').trim());

console.log(firstNumber, secondNumber);

// 2- Dettare le condizioni
let result;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    result = 'Inserire solo caratteri numerici!!!';
    console.log(result);
} else {
    if (firstNumber > secondNumber) {
    result = `Il valore ${firstNumber} è maggiore del valore ${secondNumber}`
    console.log(result);
} else if (firstNumber < secondNumber) {
    result = `Il valore ${secondNumber} è maggiore del valore ${firstNumber}`
    console.log(result);
} else {
    result = `I valori ${firstNumber} e ${secondNumber}, sono uguali`;
    console.log(result);
}
}

// ! Stampo in pagina il risultato
display.innerHTML = result;