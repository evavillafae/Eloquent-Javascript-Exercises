/* English
////// Reversing an array //////
Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given
as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter,
which variant do you expect to be useful in more situations? Which one runs faster?
*/

////// My solution - Mi solución //////

// revert the array and create a new one
// revierte el array y crea uno nuevo
function revertirArray(array){
    let arreglo = [];
    for (let i = 0; i < array.length; i++) {
        arreglo.unshift(array[i]);
    } return arreglo;
} 
console.log(revertirArray(["1", "2", "3"]));

// reverts the array instead, without creating a new array
// revierte el array su lugar, sin crear nuevo array
function revertirArrayEnSuLugar(array){
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 0, array[array.length - 1]);
    array.pop();
  }
return array
} console.log(revertirArrayEnSuLugar(["1", "2", "3", "4", "5"]));


////// Book solution - Solución del libro //////
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]

/* Español
////// Revirtiendo un array //////
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos.
Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar.
El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos
elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica
el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.
Pensando en las notas acerca de los efectos secundarios y las funciones puras en el capítulo anterior,
¿qué variante esperas que sea útil en más situaciones? ¿Cuál corre más rápido?
*/


//no se xd, probando
elementos = [1, 2, 3, 4, 5];
for (let i = 0; i <= Math.floor(elementos.length/2); i++) {
            elementos.push(elementos[i]);
            elementos.splice(i,1);
            elementos.unshift(elementos[elementos.length - (i+2)]);
            elementos.splice(elementos.length - (i+2),1);
        }console.log(elementos);
