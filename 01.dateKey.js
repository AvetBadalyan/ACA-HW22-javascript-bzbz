// Create an object which will have a date key

Object.prototype.date = (function () {
    return new Date();
})();

let obj = { name: "Avet" };
console.log(obj.date);