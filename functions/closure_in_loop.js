console.log(process.version);

var n = 3;
var functions = [];

for (var i = 1; i <= n; ++i)
{
    (function(i)
    {
        functions.push(function()
        {
            console.log(i);
        })
    })(i);
}

functions.forEach(function(element, index, array){ element(); });