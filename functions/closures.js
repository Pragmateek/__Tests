console.log(process.version)

function MyInteger(n)
{
    var _n = n;
    
    this.value = function()
    {
        return _n;
    };
    
    this.increment = function()
    {
        return ++_n;
    };
}

var i = new MyInteger(123);

console.log(i._n);
console.log(i.value());
console.log(i.increment());
console.log(i.increment());
console.log(i.value());