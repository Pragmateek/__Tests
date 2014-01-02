console.log(process.version);

console.log("0x10" == 16);
console.log(16 == "0x10");

console.log("0x10" == { valueOf : function(){ return 16; } });

var o1 = { toString : function(){ return "0x10"; } };

console.log(o1 == 16);

console.log(o1 == "16");

var o2 = { valueOf : function(){ return 1; }, toString : function(){ return "0x10"; } };

console.log(o2 == 16);

console.log(o2 == "1");