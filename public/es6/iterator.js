const book = [
    " Twinkl e , twinkle , l it t l e bat ! " ,
    " How I wonder what you ' re a t ! " ,
    " Up above the world you f l y , " ,
    " L i ke а tea tray in the s ky . " ,
    " Twinkl e , twink l e , l it t l e bat ! " ,
    " How I wonder what you ' re at ! " ,
];

const it = book.entries();

console.log("book ", book);
console.log("it ", it);

console.log("it 1 ", it.next());
console.log("it 2 ", it.next());
console.log("it 3 ", it.next());
console.log("it 4 ", it.next());
console.log("it 5 ", it.next());
console.log("it 6 ", it.next());
console.log("it 7 ", it.next());
console.log("it 8 ", it.next());
console.log("it 9 ", it.next());
console.log("it 10 ", it.next());
//console.log("it first next ", it.next().value + ' ' + it.next().done );


//iterator protocol

class Log{

    //messages = [];

    constructor(){
        this.messages = [];
    }

    add(message){
        this.messages.push({
            message : message,
            timestamp: Date.now()
        });
    }

    [Symbol.iterator](){
        return this.messages.entries();
    }

}

const log = new Log();
log.add('Hello!');
log.add('Hi');
log.add('Buenos dias');
log.add('Hile');

for(let entry of log){
    console.log(entry);
    //console.log(`${entry.message} : ${entry.timestamp}`);
}