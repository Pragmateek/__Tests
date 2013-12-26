var myF = function f()
{
    console.log("[" + arguments.callee.name + "]");
};

var myG = function()
{
    console.log("[" + arguments.callee.name + "]");
};

function h()
{
    console.log("[" + arguments.callee.name + "]");
}

console.log(process.version);
console.log("[" + myF.name + "]");
console.log("[" + myG.name + "]");
console.log("[" + h.name + "]");
//f();
myF();
myG();
h();
console.log(global.f);
console.log(global.myF);
console.log(global.myG);
console.log(global.h);