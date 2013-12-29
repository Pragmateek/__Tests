console.log(process.version);

var arrayOfStrings = new Array("1");
var arrayOfIntegers = new Array(1);
try
{
    new Array(1.5);
}
catch (e)
{
    console.log("Error: " + e);
}

console.log(arrayOfStrings);
console.log(arrayOfIntegers);