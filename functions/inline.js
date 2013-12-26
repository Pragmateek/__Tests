var o1 =
{
    f1 : function(){ console.log(this.f1); },
    f2 : function f2(){ console.log(f2); }
};
var o2 =
{
    g1 : o1.f1,
    g2 : o1.f2
};

o1.f1();
o1.f2();
o2.g1();
o2.g2();