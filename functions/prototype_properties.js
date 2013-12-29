console.log(process.version);

function A()
{
    this.n = 0;
    this.a = [];
}

var a1 = new A();
var a2 = new A();

console.log(a1.hasOwnProperty("n") + " / " + a2.hasOwnProperty("n"));
console.log(a1.hasOwnProperty("a") + " / " + a2.hasOwnProperty("a"));

console.log("==========")

++a1.n;

console.log(a1.hasOwnProperty("n") + " / " + a2.hasOwnProperty("n"));
console.log(a1.hasOwnProperty("a") + " / " + a2.hasOwnProperty("a"));

console.log(a1.n + " / " + a2.n);

console.log("==========")

a1.a.push("1");
a1.a.push("1");

console.log(a1.hasOwnProperty("n") + " / " + a2.hasOwnProperty("n"));
console.log(a1.hasOwnProperty("a") + " / " + a2.hasOwnProperty("a"));

console.log(a1.a + " / " + a2.a);