/*/////Cada////
De forma análoga al método some, los arrays también tienen un método every (“cada”). Este retorna true cuando la función dada devuelve verdadero para cada elemento en el array. En cierto modo, some es una versión del operador || que actúa en arrays, y every es como el operador &&. Implementa every como una función que tome 
*un array y una función predicado como parámetros.
Escribe dos versiones, 
*una usando un ciclo y 
*una usando el método some.

///TIP////
Al igual que el operador &&, el método every puede dejar de evaluar más elementos tan pronto como haya encontrado uno que no coincida. Entonces la versión basada en un ciclo puede saltar fuera del ciclo—con break o return- tan pronto como se encuentre con un elemento para el cual la función predicado retorne falso. Si el ciclo corre hasta su final sin encontrar tal elemento, sabemos que todos los elementos coinciden y debemos retornar verdadero. Para construir cada usando some, podemos aplicar las leyes De Morgan, que establecen que a && b es igual a !(!a ||! b). Esto puede ser generalizado a arrays, donde todos los elementos del array coinciden si no hay elemento en el array que no coincida.*/

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












/*Solución del libro 
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

*/