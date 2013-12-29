console.log(process.version);

var o = {};
var empty = Object.create(null);
var fromEmpty = Object.create(empty);

console.log(typeof o);
console.log(o instanceof Object);

console.log("==========");

console.log(typeof empty);
console.log(empty instanceof Object);

console.log("==========");

console.log(typeof fromEmpty);
console.log(fromEmpty instanceof Object);