console.log(process.version);

var e = "OK";

console.log(e);

try
{
    throw null;
}
catch(e)
{
    console.log("Ooops!");
    e = "KO";
}

console.log(e);