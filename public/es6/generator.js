//"use strict";

import "babel-polyfill";
import "regenerator-runtime/runtime";


function* rainbow() {

    yield 'red';
    yield 'blue';
    yield 'green';
    yield 'dark';
    yield 'white';
    yield 'black';
    yield 'azure';
    yield 'yellow';

}

//const it = rainbow();

for( let color of rainbow() ){
    console.log(color);
}