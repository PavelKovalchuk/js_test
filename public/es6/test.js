"use strict";

const o = {
    name: 'Helen',
    sayName(){
        console.log('My name is ' + this.name);
    }
};

o.sayName();

class Car {

    constructor(make, model){

        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
        this.vin = Car.getNextVin();

    }

    get userGear(){
        return this._userGear;
    }

    set userGear(value){

        if(this._userGears.indexOf(value) < 0){
            throw new Error(`Error passed in : ${value}`);
        }

        this._userGear = value;

    }

    shift(gear){

        this.userGear = gear;
    }

    static getNextVin(){
        return Car.nextVin++;
    }

    static areSimilar(car1, car2){
        return car1.make === car2.make && car1.model === car2.model;
    }

    static areSame(car1, car2){
        return car1.vin === car2.vin;
    }

}

Car.nextVin = 0;

const car1 = new Car('Tesla', 'Model X');
const car2 = new Car('Mazda', '2X');
const car3 = new Car('Mazda', '2X');

car1.vin;
car2.vin;
car3.vin;

console.log(Car.areSimilar(car1, car2));
console.log(Car.areSame(car2, car3));
console.log(Car.areSame(car2, car2));

car1.shift('D');
car2.shift('R');

console.log(car1);
console.log(car2);

