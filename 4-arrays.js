/*let arr = []; // square brackets, array. arr   -массив, объект
console.log(typeof arr)

let fruits = ["apple", "banana", "peach", "orange"]
fruits.push("mandarin");
fruits.pop();
fruits.shift();
console.log(fruits)*/


/*const users = ['Anna', 'Ivan', 'Peter'];
const cartItems = [
    { name: 'Leptop', price: 5000 },
    { name: 'mouse', price: 15 }
];
console.log(cartItems);
const gameScore = [10, 5, 40];
console.log(gameScore);*/


// напиши функцию, которая считает суммарную длину строк в массиве


/*
function sumArray(arr) {
    let sum = 0; // эта строка нужна чтобы начать рассчет (или представляет собой пустую корзину)
    for (let i = 0; i < arr.length; i++) {  // создается начальная точка, уловие и шагю
        sum += arr[i];
    }
    return sum; // выполняет накопленный результат
}
const number = [1, 2, 3, 4, 5]; // данные строки
console.log(sumArray(number)); // эта строка коды выводит результат в консоль


*/



/*
let numbers = [3, 8, 11, 4, 14, 20];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

*/


/*

let arr = [];
arr.push(5);
arr.push(10);
console.log(arr);

*/



/*
let fruits = [];
fruits.push ("orange");
fruits.push ("apple");
fruits.push ("banana");
console.log(fruits);

*/





/* // переменная - массив - цикл - условие
const numbers = [2, 5, 8, 11, 14]; 
for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > 5) {
    console.log(numbers[i]);
    }
}


*/




/*
const numbers = [4, 9, 12, 3, 13, 7, 20];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

*/



/*


const numbers =[5, 12, 8, 20, 3, 15];
const result = [];

for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] > 10) {
        result.push(numbers[i]);
        }
    }

    console.log(result);

    */
/*
let numbers = [3, 8, 12, 5, 20, 7, 14];
let results = [];
let i = 0;

while (i < numbers.length) {
    if (numbers[i] > 10) {
        results.push(numbers[i]);
    } i++;
} console.log(results);

*/


let numbers = [4, 9, 2, 15, 6, 11, 8 ];
let i = 0;
let sum = 0;

while (i < numbers.length) {
    if (numbers[i] > 7) {
        sum += numbers[i];
    } i ++;
}console.log(sum);