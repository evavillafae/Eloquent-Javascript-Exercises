/*
////Mínimo////
El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. Nosotros podemos construir algo como eso ahora. Escribe una función min que tome dos argumentos y retorne su mínimo.

*/

function min (a, b){
    if(a < b){
        return a
    }
    else if (a > b){
        return b
    }
}
console.log(min(10, -50));

/*
//// Solución del libro/////
function min(a, b) {
  if (a < b) return a;
  else return b;
}
*/