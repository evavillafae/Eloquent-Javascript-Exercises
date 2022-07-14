//revierte el array y crea uno nuevo
function revertirArray(numeros){
    let arreglo = [];
    for (let i = 0; i < numeros.length; i++) {
        arreglo.unshift(numeros[i]);
    } return arreglo;
} 
console.log(revertirArray(["1", "2", "3"]));

// revertir en su lugar sin crear nuevo array

function revertirArrayEnSuLugar(elementos){
  for (let i = 0; i < elementos.length; i++) {
    elementos.splice(i, 0, elementos[elementos.length - 1]);
    elementos.pop();
  }
return elementos
} console.log(revertirArrayEnSuLugar(["1", "2", "3", "4", "5"]));

/*
//no se xd

elementos = [1, 2, 3, 4, 5];
for (let i = 0; i <= Math.floor(elementos.length/2); i++) {
            elementos.push(elementos[i]);
            elementos.splice(i,1);
            elementos.unshift(elementos[elementos.length - (i+2)]);
            elementos.splice(elementos.length - (i+2),1);
        }console.log(elementos);

// solucion del libro:
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
      output.push(array[i]);
    }
    return output;
  }
  
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]

*/