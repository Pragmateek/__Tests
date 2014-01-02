"use strict";

console.log(process.version);

function makeObject()
{
    return { n : 1, f : function(){} };
}

var o = makeObject();
Object.preventExtensions(o);

o.n = 0;
o.f = null;
delete o.n;
delete o.f;

try
{
    o.a = 1;
}
catch (e)
{
    console.log("Cannot extend:" + e);
}

o = makeObject();
Object.seal(o);

o.n = 0;
o.f = null;

try
{
    delete o.n;
}
catch (e)
{
    console.log("Cannot delete:" + e);
}

o = makeObject();
Object.freeze(o);

try
{
    o.n = 0;
}
catch (e)
{
    console.log("Cannot change:" + e);
}