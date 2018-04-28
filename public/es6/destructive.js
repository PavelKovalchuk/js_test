
function foo() {
	return [2,3,4];
	//return null;
}

var [
	a,
	b,
	c,
	d = "Hello default",
	e,
] = foo() || [];

console.log(`a = ${a} b = ${b} c = ${c} d = ${d} e = ${e}` );
//_______________________________//
function foo2() {
	return [2,3,4, [3,4,4,4,1], [4,5,6]];

}

var w,x,y,args,r,g;

[
	w,
	x,
	y = 33,
	args,
	[
		r,
		,
		g,
	]

] = foo2();
g;
console.log(`w = ${w} x = ${x} y = ${y} args = ${args} r = ${r}` );