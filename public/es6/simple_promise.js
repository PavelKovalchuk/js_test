const myPromise = ()=>{
    "use strict";

    return new Promise(
        (resolve, reject)=>{
            resolve(' Promise executes normal ');
        }
    );

};

//var result = myPromise();
console.log(myPromise());