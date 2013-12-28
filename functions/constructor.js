console.log(process.version);

function f()
{
    return "Test";
}

function g()
{
    return [ "Test" ];
}

function h()
{
    return { s : "Test" };
}

console.log(new f());
console.log(new g());
console.log(new h());