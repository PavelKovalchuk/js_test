const roles = new Set();
roles.add('Admin');
roles.add('User');

console.log('roles', roles);

const naughty = new WeakSet();

const children = [
    {name: 'Suzy'},
    {name: 'Derek'}
];

naughty.add(children[1]);

for(let child of children){
    if(naughty.has(child)){
        console.log(`It is a bad child - ${child.name}`);
    }else{
        console.log(`I will give a present to ${child.name}`);
    }
}