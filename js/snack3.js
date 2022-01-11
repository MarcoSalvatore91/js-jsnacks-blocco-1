console.log('JS OK!')

/*Il software deve chiedere per 10 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.*/

// 1- Creare una variabile
// 2- Creare un ciclo
// 3- Dentro il ciclo creare un prompt che chieda all'utente numeri da inserire
// 4- Sommare tutti i numeri inseriti dall'utente
// 5- Messaggio nel caso uno dei requisiti non siano numerici
// 6- Stampare in pagina la somma dei numeri

// ! Creare una costante per stampare i numeri
const displayElement = document.getElementById('risultato');

// 1- Creare una variabile
let sum = 0;

// 2- Creare un ciclo
for (let i = 0; i < 10; i++) {
    // 3- Dentro il ciclo creare un prompt che chieda all'utente numeri da inserire
    const number = parseInt(prompt('Inserisci dei numeri', '5'));
    // 4- Sommare tutti i numeri inseriti dall'utente
    sum += number
// 5- Messaggio nel caso uno dei requisiti non siano numerici
} if (isNaN(sum)) {
    sum = 'Inserisci solo caratteri numerici!!!';
}
console.log(sum);

// 6- Stampare in pagina la somma dei numeri

displayElement.innerHTML = sum;