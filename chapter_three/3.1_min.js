
/* English
////// Minimum //////
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

////// My solution - Mi solución //////
function min (a, b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}
console.log(min(10, -50));

////// Book solution - Solución del libro //////
function min(a, b) {
  if (a < b) return a;
  else return b;
}

/* Español
////// Mínimo //////
El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño.
Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.
*/
