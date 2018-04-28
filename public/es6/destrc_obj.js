function foo() {
	return {a:1, b:2, c:3};
}

var {
	a,
	b: x = 42,
	c,
} = foo() || {};


console.log(`a = ${a} c = ${c} x = ${x}`);