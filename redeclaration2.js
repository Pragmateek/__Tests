console.log(process.version);

var objects = [];
for (var i = 0; i < 10; ++i)
{
    objects[i] = { value: Math.random() };
}

function isBigger(objects, o)
{
    var max = o.value;
    for (var i = 0; i < objects.length; ++i)
    {
        var o = objects[i];
        max = o.value > max ? o.value : max;
    }
    return max === o.value;
}

console.log(objects);
console.log(isBigger(objects, { value: 2 }));