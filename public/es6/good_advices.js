//"use strict";

/**
 * https://habr.com/company/ruvds/blog/352128/
 */

//----------Обязательные параметры функции------------//
console.log('____________________________________________');
const required = () => {

  throw new Error('Missing parameter');

};

//При вызове этой функции произойдёт ошибка, если параметры "a" или "b" не заданы

const add = ( a = required(), b =required() ) =>  a+b;

var result_1 = add(1,2);
console.log('result_1 : ', result_1);

/*var result_2 = add(1);
console.log('result_2 : ', result_2);*/

var result_3 = add(1, 3);
console.log('result_3 : ', result_3);

console.log('____________________________________________');



//----------------2. Секреты метода reduce-----------------//

//Использование reduce для одновременного выполнения мэппинга и фильтрации массива - вместо map или filter

const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList, num) => {

    num = num * 2; //удвоить каждое число (аналог map)

    //отобрать числа > 50 (аналог filter)
    if (num > 50) {
        finalList.push(num);
    }
    return finalList;
}, []);
var doubledOver50_result = doubledOver50; // [60, 80]

console.log('doubledOver50_result : ', doubledOver50_result);

console.log('____________________________________________');


//------Подсчёт количества совпадающих значений массива (преобразование массива в объект)----------//


var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];

var carsObj = cars.reduce(
    function (obj, name) {
        obj[name] = obj[name] ? ++obj[name] : 1;
        return obj;
    },
    {}
);

console.log('carsObj : ', carsObj);

console.log('____________________________________________');


//----------------------3. Деструктурирование объектов--------------------//

//------3.1. Удаление ненужных свойств----///

/**
 * Вместо того, чтобы перебирать весь объект и удалять подобные свойства,
 * можно извлечь эти свойства в переменные и оставить нужные свойства в rest-параметре.
 */

var secretObj = {
    el1: '1',
    _internal:"secret",
    tooBig:{},
    el2: '2',
    el3: '3'
};

let { _internal, tooBig, ...cleanObject } = secretObj;

console.log('secretObj : ', secretObj);
console.log('cleanObject : ', cleanObject);

console.log('____________________________________________');



//--------------3.2. Деструктурирование вложенных объектов в параметрах функции---//






































