/*
/////Conteo de frijoles/////
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f"). El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición string.length - 1. En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.
Escribe una función contarFs que tome un string como su único argumento y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.
Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento que indica el carácter que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de esta nueva función.

*/


function contarFs(texto) {
    let n = 0;
    for (let i=0; i<texto.length; i++) {
        if(texto[i] == ("F")){
            n = 1 + n;
        } else if (texto[i] !== ("F")){
            n = n;
        }
    } return n;
}
console.log(contarFs("FFFrijolesFF"));



//segunda parte
function contarCaracter(texto, car) {
    let n = 0;
    for (let i=0; i<texto.length; i++) {
        if(texto[i] == car){
            n = 1 + n;
        } else if (texto[i] !== car){
            n = n;
        }
    } return n;
} console.log(contarCaracter("FFFrijoles", "j"));

/*
/////Solución del libro////
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

*/