/*
////Recursión////
Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:
• Zero es par.
• Uno es impar.
• Para cualquier otro número N, su paridad es la misma que N - 2.
Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano. Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?

*/

function esPar(n){
    function encontrar(actual, historia) {

        if(actual < 0){
            return encontrar(actual + 2, `(${historia} + 2)`);
        } else if(actual == 0){
            return true;
        } else if (actual == 1){
            return false;
        } else {
            return encontrar(actual - 2, `(${historia} - 2)`);
        }
    } 
    return encontrar(n,"n");
}

console.log(esPar(73));


/*
//// solución del libro /////
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
*/