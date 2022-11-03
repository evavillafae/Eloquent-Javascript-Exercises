/*//////Dirección de Escritura Dominante/////
Escriba una función que calcule la dirección de escritura dominante en un string de texto. Recuerde que cada objeto de codigo tiene una propiedad direction que puede ser "ltr" (de izquierda a derecha), "rtl" (de derecha a izquierda), o "ttb" (arriba a abajo). La dirección dominante es la dirección de la mayoría de los caracteres que tienen un código asociado a ellos. Las funciones codigoCaracter y contarPor definidas anteriormente en el capítulo probablemente seran útiles aquí.

////TIP /////
Tu solución puede parecerse mucho a la primera mitad del ejemplo codigosTexto. De nuevo debes contar los caracteres por el criterio basado en codigoCaracter, y luego filtrar hacia afuera la parte del resultado que se refiere a caracteres sin interés (que no tengan codigos). Encontrar la dirección con la mayor cantidad de caracteres se puede hacer con reduce. Si no está claro cómo, refiérate al ejemplo anterior en el capítulo, donde se usa reduce para encontrar el código con la mayoría de los caracteres. */

//------

function codigoCaracter(codigo_caracter) {
  for (let codigo of SCRIPTS) {
    if (codigo.ranges.some(([desde, hasta]) => {
      return codigo_caracter >= desde && codigo_caracter < hasta;
      } ) ) {
          return codigo;
        }
    }
  return null;
}

function map(array, transformar) {
  let mapeados = [];
  for (let elemento of array) {
  mapeados.push(transformar(elemento));
  }
  return mapeados;
}

function direccionDominante(texto) {
  for (let i = 0; i < texto.length - 1; i++) {
    let rango = texto.codePointAt(i);
    console.log(rango);
    let codigo = codigoCaracter(rango);
    console.log(codigo);
    let direcciones = SCRIPTS.filter(codigo => codigo.range == rango);
    console.log(map(direcciones, codigo => codigo.direction));
  }
}
  
  console.log(direccionDominante("Hello!"));
  // → ltr
  console.log(direccionDominante("Hey, مساء الخير"));
  // → rtl
FILTER
  console.log(SCRIPTS.filter(codigo => codigo.direction == "ltr"));
MAP
  function map(array, transformar) {
    let mapeados = [];
    for (let elemento of array) {
    mapeados.push(transformar(elemento));
    }
    return mapeados;
    }
    
    let codigosDerechaAIzquierda = SCRIPTS.filter(codigo => codigo.rango == rango);
    console.log(map(codigosDerechaAIzquierda, codigo => codigo.direction));
REDUCE
    function reduce(array, combinar, inicio) {
      let actual = inicio;
      for (let elemento of array) {
      actual = combinar(actual, elemento);
      }
      return actual;
      }
      console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

      function cuentaDeCaracteres(codigo) {
        return codigo.ranges.reduce((cuenta, [desde, hasta]) => {
        return cuenta + (hasta - desde);
        }, 0);
        }
        console.log(SCRIPTS.reduce((a, b) => {
        return cuentaDeCaracteres(a) < cuentaDeCaracteres(b) ? b : a;
        }));
        // → {name: "Han", ...}
CODIGOCARACTER

  function contarPor(elementos, nombreGrupo) {
    let cuentas = [];
    for (let elemento of elementos) {
    let nombre = nombreGrupo(elemento);
    let conocido = cuentas.findIndex(c => c.nombre == nombre);
    if (conocido == -1) {
    cuentas.push({nombre, cuenta: 1});
    } else {
    cuentas[conocido].cuenta++;
    }
    }
    return cuentas;
    }
    console.log(contarPor([1, 2, 3, 4, 5], n => n > 2));
    // → [{nombre: false, cuenta: 2}, {nombre: true, cuenta: 3}]
    function codigosTexto(texto) {
      let codigos = contarPor(texto, caracter => {
      let codigo = codigoCaracter(caracter.codePointAt(0));
      return codigo ? codigo.name : "ninguno";
      }).filter(({name}) => name != "ninguno");
      let total = codigos.reduce((n, {count}) => n + count, 0);
      if (total == 0) return "No se encontraron codigos";
      return codigos.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
      }).join(", ");
      }
      console.log(codigosTexto('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
      // → 61% Han, 22% Latin, 17% Cyrillic


      function codigoCaracter(codigo_caracter) {
        for (let codigo of SCRIPTS) {
          if (codigo.ranges.some(([desde, hasta]) => {
            return codigo_caracter >= desde && codigo_caracter < hasta;
            } ) ) {
                return codigo;
              }
          }
        return null;
      }
      
      function contarPor(elementos, nombreGrupo, condicional) {
                let cuentas = [];
                for (let elemento of elementos) {
                  
                  let conocido = cuentas.findIndex(c => c.condicional == condicional);
                  if (conocido == -1) {
                      cuentas.push({nombreGrupo, cuenta: 1});
                  } else {
                      cuentas[conocido].cuenta++;
                      }
                }
            return cuentas;
            }
      
      function direccionDominante(texto) {
        let direccion = [];
        for (let i = 0; i <= texto.length - 1; i++) { 
              let rango = texto.codePointAt(i);
              console.log(rango);
              let codigo = codigoCaracter(rango);
              console.log(codigo);
              let cosa = codigo.direction;
              direccion.push(cosa);
              console.log(direccion);
              console.log(contarPor(direccion, codigo.direction, n => codigo.direction != "ltr"));
        }
      }
      console.log(direccionDominante("eHlلlخo!"));



      function codigosTexto(texto) {
        let codigos = countBy(texto, caracter => {
        let codigo = characterScript(caracter.codePointAt(0));
        return codigo ? codigo.direction : "ninguno";
        }).filter(({name}) => name != "ninguno");
         let total = codigos.reduce((n, {count}) => n + count, 0);
       if (total == 0) return "No se encontraron codigos";
    
        return codigos.map(({name, count}) => {
          console.log(`${count} ${name}`)
          console.log(codigos);
         return `${count} ${name}`;
            })
        }
    console.log(codigosTexto('لeHlلlخoلللللللللل'));

    
//// Mi solucion ////

    function direccionDominante(texto) {
      let codigos = countBy(texto, caracter => {
      let codigo = characterScript(caracter.codePointAt(0));
      return codigo ? codigo.direction : "ninguno";
      }).filter(({name}) => name != "ninguno");
       let total = codigos.reduce((n, {count}) => n + count, 0);
     if (total == 0) return "No se encontraron codigos";
    
    console.log(codigos.reduce((a, b) => {
          return a.count < b.count ? b.name : a.name
        }));
    }
console.log(direccionDominante('لeHlلlخoلللللللللل'));
console.log(direccionDominante("Hello!"));
console.log(direccionDominante("Hey, مساء الخير"));












/* Solución del libro
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

*/