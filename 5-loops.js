
/*
let count = 1

while (count <= 10) {

    console.log(count)  //показываем потом увеличиваем
    count = count + 1
}*/

/*
// цикл от одного до 10, но код слабый

for (let = count = 1; count <= 10; count++) {
    console.log(count);
}*/

// другой цикл более лучще
/*
for (let i = 0; i <= 100; i = i + 5) {
    console.log(i);
    
}*/
/*

for (let i = 1; i <= 5; i ++ ) {
    console.log(i);
}
*/

/*

for (let i = 1; i <= 5; i += 2 ) {
    console.log(i);
}
*/

/*
for (let i = 5 ; i >= 1; i--) {   //обратный отсчет
    console.log(i);
}
*/


/*
for (let i = 10 ; i >= 1; i--) {
    console.log(i);
}
*/


/*
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}
    */


/*
for (let i = 0; i <= 5; i ++) {
    console.log(i);
}*/


/*
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}*/

/* //сложение суммы массива создаем переменную ДО массива!!!
let number = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < number.length; i ++) {
    sum = sum + number[i];
}
console.log(sum);
*/


/* //  найти только четные числа в массиве 
let numbers = [3, 8, 11, 14, 20, 23, 28, 31];
for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

*/




/*
const numbers = [2, 5, 8, 11 ,14];
const result = [];

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 5) {
        result.push(numbers[i]);
    }
}
console.log(result);

*/


/*


const numbers = [2, 5, 8, 11, 14];
const result = [];

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 5) {
        result.push(numbers[i]);
    }
}
console.log(result);

*/




/*
const numbers = [3, 6, 9, 12, 15];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 7) {
        result.push(numbers[i] * 2);
    }
}
console.log(result);


*/




/*
const numbers = [2, 4, 7, 10, 13];
let sum = 0;

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 5) {
        sum += numbers[i];
    }
}

console.log(sum);



*/



/*
const numbers = [3, 6, 8, 11, 14, 17];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5 && numbers[i] < 15) {
        result.push(numbers[i]);
    }
}
console.log(result);



*/




/*

const numbers = [3, 7, 12, 4];

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 5) {
        console.log(numbers[i] * 2);
    } else {
        console.log(numbers[i]);
    }
}


*/


/*

const numbers = [2, 6, 9, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 5) {
        sum += numbers[i] * 2;
    }
}
console.log(sum);

*/


/*

for (let i = 1; i <= 6; i ++) {
    console.log("hi, i am frome USA");
}


*/

/*

for (let i = 2; i <= 7; i++) {
    console.log(i);
}


*/

/*  

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
  

*/




/*
function sayHello () {
    console.log("Hello World");
}
sayHello();
   


*/


/* 



function showNumber(number) {
    console.log(number);

}
showNumber(10);

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
const result = [];

function getEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]) // это строка говорит, добать в новый массив (result)
        }

    }

    console.log(result); // в этой строке выводим значение (result), когда запустишь функцию
}
getEvenNumbers(numbers); // запускает функцию

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
    return result; // это строка главное возврощает значение, результат из функции
}

console.log(getEvenNumbers(numbers));

*/


/*
for (let i = 2; i <= 7; i ++) {
    console.log(i);
}

*/

/*

for (let i = 0; i < 6; i++) {
    console.log("i am frome USA");
}


*/
/*


for (let i = 1; i <= 10; i += 2) {

    console.log(i);
    // здесь 1+2 3+2 5+2 7+2 9+2 =11 не верно
}

*/


/*
const numbers = [5, 18, 3, 25, 10, 40, 7];
//const result = [];  так нельзя делать она за функцией становится глобальной

function getSmallNumbers() {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 10) {
            result.push(numbers[i])
        }
    }
    return result;
}
console.log(getSmallNumbers());

*/



/*
const numbers = [4, 15, 8, 21, 10, 33, 6, 18];

function getEvenNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result; // завершает функцию
}
console.log(getEvenNumbers(numbers));

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


/*
const numbers = [3, 12, 7, 20, 5, 18, 9, 30];


function getNumbersBetween(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 5 && numbers[i] < 20) {
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(getNumbersBetween(numbers));

*/

/*
const numbers = [4, 15, 22, 7, 30, 11, 8, 25];

function getEvenOverTen(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10 && numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(getEvenOverTen(numbers));

*/

/*

const numbers = [5, 12, 8, 20, 3, 15];

function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i ++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(getSum(numbers));

*/


/*
const numbers = [5, 12, 8, 20, 3, 15, 6];

function getEvenSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(getEvenSum(numbers));

*/

/*

const numbers = [4, 12, 25, 8, 30, 16, 5, 22];

function getSumBetween(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10 && numbers[i] < 25) {
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(getSumBetween(numbers));

*/


/*
const numbers = [4, 15, 22, 7, 30, 11, 8, 25, 18];

function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvenNumbers(numbers));

*/


/*
const numbers = [5, 12, 8, 25, 18, 4, 30, 11, 22];

function countEvenOverTen(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0 && numbers[i] > 10) {
            count ++;
        }
    }
    return count;
}
console.log(countEvenOverTen(numbers));

*/


/*
const numbers = [7, 15, 4, 28, 11, 35, 9];

function getMaxNumbers(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] > max) {
            max =(numbers[i]);
        }
    }
    return max;
}
console.log(getMaxNumbers(numbers));

*/


/*
const numbers = [18, 7, 25, 3, 14, 39, 9];

function getMinNumbers(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
console.log(getMinNumbers(numbers));

*/

/*
const numbers = [5, 12, 17, 8, 25, 30, 11, 4];

function getOddSumOverTen(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0 && numbers[i] > 10) {
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(getOddSumOverTen(numbers));

*/

/*

const numbers = [3, 12, 7, 20, 5, 18, 9, 30];

function getOddNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(getOddNumbers(numbers));

*/

/*

const numbers = [3, 12, 7, 20, 5, 18, 9, 30, 15];

function getOddNumbersOverTen(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0 && numbers[i] > 10) {
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(getOddNumbersOverTen(numbers));

*/


/*
const numbers = [5, 14, 23, 8, 17, 30, 11, 6];

function getDoubleOddNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]*2);
        }
    }
    return result;
}
console.log(getDoubleOddNumbers(numbers));

*/

/*

const numbers = [5, 14, 23, 8, 17, 30, 11, 6];

function countNumbersOverTen(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] % 2 !==0 && numbers[i] > 10) {
           count++;
        }
    }
    return count;
}
console.log(countNumbersOverTen(numbers));

*/


/*

const numbers = [4, 12, 7, 25, 18, 9, 30, 15];

function countNumbersBetween(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] > 10 && numbers[i] < 20) {
            count ++;
        }
    }
    return count;
}
console.log(countNumbersBetween(numbers));

*/
/*
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

*/

/*

let i = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}
    */
/*

let i = 10;
while (i >= 1) {
 console.log(i);
 i --;
}
 */


/*
let i = 1;
let sum = 0;
while (i <= 5) {
    sum = sum +i;
    i ++;
}
console.log(sum);

*/


/*
let i = 1;
while (i <=5) {
    console.log(i);
    i++;  // увеличивает на 1 каждый раз
}

*/


/*
let i = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}

*/


/*
let i = 5;
while (i >= 1) {
    console.log(i);

    i -= 1;
}

*/

/*  
let i = 1;
let sum = 0
while (i <= 5) {
    sum += i;
    i++;
}console.log(sum);

*/

/*
let i = 3;
while (i <= 15) {
    console.log(i);
    i += 3;
}

*/


/*
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}

*/
/*
let i = 1;
let sum = 0;
while (i <= 5) {
    sum += i;
    i++;

}
console.log(sum);

*/
/*
let number = 2;
while (number <= 10) {
    console.log(number);
    number += 2;
    
}*/
/*
let numbers = [4, 12, 7, 20, 3, 15];

let i = 0;
let sum = 0;

while (i < number.length, if (numbers) <= 10, i++) {
    numbers[i] += i;
    console.log(sum);
}

*/


/*
let i = 2;

while (i <= 10) {
    console.log(i)
    i += 2;
    
} 


*/



/*
let i = 3;

while (i <= 15) {
    console.log(i);
    i += 3;
}
  */


/*
let i = 2;
let sum = 0;

while (i <= 10) {
    sum += i;
    i += 2;
    
    
}
console.log(i);

*/
/*
let number = 2;

while (number <= 10) {
    console.log(number);
    number += 2;

}
*/
/*
let number = 10;

while (number >= 1) {
    console.log(number);
    number -= 1;
}*/
/*
let number = 1;
let sum = 0;

while (number <= 5) {
    sum += number;
    number ++;
}
console.log(sum);

*/
/*
let number = 2;
let sum = 0;

while (number <= 10) {
    sum += number;
    number += 2;

}
console.log(sum);

*/
/*
let number = 2;
let sum = 0;
while (number <= 10) {
    if (number % 2 === 0) {
        sum += number;
    }
    number ++;
}
console.log(sum);

*/
/*
let number = 1;
let sum = 0;
while (number <= 10) {
    if (number % 2 === 1) {
        sum += number;
    }
number ++;
    
}console.log(sum);

*/
/*

let number = 1;
let count = 0;

while (number <= 10) {
    if (number % 2 === 0) {
        count ++;
    }
    number ++;
} console.log(count);

*/

/*

let i = 1;

while (i <= 5) {
    console.log(i);
    i ++;
}

*/

/*
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}

*/
/*
let  i = 10;

while (i >= 1) {
    
    console.log(i);
    i -= 1;
}

*/
/*
let i = 1;
sum = 0;

while (i <= 5) {
    sum += i;
    i ++;
}
console.log(sum);

*/

/*

let i = 1;
let sum = 0;

while (i <= 10) {
    if (i % 2 === 0) {
        sum += i;
        
    }i ++;
}
console.log(sum);

*/


/*
let i = 1;
let count = 0;

while (i <= 20) {
    if (i % 3 === 0) {
        count += 1;
    } i++;
}
console.log(count);

*/

/*
let i = 1;
let sum = 0;

while (i <= 20) {
    if (i % 4 ===0) {
        sum += i;
    } i ++;
}console.log(sum);

*/


/*
let i = 1;
let sum = 0;

while (i <= 15) {
    if (i % 2 !== 0) {
        sum += i;
    } i++;
} console.log(sum);

*/


/*
let i = 1;
let count = 0;

while (i <= 20) {
    if (i % 2 !== 0) {
        count += 1;
    } i ++;
} console.log(count);

*/
/*
let i = 20;

while (i % 7 !== 0) {
    i++;
} console.log(i);

*/


/*
let i = 30;

while (i % 8 !== 0){
    i++;
}
    console.log(i);

    */
/*
    let i = 1;

    while (i <= 20) {
        if (i % 3 === 0) {
            console.log(i);
        }  i++; // должно выполняться каждый раз, а не только когда число делится
    }

    */


/*
let i = 1;
let sum = 0;

while (i <= 10) {
sum += i;
i++;
} console.log(sum);

*/

/*
let i = 1;
let sum = 0;

while (i <= 20) {
    if (i % 2 ===0) {
        sum += i;
    }i ++;

}console.log(sum);

*/


/*
let i = 1;
let sum = 0;

while (i <= 15) {
    if (i % 2 !== 0) {
        sum += i;
    } i ++;
}
console.log(sum);

*/


/*
let i = 1;
let count = 0;

while (i <= 30) {
    if (i % 5 === 0) {
        count += 1;

    } i++;
} console.log(count);

*/
/*
let i = 10;

while (i >= 1) {
     console.log(i);
    i --;
}

*/


/*
let i = 20;

while (i >= 1) {
    if (i % 2 === 0) {
        console.log(i);
    } i--;
} 

*/


/*
let i = 30;

let count = 0;

while (i >= 1) {
    if ( i % 4 === 0) {
        count += 1;
    } i --;
}console.log(count);

*/


/*
let i = 1;
let count = 0;
let sum = 0;

while (i <= 20) {
    if (i % 3 === 0) {
        sum += i;
        count += 1;
    } i++;
} console.log(sum, count);

*/

/*

let  i = 1;

while (i <= 20) {
    console.log(i);
    if (i === 8) {
        break;
    } i ++;
}


*/
/*
let i = 1;


while (i <= 50) {
    if (i % 4 === 0 && i % 7 === 0) {
    break;
    } i ++;
   
}  console.log(i);

*/


/*
let numbers = [3, 8, 5, 12, 7, 10, 9];
let sum = 0;
let i = 0;

while (i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
        sum += numbers[i];
    } 
        i++;

} console.log(sum);

*/

let numbers = [4, 7, 12, 3, 18, 5, 10];
let i = 0;
let sum = 0;

while(i < numbers.length) {
    if (numbers[i] > 6) {
        sum ++;
    }
    i ++;
    
} console.log(sum);
console.log(i);