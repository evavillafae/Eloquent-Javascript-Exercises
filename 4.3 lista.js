/*
//////Una lista///////
Los objetos, como conjuntos genéricos de valores, se pueden usar para construir todo tipo de estructuras de datos. Una estructura de datos común es la lista (no confundir con un array). Una lista es un conjunto anidado de objetos, con el primer objeto conteniendo una referencia al segundo, el segundo al tercero, y así sucesivamente.

let lista = {
  valor: 1,
  resto: {
    valor: 2,
    resto: {
      valor: 3,
      resto: null
    }
  }
};

Los objetos resultantes forman una cadena, como esta:
value: 1        value: 2        value: 3
rest: --------> rest: --------> rest: null


Algo bueno de las listas es que pueden compartir partes de su estructura. Por ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} y {valor: -1, resto: lista} (con lista refiriéndose a la vinculación definida anteriormente), ambos son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos. La lista original también sigue siendo una lista válida de tres elementos.

Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] como argumento. También escribe una función listaAArray que produzca un array de una lista. Luego agrega una función de utilidad preceder, que tome un elemento y una lista y cree una nueva lista que agrega el elemento al frente de la lista de entrada, y posicion, que toma una lista y un número y retorne el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento. Si aún no lo has hecho, también escribe una versión recursiva de posicion.

/////HINT////

Object.values = devuelve el valor de cada elemento del objecto

a: 42
devuelve = 42

Crear una lista es más fácil cuando se hace de atrás hacia adelante. Entonces arrayALista podría iterar sobre el array hacia atrás (ver ejercicio anterior) y, para cada elemento, agregar un objeto a la lista. Puedes usar una vinculación local para mantener la parte de la lista que se construyó hasta el momento y usar una asignación como lista = {valor: X, resto: lista} para agregar un elemento.

Para correr a traves de una lista (en listaAArray y posicion), una especificación del ciclo for como esta se puede utilizar:

for (let nodo = lista; nodo; nodo = nodo.resto) {}

Puedes ver cómo eso funciona? En cada iteración del ciclo, nodo apunta a la sublista actual, y el cuerpo puede leer su propiedad valor para obtener el elemento actual. Al final de una iteración, nodo se mueve a la siguiente sublista. Cuando eso es nulo, hemos llegado al final de la lista y el ciclo termina. La versión recursiva de posición, de manera similar, mirará a una parte más pequeña de la “cola” de la lista y, al mismo tiempo, contara atrás el índice hasta que llegue a cero, en cuyo punto puede retornar la propiedad valor del nodo que está mirando. Para obtener el elemento cero de una lista, simplemente toma la propiedad valor de su nodo frontal. Para obtener el elemento N + 1, toma el elemento N de la lista que este en la propiedad resto de esta lista.

*/


// Your code here.

// array to lista
function arrayALista(array) {
  let lista = null;
  for (let i = (array.length - 1); i >= 0; i--) {
    lista = {
      valor: array[i],
      rest: lista
    }; 
  }; return lista
}; console.log(arrayALista([1, 2, 3]));

//Lista to array

function listaAArray(lista) {
  let array = [];
  for (let nodo = lista; nodo; nodo = nodo.rest) {
    array.push(nodo.valor)
  } return array;
}
console.log(listaAArray({ valor: 1, rest: { valor: 2, rest: { valor: 3, rest: null } } }))

// Utilidad preceder

function preceder(elemento, lista) {
  return {
    elemento, resto: lista
  }
}
console.log(preceder(10, preceder(20, null)));


// posicion

function recursiva(lista, posicion) {
  let contador = 0;
  for (let nodo = lista; nodo; nodo = nodo.rest) {
    if(posicion == contador){
      return nodo.valor;
    } else {
      contador++;
    }
  }
} console.log(recursiva(arrayALista([10, 20, 30]), 0));

function recursiva(lista, posicion) {
  let contador = 0;

    for (let i = lista; nodo; nodo = nodo.rest) {
      contador++;
        if(posicion = contador){
          return lista.valor
        }
    }   
} console.log(recursiva(arrayALista([10, 20, 30]), 0));

let lista = { valor: 1, rest: { valor: 2, rest: { valor: 3, rest: null } } };
function test (){
  for (let nodo = lista; nodo; nodo = nodo.rest) {
    return lista
  } console.log(nodo)
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20




















/*
//solucion del libro
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20

  */
