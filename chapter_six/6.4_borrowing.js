/* English
////// Borrowing a method //////
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust
alternative to the in operator when you want to ignore the prototype’s properties.

But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method
anymore because the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/

////// My solution - Mi solución //////
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true


////// Book solution - Solución del libro //////
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true


/* Español
////// Tomando un método prestado //////
Anteriormente en el capítulo mencioné que el metodo hasOwnProperty de un objeto puede usarse como
una alternativa más robusta al operador in cuando quieras ignorar las propiedades del prototipo.

Pero, ¿y si tu mapa necesita incluir la palabra "hasOwnProperty"? Ya no podrás llamar a ese método
ya que la propiedad del objeto oculta el valor del método.

¿Puedes pensar en una forma de llamar hasOwnProperty en un objeto que tiene una propia propiedad con ese nombre?
*/
