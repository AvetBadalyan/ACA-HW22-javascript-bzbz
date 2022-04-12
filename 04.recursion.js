/* Let’s say we have an object with linked props 
Print all the values with recursion.
*/

function printNestedValues(object) {
  console.log(object.value);
  if (object.next) {
    printNestedValues(object.next);
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printNestedValues(list);
