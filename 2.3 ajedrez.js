/*
////Tablero de ajedrez/////
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez. Pasar este string a console.log debería mostrar algo como esto:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #

Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y cambia el programa para que funcione con cualquier tamaño, dando como salida una cuadrícula con el alto y ancho dados.
*/

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

/*
////Solución del libro/////
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

*/
