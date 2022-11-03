/* English
////// Bean counting //////
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example, "b").
The first character has position 0, which causes the last one to be found at position string.length - 1.
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number
that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
*/

////// My solution - Mi solución //////
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

// Part 2 - Parte 2
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

////// Book solution - Solución del libro //////
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

/* Español
////// Conteo de frijoles //////
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N].
El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f").
El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición string.length - 1.
En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.

Escribe una función contarFs que tome un string como su único argumento y devuelva un número
que indica cuántos caracteres “F” en mayúsculas haya en el string.

Después, escribe una función llamada contarCaracteres que se comporte como contarFs,
excepto que toma un segundo argumento que indica el carácter que debe ser contado
(en lugar de contar solo caracteres “F” en mayúscula). Reescribe contarFs para que haga uso de esta nueva función.
*/
