/* English
////// Recursion //////
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd
by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

////// My solution - Mi solución //////
function esPar(n){
    function find(actual, historia) {

        if(actual < 0){
            return find(actual + 2, `(${historia} + 2)`);
        } else if(actual == 0){
            return true;
        } else if (actual == 1){
            return false;
        } else {
            return find(actual - 2, `(${historia} - 2)`);
        }
    } 
    return find(n,"n");
}

console.log(esPar(73));


////// Book solution - Solución del libro //////
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

/* Español
////// Recursión //////
Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar
usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:

• Cero es par.
• Uno es impar.
• Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción.
La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?

*/
