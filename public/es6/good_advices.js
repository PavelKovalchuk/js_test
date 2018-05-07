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

var car = {
    model: 'bmw 2018',
    engine: {
        v6: true,
        turbo: true,
        vin: 12345
    },
    places: [
        'first',
        'second',
        'third'
    ]

};

const modelAndVIN = ({ model, engine: {vin}, places: [dd,ss,gg] }) => {

    console.log(`model: ${model} and vin is ${vin}`);
    console.log(`places info: ${dd} ${ss} ${gg}`);


};

modelAndVIN(car);


//---------------3.3. Слияние объектов---------------//

let object1 = { a:1, b:2,c:3 };
let object2 = { b:30, c:40, d:50};
let merged = { ...object1, ...object2}; //применим оператор расширения для формирования нового объекта

//Ключи свойств объекта №2 переопределят ключи свойств объекта №1.
console.log('merged: ', merged);

//-------------------------------------------------4. Коллекции---------------------------------------//

//-------------------4.1. Удаление повторяющихся значений из массивов---------------//

let arr22 = [1,1,5,2,6,8,5,1,2,1];
let deduped = [ ... new Set(arr22) ];
console.log('deduped: ', deduped);

//----------------4.2. Использование методов массивов с коллекциями-----------//

let mySet = new Set([1,2,3,4,5,6]);
mySet.add(44);
var filtered = [...mySet].filter(
    (x) => x > 3
);

console.log('filtered: ', filtered);


//---------------------------------------------------5. Деструктурирование массивов----------------------------//

//---------------5.1. Обмен значений переменных----------------//

let param1 = 1;
let param2 = 2;
[param1, param2] = [param2, param1];
console.log('param1: ', param1);
console.log('param2: ', param2);


//-------------5.2. Приём и обработка нескольких значений, возвращаемых функцией------------//

async function getFullPost(){
    return await Promise.all([
        fetch('/post'),
        fetch('/comments')
    ]);
}
/*const [post, comments] = getFullPost();
console.log('post: ', post);
console.log('comments: ', comments);*/




























