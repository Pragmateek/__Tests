console.log(process.version);

var o = {};
var empty = Object.create(null);
var fromEmpty = Object.create(empty);

console.log(typeof o);
console.log(o instanceof Object);
console.log("toString" in o);

console.log("==========");

console.log(typeof empty);
console.log(empty instanceof Object);
console.log("toString" in empty);

console.log("==========");

console.log(typeof fromEmpty);
console.log(fromEmpty instanceof Object);
console.log("toString" in fromEmpty);