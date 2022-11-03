/* English
////// Groups //////
The standard JavaScript environment provides another data structure called Set. Like an instance of Map,
a set holds a collection of values. Unlike Map, it does not associate other values with those—it just
tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member),
delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating
whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that
contains all the values produced by iterating over it.
*/

////// My solution - Mi solución //////
class Group {
  constructor() {
    this.conjunto = [];
  }
  add(x){
    if(!this.conjunto.includes(x)){
      this.conjunto.push(x)
    }
  }
  delete(x){
    if(this.conjunto.includes(x)){
      let indice = this.conjunto.indexOf(x);
      this.conjunto.splice(indice, 1)
    }
  }
  has(x){
    if(!this.conjunto.includes(x)){
      return false
    } return true
  }
  static from(obj){
    let group = new Group;
    for(let x of obj){
      group.add(x)
    } return group
  } 
}
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false


////// Book solution - Solución del libro //////
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

/* Español
////// Conjuntos //////
El entorno de JavaScript estándar proporciona otra estructura de datos llamada Set (“Conjunto”).
Al igual que una instancia de Map, un conjunto contiene una colección de valores. Pero a diferencia de Map,
este no asocia valores con otros este solo rastrea qué valores son parte del conjunto. Un valor solo puede
ser parte de un conjunto una vez, agregarlo de nuevo no tiene ningún efecto. Escribe una clase llamada Conjunto.
Como Set, debe tener los métodos add (“añadir”), delete (“eliminar”), y has (“tiene”). Su constructor crea un
conjunto vacío, añadir agrega un valor al conjunto (pero solo si no es ya un miembro), eliminar elimina su
argumento del conjunto (si era un miembro) y tiene retorna un valor booleano que indica si su argumento es un
miembro del conjunto. Usa el operador ===, o algo equivalente como indexOf, para determinar si dos valores son iguales.
Proporcionale a la clase un método estático desde que tome un objeto iterable como argumento y cree un grupo que
contenga todos los valores producidos al iterar sobre el.
*/
