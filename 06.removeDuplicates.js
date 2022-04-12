// Write a function which will remove all repeated items of array.

function removeDuplicate(array) {
  if (!Array.isArray(array)) {
    return "The input must be an array";
  } else {
    let filteredArray = array.filter((item, index) => {
      return array.indexOf(item) === index;
    });
    return filteredArray;
  }
}

console.log(
  removeDuplicate([
    "Avet",
    "Rafo",
    "Martun",
    "Avet",
    "Elmira",
    "Tigran",
    "Elmira",
    "Elmira",
  ])
);
