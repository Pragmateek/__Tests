console.log(process.version);

var o = {};
o.p1 = 1;
Object.defineProperty(o, "p2", {value: 1, writable: true});

var dump = function(){ console.log(o.p1 + " / " + o.p2); };

dump();

++o.p1;
++o.p2;

dump();

console.log(("p1" in o) + " / " + ("p2" in o));

for (var key in o)
{
    console.log(key + ": " + o[key]);
}