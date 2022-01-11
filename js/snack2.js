console.log('JS OK!')

/*L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga.*/

// 1-Inserire due parole in succession (Prompt)
// 2- Stampare prima la parola piu' corta e dopo quella piu' lunga

// ! Costante da stampare in pagina
const result = document.getElementById('risultato');

// 1-Inserire due parole in succession (Prompt)
const firstWord = prompt('Inserisci la prima parola', 'Cane').trim();
const secondWord = prompt('Inserisci la seconda parola', 'Gatto').trim();

// 2- Stampare prima la parola piu' corta e dopo quella piu' lunga
let lenghtWord = 'Le parole hanno la stessa lunghezza';

if (firstWord.length === 0 || secondWord.length === 0) {
    lenghtWord = 'Inserire almeno un carattere!!!';
} else {
    if (firstWord.length > secondWord.length) {
        lenghtWord = `${secondWord} ${firstWord}`
    } else if (firstWord.length < secondWord.length) {
        lenghtWord = `${firstWord} ${secondWord}`
    }
}

console.log(lenghtWord);

// ! Stampo in pagina
result.innerHTML = lenghtWord;