/*
//////Ciclo de un triángulo////
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

for (let numero = "#"; numero <= "#######"; numero = numero + "#") {
    console.log(numero)
}






/*
////Solucion del libro///////

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/
