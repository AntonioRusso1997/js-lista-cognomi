/* 1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova. */

// Creo l'array
var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var stamp = "";
var stampSorted = "";

var insertSurname = prompt("Inserisci il cognome.");
surnames.push(insertSurname);

// Stampo l'array nell'ordine "base".
console.log(surnames);

// Creo ciclo per stampare tutta la lista correttamente
for (var i = 0; i < surnames.length ;i++)
{
    stamp += "<li>"+ surnames[i] +"</li>"
}

// Creo una copia dell'array principale, per stampare in ordine alfabetico.
var surnamesSorted = surnames;

console.log("In ordine alfabetico: " + surnamesSorted.sort());

for (var i = 0; i < surnamesSorted.length; i++)
{
    stampSorted += "<li>"+ surnamesSorted[i] +"</li>"
}

// Mostro all'utente la posizione "umana" del suo Cognome nella lista in ordine alfabetico.
console.log("Sei al " + ((surnamesSorted.indexOf(insertSurname)) + 1) + "° posto!");

// Stampo su HTML
document.getElementById("list").innerHTML = stamp;
document.getElementById("sortedList").innerHTML = stampSorted;