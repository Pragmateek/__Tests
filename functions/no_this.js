console.log(process.version);

function A()
{
    var me = { n : 0 };
    
    return {
        getN : function(){ return me.n; },
        setN : function(n){ me.n = n; }
    };
}

var a = new A();

console.log(a.getN());
a.setN(1);
console.log(a.getN());