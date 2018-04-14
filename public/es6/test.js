"use strict";

const sententaces = [
    {subject: "ES6", verb:"is", object: "sweet"},
    {subject: "ES5", verb:"is so", object:"last year"}
];
function say({subject,verb,object}){
    console.log(`${subject} ${verb} ${object}`);
}
for(let s of sententaces){
    say(s);
}