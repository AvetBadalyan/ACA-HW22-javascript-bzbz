//Create a function that will return all the most repeated element.

function duplicateCount(array) {
  let myobject = {};

  for (let i of array) {
    if (!myobject[i]) {
      myobject[i] = 1;
    } else if (myobject[i]) {
      myobject[i]++;
    }
  }

  let counts = Object.values(myobject);
  let max = Math.max(...counts);

  for (let item in myobject) {
    if (myobject[item] === max) {
      return ` the most frequent item is ${item} with a count ${max} `;
    }
  }
}

console.log(
  duplicateCount([
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
