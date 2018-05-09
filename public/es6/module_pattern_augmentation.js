//First, we import the module, then we add properties, then we export it.
var MODULE = (function (my) {

	console.log('module_pattern_augmentation MODULE ', MODULE);
	my.anotherMethod = function () {
		console.log('anotherMethod is running !!');
		console.log('moduleProperty is ', this.moduleProperty);

		console.log('privateVariable is ', this.privateVariable);
	};

	return my;

}(MODULE));