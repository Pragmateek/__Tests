console.log(process.version);

function A()
{
	console.log("A");
	// this.n = 1;
}

A.prototype.n = 1;
A.prototype.f = function()
{
	console.log("A::f");
};

function B()
{
	A.call(this);
	console.log("B");
	// this.m = 1;
}

B.prototype = new A();
B.prototype.m = 1;
B.prototype.g = function()
{
	console.log("B::g");
	console.log("n : " + this.n);
	console.log("m : " + this.m);
};

console.log("==========");

var a = new A();
a.f();

console.log("==========");

var b = new B();

console.log("==========");

b.f();
b.g();

console.log("==========");

console.log(b instanceof B);
console.log(b instanceof A);
