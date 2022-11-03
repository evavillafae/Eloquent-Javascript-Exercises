/* English
////// A vector type //////
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a
new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of the vector—that is,
the distance of the point (x, y) from the origin (0, 0).
*/

////// My solution - Mi solución //////
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum(other){
    let xResultado = this.x + other.x;
    let yResultado = this.y + other.y;
    return (new Vec(xResultado, yResultado))
  }
  min(other){
    let xResultado = this.x - other.x;
    let yResultado = this.y - other.y;
    return (new Vec(xResultado, yResultado))
  }
  get length(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

console.log(new Vec(1, 2).sum(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).min(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


////// Book solution - Solución del libro //////
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


/* Español
////// Un tipo vector //////
Escribe una clase Vec que represente un vector en un espacio de dos dimensiones. Toma los parámetros (numericos)
x & y, que debería guardar como propiedades del mismo nombre. Dale al prototipo de Vector dos métodos, mas y menos,
los cuales toman otro vector como parámetro y retornan un nuevo vector que tiene la suma o diferencia de los valores
x & y de los dos vectores (this y el parámetro). Agrega una propiedad getter llamada longitud al prototipo que
calcule la longitud del vectores decir, la distancia del punto (x, y) desde el origen (0, 0).
*/
