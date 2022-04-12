/* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

function findTheLongestWord(string) {
  if (typeof string !== "string") {
    return "Please, write a String";
  } else {
    let stringArray = string.split(" ");
    let lengths = stringArray.map((item) => {
      return item.length;
    });
    max = Math.max(...lengths);
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length === max) {
        return stringArray[i];
      }
    }
  }
}

console.log(findTheLongestWord("it's not a bootcamp, it's a synchrofazatron "));
