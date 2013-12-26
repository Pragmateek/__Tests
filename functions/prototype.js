console.log(process.version);

function A()
{
}

var a1 = new A();
var a2 = new A();

A.prototype.f = function(){ console.log("123"); };
A.prototype.n = 123;

console.log(a1.constructor);
console.log(a2.constructor);

console.log("==========");

a1.f();

console.log("==========");

console.log(a1.n);
console.log(a2.n);

console.log("==========");

a1.n = 456;

console.log(a1.n);
console.log(a2.n);

console.log("==========");

delete a1.n;

console.log(a1.n);
console.log(a2.n);