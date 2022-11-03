/* English
////// Your own loop //////
Write a higher-order function loop that provides something like a for loop statement.
It takes a value, a test function, an update function, and a body function.
Each iteration, it first runs the test function on the current loop value and stops if that returns false.
Then it calls the body function, giving it the current value. Finally, it calls the update function
to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/


////// My solution - Mi solución //////
function ciclo(valor, prueba, act, cuerpo) {
    for (let n = valor; prueba(n) ; n = act(n)) {
        cuerpo(n)
    }
}

ciclo(3, n => n > 0, n => n - 1, console.log);


////// Book solution - Solución del libro //////
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

/* Español
////// Tu propio ciclo //////
Escriba una función de orden superior llamada ciclo que proporcione algo así como una declaración de ciclo for.
Esta toma un valor, una función de prueba, una función de actualización y un cuerpo de función. En cada iteración,
primero ejecuta la función de prueba en el valor actual del ciclo y se detiene si esta retorna falso.
Luego llama al cuerpo de función, dándole el valor actual. Y finalmente, llama a la función de actualización
para crear un nuevo valor y comienza desde el principio.

Cuando definas la función, puedes usar un ciclo regular para hacer los ciclos reales.
*/
