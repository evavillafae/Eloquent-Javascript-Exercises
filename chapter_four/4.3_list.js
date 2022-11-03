/* English
////// A list //////
Objects, as generic blobs of values, can be used to build all sorts of data structures.
A common data structure is the list (not to be confused with array). A list is a nested set of objects,
with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

The resulting objects form a chain, like this:
value: 1        value: 2        value: 3
rest: --------> rest: --------> rest: null

A nice thing about lists is that they can share parts of their structure.
For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list}
(with list referring to the binding defined earlier), they are both independent lists, but they
share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

////// My solution - Mi solución //////
// array to list
// array a lista
function arrayALista(array) {
  let lista = null;
  for (let i = (array.length - 1); i >= 0; i--) {
    lista = {
      valor: array[i],
      rest: lista
    }; 
  }; return lista
}; console.log(arrayALista([1, 2, 3]));

// list to array
// lista a array
function listaAArray(lista) {
  let array = [];
  for (let nodo = lista; nodo; nodo = nodo.rest) {
    array.push(nodo.valor)
  } return array;
}
console.log(listaAArray({ valor: 1, rest: { valor: 2, rest: { valor: 3, rest: null } } }))

// function prepend
// utilidad preceder
function preceder(elemento, lista) {
  return {
    elemento, resto: lista
  }
}
console.log(preceder(10, preceder(20, null)));

// nth (position)
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


////// Book solution - Solución del libro //////
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

/* Español
////// Una lista //////
Los objetos, como conjuntos genéricos de valores, se pueden usar para construir todo tipo de estructuras de datos.
Una estructura de datos común es la lista (no confundir con un array). Una lista es un conjunto anidado de objetos,
con el primer objeto conteniendo una referencia al segundo, el segundo al tercero, y así sucesivamente.

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

Algo bueno de las listas es que pueden compartir partes de su estructura. Por ejemplo, si creo dos nuevos valores
{valor: 0, resto: lista} y {valor: -1, resto: lista} (con lista refiriéndose a la vinculación definida anteriormente),
ambos son listas independientes, pero comparten la estructura que conforma sus últimos tres elementos.
La lista original también sigue siendo una lista válida de tres elementos.

Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da
[1, 2, 3] como argumento. También escribe una función listaAArray que produzca un array de una lista. Luego agrega una
función de utilidad preceder, que tome un elemento y una lista y cree una nueva lista que agrega el elemento al frente
de la lista de entrada, y posicion, que toma una lista y un número y retorne el elemento en la posición dada en la lista
(con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento.

Si aún no lo has hecho, también escribe una versión recursiva de posicion.

*/
