/* 
Write a JS function, which will work as a calculator.
It will accept 3 arguments, first number, second number and the sign
EX:
calc(1, 2, ‘+’) =>3 
calc(1, 2, ‘-’) =>-1
calc(1, 2, ‘*’) =>2
calc(1, 2, ‘/’) =>½

*/

function calc(number1, number2, operator) {
 if (
   typeof number1 !== "number" ||
   typeof number2 !== "number" ||
   typeof operator !== "string"
 ) {
   return "number1 and number2 must be numbers and the operator must be + - * or / ";
 }


  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "/") {
    return number1 / number2;
  } else {
      return "Please, write the operator + - * or / ";
  }
}
console.log(calc(1, 2, "+"));
 console.log(calc(1, 2, "Avet"));