console.log(process.version);

var arrayLike = { "0" : "A", "1" : "B", "2" : "C", length : 3 };

console.log([].concat(arrayLike));
console.log([].concat([].slice.call(arrayLike)));