// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

//creo array vuoto
const array = [];
//uso variabile let per mettere come base zero alla somma che si dovrà fare successivamente
let sum = 0;

//applico ciclo while mettendo come condizione che finché la somma dei numeri chiesti all'utente non supererà 50, allora i numeri potranno continuare ad essere inseriti nell'array
 while (sum < 50) {
     //dichiaro variabile che chiederà tramite prompt i numeri all'utente
     let userNumber = parseInt(prompt("Dimmi un numero"));

     //metto un if in cui alla somma deve essere aggiunto il numero utente e se arriva a 50 continua a sommare, se invece supera 50 si arresta il ciclo
     if ((sum + userNumber) < 50) {
         array.push(userNumber)
         sum += userNumber
     } else if ((sum + userNumber) > 50) {
         break
     }

     console.log(array, sum);
 };

 console.log(array, sum);
