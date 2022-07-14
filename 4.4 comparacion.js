/*
//////Comparación profunda/////

El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.

Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o son objetos con las mismas propiedades, donde los valores de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda. Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si deben tener sus propiedades comparadas, puedes usar el operador typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero tienes que tomar una excepción tonta en cuenta: debido a un accidente histórico, typeof null también produce "object". La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos.

//////HINT////////

Tu prueba de si estás tratando con un objeto real se verá algo así como typeof x == "object" && x != null. Ten cuidado de comparar propiedades solo cuando ambos argumentos sean objetos. En todo los otros casos, puede retornar inmediatamente el resultado de aplicar ===.

Usa Object.keys para revisar las propiedades. Necesitas probar si ambos objetos tienen el mismo conjunto de nombres de propiedad y si esos propiedades tienen valores idénticos. Una forma de hacerlo es garantizar que ambos objetos tengan el mismo número de propiedades (las longitudes de las listas de propiedades son las mismas). Y luego, al hacer un ciclo sobre una de las propiedades del objeto para compararlos, siempre asegúrate primero de que el otro realmente tenga una propiedad con ese mismo nombre. Si tienen el mismo número de propiedades, y todas las propiedades en uno también existen en el otro, tienen el mismo conjunto de nombres de propiedad.

Retornar el valor correcto de la función se realiza mejor al inmediatamente retornar falso cuando se encuentre una discrepancia y retornar verdadero al final de la función.



*/
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








/*
// solución del libro

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