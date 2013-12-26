console.log(process.version);

(function()
{
    console.log(this === global);
})();

var f = function()
{
    return this;
}

console.log(f() === global);

var o1 = { f : f };
var o2 = { f : f };
console.log(o1.f() == o1)
console.log(o2.f() == o2)