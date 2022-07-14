/*
/////FizzBuzz//////
Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar. Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números divisibles por solo uno de ellos). (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje significativo de candidatos a programadores. Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).

*/

let numero = 1;

for (let numero = 1; numero <= 100; numero++) {
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz");}
    
     else if(numero % 3 == 0){
        console.log("Fizz");
    }
    else if (numero % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(numero)
    } 
}


/*
////Solución del libro/////
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

*/