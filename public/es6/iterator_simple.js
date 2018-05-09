var arr = [1,2,3,4];

var it = arr[Symbol.iterator]();

console.log('arr: ', arr);
console.log('it: ', it);
console.log('it.next: ', it.next());

var obj = {

	[Symbol.iterator](){
		"use strict";
		 var idx= this.start, end = this.end;
		 var it = {
		 	next: () =>{

		 		if(idx <= end){

					var v = this.values[idx];
					idx++;
					return{
						value: v,
						done: (idx > end)
					};

				}else {
		 			return {
		 				done:true
					};
				}


			},
		 };

		 return it;
	},
	values: [ 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32 ],
	start: 4,
	end: 13,
};

var vals = [...obj];

console.log(vals);