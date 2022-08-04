/* English
////// Chessboard //////
Write a program that creates a string that represents an 8×8 grid,
using newline characters to separate lines. At each position of the grid
there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and
change the program so that it works for any size, outputting a grid of the given width and height.

*/


////// My Solution //////
let resultado = "";
let tamano = 8;

for (let i = 1; i <= tamano; i++) {
  for (let index = 0; index < tamano; index++) {
    if(resultado.length % (tamano + 1) == 0){
        resultado = resultado + "\n";
    }
    else if (resultado.length % 2 == 0) {
      resultado = resultado + "#";
    }
    else if (resultado.length % 2 != 0) {
      resultado = resultado + " ";
    }
  }
}
console.log(resultado);


////// Book solution //////
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);


/* Español
////// Tablero de ajedrez //////
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8,
usando caracteres de nueva línea para separar las líneas. En cada posición de la
cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #

Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y
cambia el programa para que funcione con cualquier tamaño, dando como salida una
cuadrícula con el alto y ancho dados.

*/
