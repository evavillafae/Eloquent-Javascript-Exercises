/* English
////// Flattening //////
Use the reduce method in combination with the concat method to “flatten” an array of arrays into
a single array that has all the elements of the original arrays.
*/
//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])


////// My solution - Mi solución //////
let arrays = [[1, 2, 3], [4, 5], [6]];
let aplanado = arrays.reduce((acc,curr) => acc.concat(curr), [])
console.log(aplanado);


////// Book solution - Solución del libro //////
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]


/* Español
////// Aplanamiento //////
Use el método reduce en combinación con el método concat para “aplanar” un array de arrays
en un único array que tenga todos los elementos de los arrays originales. 

*/
