/*
// Task: Create an array, print its type, and practice adding and removing elements.
let arr = []; // Arrays use square brackets and have the type "object".
console.log(typeof arr);

let fruits = ["apple", "banana", "peach", "orange"];
fruits.push("mandarin"); // Add an element to the end.
fruits.pop(); // Remove the last element.
fruits.shift(); // Remove the first element.
console.log(fruits);
*/

/*
// Task: Create arrays of users, shopping cart items, and game scores.
// Print the shopping cart items and game scores.
const users = ["Anna", "Ivan", "Peter"];

const cartItems = [
    { name: "Laptop", price: 5000 },
    { name: "Mouse", price: 15 }
];

console.log(cartItems);

const gameScore = [10, 5, 40];
console.log(gameScore);
*/

/*
// Task: Create a function that calculates and returns the sum of numbers in an array.
function sumArray(arr) {
    let sum = 0; // Initialize the total.

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add the current number to the total.
    }

    return sum; // Return the accumulated total.
}

const number = [1, 2, 3, 4, 5];
console.log(sumArray(number));
*/

/*
// Task: Collect all even numbers from an array into a new array and print it.
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
// Task: Create an empty array, add 5 and 10, and print the array.
let arr = [];
arr.push(5);
arr.push(10);
console.log(arr);
*/

/*
// Task: Create an empty array, add three fruits, and print the array.
let fruits = [];
fruits.push("orange");
fruits.push("apple");
fruits.push("banana");
console.log(fruits);
*/

/*
// Task: Use a for loop to print all numbers greater than 5 from an array.
const numbers = [2, 5, 8, 11, 14];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
}
*/

/*
// Task: Use a for loop to print all numbers greater than 10 from an array.
const numbers = [4, 9, 12, 3, 13, 7, 20];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}
*/

/*
// Task: Use a for loop to collect numbers greater than 10 into a new array.
const numbers = [5, 12, 8, 20, 3, 15];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        result.push(numbers[i]);
    }
}

console.log(result);
*/

/*
// Task: Use a while loop to collect numbers greater than 10 into a new array.
let numbers = [3, 8, 12, 5, 20, 7, 14];
let results = [];
let i = 0;

while (i < numbers.length) {
    if (numbers[i] > 10) {
        results.push(numbers[i]);
    }
    i++;
}

console.log(results);
*/

/*
// Task: Use a while loop to calculate and print the sum of numbers greater than 7 in an array.
let numbers = [4, 9, 2, 15, 6, 11, 8];
let i = 0;
let sum = 0;

while (i < numbers.length) {
    if (numbers[i] > 7) {
        sum += numbers[i];
    }
    i++;
}

console.log(sum);
*/
