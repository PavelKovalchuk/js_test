class Vehicle{

	constructor(){
		this.passengers = [];
		console.log('Vihicle is created');
	}

	addPassenger(p){
		this.passengers.push(p);
	}

}

class Car extends Vehicle{

	constructor(){
		super();
		console.log('Car is created');
	}

	deployAirbags(){
		console.log('Bohh');
	}

	toString(){
		return 'object Car is fun';
	}

}

//Mixin
class InsurancePolicy{
	

}

function makeInsurable(o) {
	o.addInsurancePolicy = function (p) {
		this.insurancePolicy = p;
	};
	
	o.getInsurancePolicy = function () {
		return this.insurancePolicy;
	};
	
	o.isInsured = function () {
		return !!this.insurancePolicy;
	};
}

const v = new Vehicle();
v.addPassenger('John');
v.addPassenger('Marta');

console.log(v.passengers);

const c = new Car();
c.addPassenger('Gordon');
c.addPassenger('Roma');

console.log(c.passengers);

//v.deployAirbags();
c.deployAirbags();

//Mixin
makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());

console.log(car1);