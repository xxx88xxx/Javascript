/*function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Alex");*/
/*
let f = function() {}
console.log(typeof f);


let square = function(number) {
    return number   // budy function
}

function applyDiscount() {
    //return 1000 - (1000 *  20 / 100);
    return 1000 -(1000 * 0.20);
}
console.log(applyDiscount());


let convertToKilometrs = function(miles) {
    return miles * 1.60934;
}
console.log(convertToKilometrs(50));


let convertToLiters = function(galons) {
    return galons * 3.8;
}
console.log(convertToLiters(45));

let convertToSantimetrs = function(inches) {
    return inches * 2.54
}
console.log(convertToSantimetrs(30))*/

/*const secret = 7;

function checkGues(gues) {
    if (gues === secret) {
        console.log("verno");
    }
    else if (gues < secret) {
        console.log("the number is highier");
    } else {
        console.log("the number is lower");
    }
}
checkGues(7);
checkGues(2);
checkGues(8);*/

/*function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32; 
    }
    console.log(celsiusToFahrenheit(20));*/


/*function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(20, 15));*/

/*function isEven(number) {
    if (number % 2 === 0) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}
isEven(6);
isEven(5);*/

/*
function getEvenNumbers(n) {
    let results = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            results.push(i);
        }
    }
    return results;
}
console.log(getEvenNumbers(10));
*/



/*
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Alex");


function greet(name) {
    console.log(`Hi, ${name}`)
}
greet("Sam");


function sayGoodbye(name) {
    console.log(`Goodbye ${name}`);
}
sayGoodbye("Max");
sayGoodbye("Alex");
*/
/*
function add(a, b) {
    console.log(a + b);
}
add(3, 5);*/


/*
function multiply(a, b) {
    console.log(a * b);
}
multiply(4, 5);*/
/*
function checkNumber(secretNumber, userNumber) {
    if (secretNumber === userNumber) {
        console.log("Correct");
    } else if (secretNumber > userNumber) {
        console.log("Its to low");
    } else {
        console.log("Its to high");
    }
}
checkNumber(5, 6);*/


/*
function greetPerson(name, timeOfDay) {
    if (timeOfDay === "morning") {
        console.log(`Good morning ${name}`);
    } else if (timeOfDay === "day") {
        console.log(`Good day ${name}`);
    } else if (timeOfDay === "evening") {
        console.log(`Good evening ${name}`);
    } else if (timeOfDay === "night") {
        console.log(`Good night ${name}`);
    } else {
        console.log("Unknown time of day");
    }
}
greetPerson("Alex", "day");


*/

/*function getTicketPrice(age) {
   if(age <= 6) {
    console.log("Free")
   } else if (age >= 6 $$ age => 6) {
    console.log(1000);
   } else {
    console.log("700")
   }
 }*/


/*function checkNumber(userNumber, secretNumber) {
    if (userNumber === secretNumber) {
        console.log("The number is Correct");
    } else if (userNumber > secretNumber) {
        console.log("The number is too high")
    } else { console.log("The number is too low"); }

}
checkNumber(6, 6);*/


/*function playCoinFlip(userChoise) {
    let computerChoise;

    if (Math.random() < 0.5) {
        computerChoise = "Heads";
    } else {
        computerChoise = "Tails";
    }

    if (userChoise === computerChoise) {
        console.log("You Win!");
    } else {
        console.log("You lost!");
    }
}
playCoinFlip("Tails");*/


/*function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Alex");
sayHello("Jonn");
sayHello("Mike");*/


/*
function playGame() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const userChoice = 'rock';
    console.log(computerChoice);
    if (userChoice === computerChoice) {
        console.log('tie');
    } else if (
        userChoice === 'rock' && computerChoice === 'scissors'
        || userChoice === 'paper' && computerChoice === 'rock'
        || userChoice === 'scissors' && computerChoice ==='paper') {
        console.log('You win!');
    } else {
        console.log('You lose!')
    }
}
playGame();
*/

/* 
// создаем функцию передаем значение в массив и оприделяем четные и нечетные числа
let numbers = [];
function addNumber(n) {
    numbers.push(n);
    console.log(`Число ${n} добавлено в массив`);
}

addNumber(5);
addNumber(-5);
addNumber(0);
addNumber(3);
addNumber(7);
addNumber(6);
addNumber(-7);
addNumber(7);
addNumber(10);
addNumber(-6);
addNumber(11);
addNumber(-0.5);
addNumber(0.8);

console.log("Existing array", numbers);

// Вторая функция: считает количество положительных и отрицательных нулей

function countNumbers() {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positives++;                            //если число больше 0
        } else if (numbers[i] < 0) {
            negatives++;                            //если число меньше 0
        } else {
            zeros++;                               // если число равно 0
        }
    }


    // выводим результат в консоль

    console.log(`Положительных чисел: ${positives}`);
    console.log(`Отрицательных чисел: ${negatives}`);
    console.log(`Нулей: ${zeros}`);


}

//вызываем функцию
countNumbers();

*/
/*

// посчитать общую сумму в массиве
function calculate(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
// sum = sum + arr[i];
    console.log(sum);

}

let arr = [4, 5, 2]
calculate(arr);
*/

/*
function numbers(a, b) {
    

        let summ = a + b;

    

    console.log(summ);
}
numbers(2, 3);
*/
/*
// передаем 3 значения и она просто должна просто выводиться
function animals(a, b, c) {

    let display = a + b + c;
   
    console.log(display);
}
animals("cat ", "mouse ", "dog");*/

/*
// переводит минуты в часы
function minutesToHours(minutes) {
    return minutes / 60;
}

const totalMinutes = 150;
const result = minutesToHours(totalMinutes);
console.log(result);*/

/*
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1 + nr2 + nr3 + nr4) / 4;
}


console.log(averageOf4Numbers(40,20,30,50));*/


// среднее значение суммы функции в массиве


/*
function averageOfNumbers(nr1, nr2, nr3, nr4, nr5) {
    const number = [nr1, nr2, nr3, nr4, nr5];
    let sum = 0;
    for (i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum / number.length;
}

console.log(averageOfNumbers(40, 50, 20, 30, 70));
*/


/*
function getEvenNumbers(n) {
    let results = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            results.push(i);
        }
    }
    return results;
}
console.log(getEvenNumbers(10));
*/

/*
function isEven(numbers) {
    for (i = 0; i <= numbers.length; i++);
    numbers = (numbers%2 === 0)
    console.log(correct);
} else { console.log } (incorrect;)

isEven([20, 30, 40]); */

/*

for (i = 1; i <= 5; i++) {
    console.log(i);
}*/

/*

for (i = 0; i <= 3; i++) {
console.log("i love programming")
}*/

/*
let x = 5;
if (x == 5 || x == 6) {
    console.log("true");
} else {
    cocsole.log("false");
}

console.log(typeof x);

let city = ["a", "b", "c"]
city.push("d");
console.log(city.length);
city.pop();
console.log(city);
*/
/*

let y = 5;
console.log(`${y}`);

*/

/*
function sum(a, b) {
    console.log(a + b);
}
sum(4,  1);
*/



/*
function long (arr) {

    console.log(arr.length);
}
long([1, 2, 3]);

*/




/*


const numbers = [5, 12, 20, 3, 18, 9, 25];
const result = [];
function getBigNumbers(numbers) {   // только создает логику функции (инструмент)
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] > 10) {
            result.push(numbers[i]) // сохраняет добавляет в массив
        }
    }
    console.log(result);  // это строка говорит, когда функция запушена выведи результат
}
getBigNumbers(numbers); // эта строка запускает функцию


*/


/*
const numbers = [4, 11, 8, 15, 20, 7, 24];

function getEvenNumbers(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    // это строка конец функции
    return result; // это строка главное возврощает значение, результат из функции
}

console.log(getEvenNumbers(numbers)); // это строка с наружи функции

*/



/*
const numbers = [12, 5, 30, 8, 17, 4, 25];

function getNumbersOverTen(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            result.push(numbers[i])
        }
    }
    return result;
}
console.log(getNumbersOverTen(numbers));

*/

/*
const result = []        → создаётся пустой массив
for                      → начинает проходить numbers
if                       → проверяет каждое число
result.push(...)         → подходящие числа добавляются в result
for заканчивается        → все числа проверены
return result            → возвращает готовый массив
функция заканчивается
*/