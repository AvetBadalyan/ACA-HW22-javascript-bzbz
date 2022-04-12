// Implementation of Array methods REDUCE and MAP

// Array.map()

Array.prototype.fakeMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

let array = ["Avet", "Rafo", "Martun"];

console.log(array.fakeMap((item) => "Senior " + item));
console.log(array.map((item) => "Senior " + item));
