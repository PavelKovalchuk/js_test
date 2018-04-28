function required(paramName) {

    //return false;
    throw `Parameter ${paramName} is required`;

}

function foo(id = required("id")) {

    console.log('foo is working :', id);

}

foo('ddd');
foo();

//Gather and Spread
function boo(...args) {

    console.log('first args : ', args);
    args.unshift(22);
    args.unshift(32);
    bar(...args);



}

function bar(d, h) {
    console.log('___bar____');
    console.log('d : ', d);
    console.log('h : ', h);
}

boo();

var x = [1,2,3];
var y = [4,5];
var z = [0, ...x, ...y];
console.log('z : ', z);