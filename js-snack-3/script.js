// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

//creo array di oggetti di squadre di calcio, con nome squadra, punti e falli
const footballTeams = [
    {nome: "Parma", puntiSegnati: 0, falliSubiti: 0},
    {nome: "Cosenza", puntiSegnati: 0, falliSubiti: 0},
    {nome: "Roma", puntiSegnati: 0, falliSubiti: 0}

];

//uso la funzione getRdnInteger per generare i numeri dei punti e dei falli subiti automaticamente

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//nel ciclo forEach inserisco l'elemento su cui la funzione deve funzionare


footballTeams.forEach(element => {
    element.falliSubiti = getRndInteger(1, 10)
    element.puntiSegnati = getRndInteger(1, 10)
    console.log(element.nome, element.falliSubiti, element.puntiSegnati)
});

console.log(footballTeams);