/*El entorno de JavaScript estándar proporciona otra estructura de datos llamada Set (“Conjunto”). Al igual que una instancia de Map, un conjunto contiene una colección de valores. Pero a diferencia de Map, este no asocia valores con otros este solo rastrea qué valores son parte del conjunto. Un valor solo puede ser parte de un conjunto una vez, agregarlo de nuevo no tiene ningún efecto. Escribe una clase llamada Conjunto. Como Set, debe tener los métodos add (“añadir”), delete (“eliminar”), y has (“tiene”). Su constructor crea un conjunto vacío, añadir agrega un valor al conjunto (pero solo si no es ya un miembro), eliminar elimina su argumento del conjunto (si era un miembro) y tiene retorna un valor booleano que indica si su argumento es un miembro del conjunto. Usa el operador ===, o algo equivalente como indexOf, para determinar si dos valores son iguales. Proporcionale a la clase un método estático desde que tome un objeto iterable como argumento y cree un grupo que contenga todos los valores producidos al iterar sobre el.*/
/*///HINT///
La forma más fácil de hacer esto es almacenar un array con los miembros del conjunto en una propiedad de instancia. Los métodos includes o indexOf pueden ser usados para verificar si un valor dado está en el array. El constructor de clase puede establecer la colección de miembros como un array vacio. Cuando se llama a añadir, debes verificar si el valor dado esta en el conjunto y agregarlo, por ejemplo con push, de lo contrario. Eliminar un elemento de un array, en eliminar, es menos sencillo, pero puedes usar filter para crear un nuevo array sin el valor. No te olvides de sobrescribir la propiedad que sostiene los miembros del conjunto con la versión recién filtrada del array. El método desde puede usar un bucle for/of para obtener los valores de el objeto iterable y llamar a añadir para ponerlos en un conjunto recien creado. */
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



















  
/*////Book's Solution/////
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
*/