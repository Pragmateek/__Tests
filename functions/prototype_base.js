console.log(process.version);

var a = { a: "TestA" };
var b = Object.create(a);

console.log(b.__proto__);
console.log(b.constructor);
console.log(b.constructor.prototype);

console.log(b.a);