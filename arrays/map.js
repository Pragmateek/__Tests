console.log(process.version);

var array = ["a", "b", "c"];

var projection = array.map(function(e){ return "Test" + e.toUpperCase(); });

console.log(array);
console.log(projection);