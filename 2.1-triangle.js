/* English
////// Looping a triangle //////
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3

*/

////// My Solution //////
for (let n = "#"; n <= "#######"; n = n + "#"){
    console.log(n)
}

//// Book Solution ///////
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

/* Español
////// Ciclo de un triángulo //////
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
#
##
###
####
#####
######
#######

Puede ser útil saber que puedes encontrar la longitud de un string escribiendo .length después de él:
let abc = "abc";
console.log(abc.length);
// → 3
*/
