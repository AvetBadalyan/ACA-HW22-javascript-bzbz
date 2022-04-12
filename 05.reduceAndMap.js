// Implementation of Array methods REDUCE and MAP
// NEED TO FIX UNDEFINED IN REDUCE

// Array.map() method implementation

Array.prototype.fakeMap = (callback) => {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

let array = ["Avet", "Rafo", "Martun"];

console.log(array.fakeMap((item) => "Senior " + item));
console.log(array.map((item) => "Senior " + item));

// Array.reduce() method implementation

Array.prototype.fakeReduce = (callback, initialValue) => {
  let acc = initialValue;
  let current = 0;

  if (!initialValue) {
    acc = this[0];
    current = 1;
  } 

  for (let i = current; i < this.length; i++) {
    acc = callback(acc, this[i], i,this);
  }

  return acc;
};

const numbers = [2, 4, 6, 8, 10];

console.log(numbers.reduce((acc, current) => acc + current, 0));
console.log(numbers.fakeReduce((acc, current) => acc + current, 0));
