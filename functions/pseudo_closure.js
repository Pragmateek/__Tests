console.log(process.version);

function start(char)
{
	var tick = function tick()
	{
		console.log(tick.display);
		tick.display += tick.display[0];
	};
	tick.display = char;
	setInterval(tick, 1000);
}
start("+");
setTimeout(function() { start("*"); },      3000);
setTimeout(function() { start("="); },      5000);
setTimeout(function() { process.exit(0); }, 10000);