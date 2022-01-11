console.log('JS OK!')

/*L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const result = document.getElementById('risultato');

const firstWord = prompt('Inserisci la prima parola', 'Cane').trim();
const secondWord = prompt('Inserisci la seconda parola', 'Gatto').trim();

console.log(firstWord, secondWord);

let lenghtWord;
if (firstWord.length > secondWord.length) {
    lenghtWord = `${firstWord} ${secondWord}`
} else if (firstWord.length < secondWord.length) {
    lenghtWord = `${secondWord} ${firstWord}`
}
console.log(lenghtWord);

result.innerHTML = lenghtWord;