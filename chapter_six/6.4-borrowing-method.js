/*Anteriormente en el capítulo mencioné que el metodo hasOwnProperty de un objeto puede usarse como una alternativa más robusta al operador in cuando quieras ignorar las propiedades del prototipo. Pero, ¿y si tu mapa necesita incluir la palabra "hasOwnProperty"? Ya no podrás llamar a ese método ya que la propiedad del objeto oculta el valor del método. ¿Puedes pensar en una forma de llamar hasOwnProperty en un objeto que tiene una propia propiedad con ese nombre?*/

/*/////HINT//////
Recuerda que los métodos que existen en objetos simples provienen de Object.prototype. Y que puedes llamar a una función con una vinculación this específica al usar su método call. */
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true






















/*////Book's Solution/////
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
*/