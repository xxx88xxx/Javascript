// комментарий 
/*
комментарий
и еще один комментарий
*/

/*
JavaScript (JS) - front/backend
Front - Angular, Vue.js, React
Back - Node.js / Express
Automation (QA) - Selenium / Cypress / Playwright

1) научиться читать код
2) научиться писать код
3) делать XSS инъекции
*/

//let, const, (var)
let x = 5; 
let y = 10;
y = 11;
console.log(y);

const j = 10;
//j = 11; //Assignment to constant variable.
// PI = 3.14

const DOB = "01-01-1990";
const SSN = "1234324234";

//data types, typeof - показывает тип данных переменной
let num = 5; //number
console.log(typeof num);
console.log(num);

let str = "5"; //string
console.log(typeof str);

let isSunny = true; //false
console.log(typeof isSunny); //boolean

let f = function(){}
console.log(typeof f); //function

let arr = [];
console.log(typeof arr); //array -> object

let o = {};
console.log(typeof o); //object

let firstName = "John";
let lastName = "Smith";


//concatenation - слияние (объединение) строк
console.log("My name is " + firstName + " " + lastName);

//interpolation - когда мы подставляем значения переменных через знак доллара
// и используем косые кавычки
console.log(`My name is ${firstName} ${lastName}`);



// == сравнивает только значения 
// === сравнивает значения + тип данных
// = присваивание


console.log(1 == 1); //boolean 
console.log(1 === 1); //true
console.log("1" == 1); //true
console.log("1" === 1); //false

let q = 5;

if(q == 5){
    console.log("OK");
}else{
    console.log("NOT OK");
}

let m = 5;

// !== НЕ!!!!!!!!! НЕ РАВНО!!!
if(m !== 5){
    console.log("OK");
}else{
    console.log("NOT OK");
}

// || - или (or)
// && - и (and)

let n = 5;
// если хотя бы 1 условие совпадает - то это TRUE
if(n == 5 || n == 6 || n == "Erlan" || n == 1111){
    console.log("OK");
}else{
    console.log("NOT OK");
}

if(n == 5 && n == 6){ // FALSE
    console.log("OK");
}else{
    console.log("NOT OK");
}


//array
let cars = ["MB", "BMW", "AUDI", "TESLA"];
console.log(cars);
console.log(cars[3]);
cars.push("FORD");
console.log(cars);
//pop - удаление последнего элемента из массива

console.log(cars.length);


// ++ increment for 1 - инкремент на 1 - увеличение на 1 
for(let i=0; i<cars.length; i++){
    //console.log(cars[i]);
    //0 console.log(cars[0]);
    //1 console.log(cars[1]);
    //2 console.log(cars[2]);
    //3 console.log(cars[3]);
    //4 console.log(cars[4]);
}

for(let car of cars){
    console.log(car);
}


//LOOPS: for. for of 
// круг = итерация 
// 0 1 2 3... 10 
for(let i=0; i<=10; i++){
    //console.log("HELLO");
}
for(let i=0; i<=10; i++){
    console.log(i);
}


//functions
function calculateTwoDigits(){
    let a = 4;
    let b = 5;
    console.log(`сумма а и б равна ${a + b}`);
}
calculateTwoDigits();

function calculateTwoDigits2(){
    let a = 4;
    let b = 5;
    return a + b;
}
console.log(calculateTwoDigits2());

function calculateTwoDigits3(a, b){
    console.log(a + b);
}
calculateTwoDigits3("Hello ", "Erlan");
calculateTwoDigits3(3, 5);

//NAN - not a number

/*
ТУТ БОЛЬШОЙ КУСОК КОДА
100 строк кода
*/

/*
ТУТ БОЛЬШОЙ КУСОК КОДА
*/

/*
ТУТ БОЛЬШОЙ КУСОК КОДА
*/

/*
ТУТ БОЛЬШОЙ КУСОК КОДА
*/