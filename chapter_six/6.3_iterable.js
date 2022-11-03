/* English
////// Iterable groups //////
Make the Group class from the previous exercise iterable. Refer to the section about the iterator
interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created
by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
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
  [Symbol.iterator](){
    let nuevaInstancia = new IteradorGroup(this);
    return nuevaInstancia;
  }
}

class IteradorGroup{
  constructor(group) {
    this.group = group;
    this.posicion = 0;
  }

  next(){
    if(this.posicion <= this.group.conjunto.length){
      let valor = {
        value: this.group.conjunto[this.posicion],
        done: false
      }
      this.posicion++;
      return valor;
    } else{
      return {
        value: undefined,
        done: true
      }
    }
  }
}

for (let x of Group.from(["a", "b", "c"])) {
  console.log(x);
}
  // → a
  // → b
  // → c


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

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

/* Español
////// Conjuntos Iterables //////
Haz iterable la clase Conjunto del ejercicio anterior. Puedes remitirte a la sección acerca de la interfaz
del iterador anteriormente en el capítulo si ya no recuerdas muy bien la forma exacta de la interfaz.

Si usaste un array para representar a los miembros del conjunto, no solo retornes el iterador creado llamando
al método Symbol.iterator en el array. Eso funcionaría, pero frustra el propósito de este ejercicio.

Está bien si tu iterador se comporta de manera extraña cuando el conjunto es modificado durante la iteración.
*/
