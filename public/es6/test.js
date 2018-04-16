"use strict";

const f = (function () {

    let count = 0;

    return function () {
        return `I was called ${++count} times`;
	};

})();

console.log(f());
console.log(f());