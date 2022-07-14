//imprimir array
function rango(inicio, final) {
    let rangoArray = []
    for (let i = inicio; i <= final; i++){
        rangoArray.push(i);
        }
    return rangoArray;
}

let resultado = rango(1, 10);
console.log(resultado);

// suma del array solo sirve con 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function suma(rango){
    let resultado = 0;
    for (let i= 0; i<=9; i++){
        resultado = resultado + rango[i];
       
    } return resultado
} console.log(suma(numeros))
// suma del array sirve con cualquier numero
function suma(array){
  let resultado = 0;
  for (let i= 0; i<= array.length; i++){
    resultado = resultado + i;
  } return resultado;
} console.log(suma(rango(1,10)))

/*
//solucion del libro
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(sum(range(1, 10)));
*/


// imprimir array + intervalo
function rango(inicio, final, intervalo) {
  let rangoArray = [];
  if(intervalo > 0){
    for (let i = inicio; i <= final; i= i + intervalo){
      rangoArray.push(i);
    }
    return rangoArray;
  }
  else{
    for (let i = inicio; i >= final; i= i + intervalo){
      rangoArray.push(i);
    }
    return rangoArray;
  }
}
let resultado = rango(5, 2, -1);
console.log(resultado);

/*
//solucion del libro

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
*/