var MODULE = (function () {
	var my = {};

	var	privateVariable = 55;

	function privateMethod() {
		console.log('privateMethod is running');
	}

	var privateMethod2 = function () {
		console.log('privateMethod2 is running !!');
	};

	my.moduleProperty = 66;
	my.moduleMethod = function () {
		console.log('moduleMethod is running');
		console.log('moduleMethod - privateVariable is ' + privateVariable);
		privateMethod();
		privateMethod2();
	};

	return my;
}());

