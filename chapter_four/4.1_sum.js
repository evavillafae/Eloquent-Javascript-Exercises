/* English
////// The sum of a range //////
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array containing
all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that
indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one,
corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

////// My solution - Mi solución //////
// return array
// imprimir array
function rango(inicio, final) {
    let rangoArray = []
    for (let i = inicio; i <= final; i++){
        rangoArray.push(i);
        }
    return rangoArray;
}
let resultado = rango(1, 10);
console.log(resultado);

// array sum (only works with 10)
// suma de array (solo sirve con 10)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function suma(rango){
    let resultado = 0;
    for (let i= 0; i<=9; i++){
        resultado = resultado + rango[i];
    } return resultado
} console.log(suma(numeros))

// array sum works with any number
// suma de array sirve con cualquier número
function suma(array){
  let resultado = 0;
  for (let i= 0; i<= array.length; i++){
    resultado = resultado + i;
  } return resultado;
} console.log(suma(rango(1,10)))

// BONUS
// returns array + interval
// imprimir array + intervalo
function rango(inicio, final, intervalo) {
  let rangoArray = [];
  if(intervalo > 0){
    for (let i = inicio; i <= final; i= i + intervalo){
      rangoArray.push(i);
    }
    return rangoArray;
  }
  else{
    for (let i = inicio; i >= final; i= i + intervalo){
      rangoArray.push(i);
    }
    return rangoArray;
  }
}
let resultado = rango(5, 2, -1);
console.log(resultado);


////// Book solution - Solución del libro //////
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(sum(range(1, 10)));

// BONUS
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }

/* Español
////// La suma de un rango //////
La introducción de este libro aludía a lo siguiente como una buena forma de calcular la suma de un rango de números:
console.log(suma(rango(1, 10)));

Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga
todos los números desde inicio hasta (e incluyendo) final.

Luego, escribe una función suma que tome un array de números y retorne la suma de estos números.
Ejecuta el programa de ejemplo y ve si realmente retorna 55.

Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que
indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso,
los elementos suben en incrementos de uno, correspondiedo al comportamiento anterior.
La llamada a la función rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9].
Asegúrate de que también funcione con valores de pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].
*/
