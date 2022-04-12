"use strict"
// Return the sum of all arguments passed to function.
// Example: f(1,2,3,4) => 24, f(4,7) => 28, f(4) => 4

function sum(...args) {
  if ([...args].every((arg) => typeof arg === "number")) {
    return [...args].reduce((acc, current) => acc + current, 0);
  } else {
    return "Please, write only numbers";
  }
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, "Avet"));
