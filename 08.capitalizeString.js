// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
// EX: ‘i love you’ => ‘I Love You’, (use str.split function)

function capitalize(string) {
  if (typeof string !== "string") {
    return "Please, write a string";
  } else {
    let stringArray = string.split(" ").map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return stringArray.join(" ");
  }
}

console.log(capitalize("La vie est belle"));
