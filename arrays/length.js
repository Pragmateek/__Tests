console.log(process.version);

var a = [];

a[10] = 1;

console.log(a.length);

a[5] = 1;

for (var i in a)
{
    process.stdout.write(i + " ");
}