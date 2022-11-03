/* English
////// Everything //////
Analogous to the some method, arrays also have an every method. This one returns true when the given
function returns true for every element in the array. In a way, some is a version of the || operator that
acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions,
one using a loop and one using the some method.
*/

////// My solution - Mi solución //////
function cada(array, prueba) {
  for (elemento of array) {
    if(!prueba(elemento)){
      return false;
    }
  } return true
}

console.log(cada([1, 3, 5], n => n < 10));
// → true
console.log(cada([2, 4, 16], n => n < 10));
// → false
console.log(cada([], n => n < 10));
// → true

function cadaDos(array, prueba) {
  if(array.some(n => !prueba(n))){
    return false
  }
  return true
}

console.log(cadaDos([1, 3, 5], n => n < 10));
// → true
console.log(cadaDos([2, 4, 16], n => n < 10));
// → false
console.log(cadaDos([], n => n < 10));
// → true


////// Book solution - Solución del libro //////
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


/* Español
////// Cada //////
De forma análoga al método some, los arrays también tienen un método every (“cada”). Este retorna true
cuando la función dada devuelve verdadero para cada elemento en el array. En cierto modo, some es una
versión del operador || que actúa en arrays, y every es como el operador &&.

Implementa every como una función que tome un array y una función predicado como parámetros. Escribe dos versiones,
una usando un ciclo y una usando el método some.
*/
