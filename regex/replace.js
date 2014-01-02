console.log(process.version);

var map = {
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;"
};

function encode(c)
{
    return map[c];
}

console.log("<pre>&amp;</pre>".replace(/<|>|&/g, encode));