console.log(process.version);

var n = 3;
var functions = [];

var dump = function(i)
{
    return function () { console.log(i); };
};

for (var i = 1; i <= n; ++i)
{
    functions.push(dump(i));
}

functions.forEach(function(element, index, array){ element(); });