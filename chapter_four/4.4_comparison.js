/* English
////// Deep comparison //////
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with
the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared,
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/


////// My solution - Mi solución //////
//tip: comaprador ==, typeOF, Object.keys
function igualdadProfunda(cosa1, cosa2) {
  if(cosa1 === cosa2) return true;
  if (typeof cosa1 != "object" || typeof cosa2 != "object" || cosa1 == null || cosa2 == null){
    return false
  }
  let keysCosa1 = Object.keys(cosa1);
  let keysCosa2 = Object.keys(cosa2);
  if (keysCosa1.length != keysCosa2.length){
    return false;
  } 
  for (let i of keysCosa1) {
    if(!keysCosa2.includes(i) || !igualdadProfunda(cosa1[i], cosa2[i])){
      return false;
    }
  } return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(igualdadProfunda(obj, obj));
// → true
console.log(igualdadProfunda(obj, {here: 1, object: 2}));
// → false
console.log(igualdadProfunda(obj, {here: {is: "an"}, object: 2}));
// → true



////// Book solution - Solución del libro //////
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true*/


/* Español
////// Comparación profunda //////

El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.

Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o
son objetos con las mismas propiedades, donde los valores de las propiedades sean iguales cuando comparadas
con una llamada recursiva a igualdadProfunda. Para saber si los valores deben ser comparados directamente
(usa el operador == para eso) o si deben tener sus propiedades comparadas, puedes usar el operador typeof.

Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero tienes que tomar una
excepción tonta en cuenta: debido a un accidente histórico, typeof null también produce "object".

La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos.

*/
