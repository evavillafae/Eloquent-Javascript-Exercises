/* English
////// FizzBuzz //////
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a
significant percentage of programmer candidates. So if you solved it,
your labor market value just went up.)

*/


////// My Solution - Mi solución //////
let n = 1;

for (let n = 1; n <= 100; n++) {
    // Check that the two conditions are met, in this case that it is divisible by 3 and 5
    // Chequea que se cumplan las dos condiciones, en este caso que sea divisible entre 3 y 5
    if(n % 3 == 0 && n % 5 == 0){
        console.log("FizzBuzz");
    }
    
    // Check that it is divisible by 3
    // Chequea que sea divisible entre 3
     else if(n % 3 == 0){
        console.log("Fizz");
    }
    
    // Check that it is divisible by 5
    // Chequea que sea divisible entre 5
    else if (n % 5 == 0){
        console.log("Buzz");
    }
    // If none of the conditions is met, write the corresponding number
    // Si no se cumple ninguna de las condiciones escribe el número correspondiente
    else {
        console.log(n)
    } 
}


////// Book Solution - Solución del libro //////
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


/* Español
////// FizzBuzz //////
Escribe un programa que use console.log para imprimir todos los números de 1 a 100,
con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número,
y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para
números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números
divisibles por solo uno de ellos).

(Esta es en realidad una pregunta de entrevista que se
ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si la
puedes resolver, tu valor en el mercado laboral acaba de subir).

*/
