"use strict";

const u1 = {name: 'John'};
const u2 = {name: 'Marta'};
const u3 = {name: 'James'};
const u4 = {name: 'Gordon'};

const userRoles = new Map();

userRoles.set(u1, 'User');
userRoles.set(u2, 'Admin');
userRoles.set(u3, 'User');

console.log(u4);
console.log('userRoles ', userRoles);

console.log('userRoles.get(u2) ', userRoles.get(u2));

console.log('userRoles.has(u1) ', userRoles.has(u1));
console.log('userRoles.has(u4) ', userRoles.has(u4));

console.log('userRoles.size ', userRoles.size);

console.log('userRoles.keys() ', userRoles.keys());
console.log('userRoles.values() ', userRoles.values());
console.log('userRoles.entries() ', userRoles.entries());

for( let u of userRoles.keys() ){
    console.log(u.name);
}

//Destruction

for(let [u,r] of userRoles.entries()){
    console.log(`${u.name}: ${r}`);
}
