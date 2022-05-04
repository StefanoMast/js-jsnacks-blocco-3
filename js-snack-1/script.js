// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

//creo due array con numero di elementi diversi

const firstArray = [0,1,2,3,4,5,6,7,8,9];
const secondArray = [0,1,2,3,4,5];
const element = 0;

//applico il ciclo while, finché il secondo array non avrà lunghezza come il primo e quindi lo stesso numero di elementi

while (secondArray.length > firstArray.length) {
    secondArray.push(element)
    console.log(firstArray, secondArray);
};