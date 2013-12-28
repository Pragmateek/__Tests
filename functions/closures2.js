console.log(process.version)

function MyInteger(n)
{
    this.value = function()
    {
        return n;
    };
    
    this.increment = function()
    {
        return ++n;
    };
}

var i = new MyInteger(123);

console.log(i.n);
console.log(i.value());
console.log(i.increment());
console.log(i.increment());
console.log(i.value());