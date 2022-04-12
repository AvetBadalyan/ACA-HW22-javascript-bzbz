/* Write a JavaScript function that checks if the given string includes the given substring.
EX: str = “Hello” substr = “ell” => returned value is true
EX: str = “Kill” substr = “lolo” => returned value is false
*/

function checkincluding(string, substring) {
  if (string.includes(substring)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkincluding("Avetis", "Avet"));
console.log(checkincluding("Avetis", "Rafo"));
