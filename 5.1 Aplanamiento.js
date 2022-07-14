/* ////////Aplanamiento//////////
Use el método reduce en combinación con el método concat para “aplanar” un array de arrays en un único array que tenga todos los elementos de los arrays originales. */
//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
// Your code here.
// → [1, 2, 3, 4, 5, 6]


let arrays = [[1, 2, 3], [4, 5], [6]];
var aplanado = arrays.reduce((acc,curr) => acc.concat(curr), [])
console.log(aplanado);











/* Solución del libro

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]


*/