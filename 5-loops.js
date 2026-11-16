/*
// Task: Use a while loop to print numbers from 1 to 10.
let count = 1;

while (count <= 10) {
    console.log(count); // Print the number before incrementing it.
    count = count + 1;
}
*/

/*
// Task: Use a for loop to print numbers from 1 to 10.
for (let count = 1; count <= 10; count++) {
    console.log(count);
}
*/

/*
// Task: Print numbers from 0 to 100 in increments of 5.
for (let i = 0; i <= 100; i = i + 5) {
    console.log(i);
}
*/

/*
// Task: Use a for loop to print numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
*/

/*
// Task: Print odd numbers from 1 to 5 using a step of 2.
for (let i = 1; i <= 5; i += 2) {
    console.log(i);
}
*/

/*
// Task: Use a for loop to count down from 5 to 1.
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
*/

/*
// Task: Use a for loop to count down from 10 to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
*/

/*
// Task: Use a for loop and a condition to print even numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

/*
// Task: Use a for loop to print numbers from 0 to 5.
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
*/

/*
// Task: Print each fruit in an array using a for loop.
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

/*
// Task: Calculate and print the sum of all numbers in an array.
let number = [10, 20, 30, 40];
let sum = 0; // Initialize the total before the loop.

for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
}

console.log(sum);
*/

/*
// Task: Print all even numbers from an array.
let numbers = [3, 8, 11, 14, 20, 23, 28, 31];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
*/

/*
// Task: Collect numbers greater than 5 into a new array and print it.
const numbers = [2, 5, 8, 11, 14];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        result.push(numbers[i]);
    }
}

console.log(result);
*/

/*
// Task: Practice filtering numbers greater than 5 into a new array.
const numbers = [2, 5, 8, 11, 14];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        result.push(numbers[i]);
    }
}

console.log(result);
*/

/*
// Task: Double numbers greater than 7 and collect the results in a new array.
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
// Task: Calculate and print the sum of array elements greater than 5.
const numbers = [2, 4, 7, 10, 13];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        sum += numbers[i];
    }
}

console.log(sum);
*/

/*
// Task: Collect numbers greater than 5 and less than 15 into a new array.
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
// Task: Double numbers greater than 5 and print other numbers unchanged.
const numbers = [3, 7, 12, 4];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i] * 2);
    } else {
        console.log(numbers[i]);
    }
}
*/

/*
// Task: Calculate the sum of doubled values for numbers greater than 5.
const numbers = [2, 6, 9, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        sum += numbers[i] * 2;
    }
}

console.log(sum);
*/

/*
// Task: Use a for loop to print a sentence six times.
for (let i = 1; i <= 6; i++) {
    console.log("Hi, I am from the USA.");
}
*/

/*
// Task: Use a for loop to print numbers from 2 to 7.
for (let i = 2; i <= 7; i++) {
    console.log(i);
}
*/

/*
// Task: Print odd numbers from 1 to 10 using a step of 2.
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}
*/

/*
// Task: Create and call a function that prints "Hello World".
function sayHello() {
    console.log("Hello World");
}

sayHello();
*/

/*
// Task: Create a function that takes a number and prints it.
// Call the function with 10.
function showNumber(number) {
    console.log(number);
}

showNumber(10);
*/

/*
// Task: Create a function that collects and prints numbers greater than 10.
const numbers = [5, 12, 20, 3, 18, 9, 25];
const result = [];

function getBigNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            result.push(numbers[i]); // Add a matching number to the result.
        }
    }

    console.log(result); // Print the collected numbers.
}

getBigNumbers(numbers); // Call the function.
*/

/*
// Task: Create a function that collects and prints even numbers.
const numbers = [4, 11, 8, 15, 20, 7, 24];
const result = [];

function getEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]); // Add an even number to the result.
        }
    }

    console.log(result);
}

getEvenNumbers(numbers);
*/

/*
// Task: Create a function that returns a new array containing only even numbers.
const numbers = [4, 11, 8, 15, 20, 7, 24];

function getEvenNumbers(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result; // Return the completed array.
}

console.log(getEvenNumbers(numbers));
*/

/*
// Task: Practice printing numbers from 2 to 7 with a for loop.
for (let i = 2; i <= 7; i++) {
    console.log(i);
}
*/

/*
// Task: Print "I am from the USA." six times.
for (let i = 0; i < 6; i++) {
    console.log("I am from the USA.");
}
*/

/*
// Task: Print odd numbers from 1 to 10.
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
    // After printing 9, i becomes 11 and the loop stops.
}
*/

/*
// Task: Create a function that returns numbers less than 10.
const numbers = [5, 18, 3, 25, 10, 40, 7];

function getSmallNumbers() {
    const result = []; // Keep the result local to this function call.

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 10) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(getSmallNumbers());
*/

/*
// Task: Return all even numbers from the array using a function.
const numbers = [4, 15, 8, 21, 10, 33, 6, 18];

function getEvenNumbers(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result; // End the function and return the result.
}

console.log(getEvenNumbers(numbers));
*/

/*
// Task: Create a function that returns numbers greater than 10.
const numbers = [12, 5, 30, 8, 17, 4, 25];

function getNumbersOverTen(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(getNumbersOverTen(numbers));
*/

/*
// Filtering logic:
// 1. Create an empty result array.
// 2. Loop through the input array.
// 3. Check each number with a condition.
// 4. Add matching numbers using result.push(...).
// 5. Finish checking all numbers.
// 6. Return the completed result array.
*/

/*
// Task: Return numbers greater than 5 and less than 20.
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
// Task: Return even numbers greater than 10.
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
// Task: Create a function that returns the sum of all numbers in an array.
const numbers = [5, 12, 8, 20, 3, 15];

function getSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(getSum(numbers));
*/

/*
// Task: Create a function that returns the sum of even numbers in an array.
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
// Task: Return the sum of numbers greater than 10 and less than 25.
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
// Task: Create a function that counts even numbers in an array.
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
// Task: Count even numbers greater than 10.
const numbers = [5, 12, 8, 25, 18, 4, 30, 11, 22];

function countEvenOverTen(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0 && numbers[i] > 10) {
            count++;
        }
    }

    return count;
}

console.log(countEvenOverTen(numbers));
*/

/*
// Task: Find and return the largest number in a nonempty array.
const numbers = [7, 15, 4, 28, 11, 35, 9];

function getMaxNumbers(numbers) {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(getMaxNumbers(numbers));
*/

/*
// Task: Find and return the smallest number in a nonempty array.
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
// Task: Return the sum of odd numbers greater than 10.
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
// Task: Return a new array containing only odd numbers.
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
// Task: Return odd numbers greater than 10.
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
// Task: Double each odd number and return the results in a new array.
const numbers = [5, 14, 23, 8, 17, 30, 11, 6];

function getDoubleOddNumbers(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i] * 2);
        }
    }

    return result;
}

console.log(getDoubleOddNumbers(numbers));
*/

/*
// Task: Count odd numbers greater than 10.
const numbers = [5, 14, 23, 8, 17, 30, 11, 6];

function countNumbersOverTen(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0 && numbers[i] > 10) {
            count++;
        }
    }

    return count;
}

console.log(countNumbersOverTen(numbers));
*/

/*
// Task: Count numbers greater than 10 and less than 20.
const numbers = [4, 12, 7, 25, 18, 9, 30, 15];

function countNumbersBetween(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10 && numbers[i] < 20) {
            count++;
        }
    }

    return count;
}

console.log(countNumbersBetween(numbers));
*/

/*
// Task: Use a while loop to print numbers from 1 to 5.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
*/

/*
// Task: Print even numbers from 2 to 10 using a while loop.
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
*/

/*
// Task: Use a while loop to count down from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
*/

/*
// Task: Calculate and print the sum of numbers from 1 to 5.
let i = 1;
let sum = 0;

while (i <= 5) {
    sum = sum + i;
    i++;
}

console.log(sum);
*/

/*
// Task: Practice printing numbers from 1 to 5 with a while loop.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++; // Increase the counter by 1 after each iteration.
}
*/

/*
// Task: Practice printing even numbers from 2 to 10.
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
*/

/*
// Task: Use a while loop to count down from 5 to 1.
let i = 5;

while (i >= 1) {
    console.log(i);
    i -= 1;
}
*/

/*
// Task: Use += to calculate the sum of numbers from 1 to 5.
let i = 1;
let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum);
*/

/*
// Task: Print multiples of 3 from 3 to 15.
let i = 3;

while (i <= 15) {
    console.log(i);
    i += 3;
}
*/

/*
// Task: Print numbers from 2 to 10 in increments of 2.
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
*/

/*
// Task: Practice calculating the sum of numbers from 1 to 5.
let i = 1;
let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum);
*/

/*
// Task: Print even numbers from 2 to 10 using a number variable.
let number = 2;

while (number <= 10) {
    console.log(number);
    number += 2;
}
*/

/*
// Task: Practice summing array elements that are at most 10.
// This attempt contains syntax errors and needs correction.
let numbers = [4, 12, 7, 20, 3, 15];
let i = 0;
let sum = 0;

while (i < number.length, if (numbers) <= 10, i++) {
    numbers[i] += i;
    console.log(sum);
}
*/

/*
// Task: Practice printing even numbers with a while loop.
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
*/

/*
// Task: Use a while loop to print multiples of 3 up to 15.
let i = 3;

while (i <= 15) {
    console.log(i);
    i += 3;
}
*/

/*
// Task: Accumulate even numbers from 2 to 10.
// Note: This attempt prints the final counter instead of the sum.
let i = 2;
let sum = 0;

while (i <= 10) {
    sum += i;
    i += 2;
}

console.log(i);
*/

/*
// Task: Print even numbers from 2 to 10.
let number = 2;

while (number <= 10) {
    console.log(number);
    number += 2;
}
*/

/*
// Task: Count down from 10 to 1 using a while loop.
let number = 10;

while (number >= 1) {
    console.log(number);
    number -= 1;
}
*/

/*
// Task: Calculate the sum of numbers from 1 to 5 using a while loop.
let number = 1;
let sum = 0;

while (number <= 5) {
    sum += number;
    number++;
}

console.log(sum);
*/

/*
// Task: Calculate the sum of even numbers from 2 to 10 using a step of 2.
let number = 2;
let sum = 0;

while (number <= 10) {
    sum += number;
    number += 2;
}

console.log(sum);
*/

/*
// Task: Use a condition to sum even numbers from 2 to 10.
let number = 2;
let sum = 0;

while (number <= 10) {
    if (number % 2 === 0) {
        sum += number;
    }
    number++;
}

console.log(sum);
*/

/*
// Task: Calculate the sum of odd numbers from 1 to 10.
let number = 1;
let sum = 0;

while (number <= 10) {
    if (number % 2 === 1) {
        sum += number;
    }
    number++;
}

console.log(sum);
*/

/*
// Task: Count even numbers from 1 to 10.
let number = 1;
let count = 0;

while (number <= 10) {
    if (number % 2 === 0) {
        count++;
    }
    number++;
}

console.log(count);
*/

/*
// Task: Print numbers from 1 to 5 using a while loop.
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
*/

/*
// Task: Print even numbers from 2 to 10 using a while loop.
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}
*/

/*
// Task: Print numbers in descending order from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i -= 1;
}
*/

/*
// Task: Calculate the sum of numbers from 1 to 5.
let i = 1;
let sum = 0;

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum);
*/

/*
// Task: Calculate the sum of even numbers from 1 to 10.
let i = 1;
let sum = 0;

while (i <= 10) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);
*/

/*
// Task: Count numbers divisible by 3 from 1 to 20.
let i = 1;
let count = 0;

while (i <= 20) {
    if (i % 3 === 0) {
        count += 1;
    }
    i++;
}

console.log(count);
*/

/*
// Task: Calculate the sum of numbers divisible by 4 from 1 to 20.
let i = 1;
let sum = 0;

while (i <= 20) {
    if (i % 4 === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);
*/

/*
// Task: Calculate the sum of odd numbers from 1 to 15.
let i = 1;
let sum = 0;

while (i <= 15) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}

console.log(sum);
*/

/*
// Task: Count odd numbers from 1 to 20.
let i = 1;
let count = 0;

while (i <= 20) {
    if (i % 2 !== 0) {
        count += 1;
    }
    i++;
}

console.log(count);
*/

/*
// Task: Find the first number greater than or equal to 20 that is divisible by 7.
let i = 20;

while (i % 7 !== 0) {
    i++;
}

console.log(i);
*/

/*
// Task: Find the first number greater than or equal to 30 that is divisible by 8.
let i = 30;

while (i % 8 !== 0) {
    i++;
}

console.log(i);
*/

/*
// Task: Print all numbers divisible by 3 from 1 to 20.
let i = 1;

while (i <= 20) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++; // Increment every iteration, not only when the condition is true.
}
*/

/*
// Task: Use a while loop to calculate the sum of numbers from 1 to 10.
let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum);
*/

/*
// Task: Calculate the sum of even numbers from 1 to 20.
let i = 1;
let sum = 0;

while (i <= 20) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);
*/

/*
// Task: Practice calculating the sum of odd numbers from 1 to 15.
let i = 1;
let sum = 0;

while (i <= 15) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}

console.log(sum);
*/

/*
// Task: Count numbers divisible by 5 from 1 to 30.
let i = 1;
let count = 0;

while (i <= 30) {
    if (i % 5 === 0) {
        count += 1;
    }
    i++;
}

console.log(count);
*/

/*
// Task: Practice counting down from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
*/

/*
// Task: Print even numbers in descending order from 20 to 1.
let i = 20;

while (i >= 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i--;
}
*/

/*
// Task: Count numbers divisible by 4 while counting down from 30 to 1.
let i = 30;
let count = 0;

while (i >= 1) {
    if (i % 4 === 0) {
        count += 1;
    }
    i--;
}

console.log(count);
*/

/*
// Task: Calculate the sum and count of numbers divisible by 3 from 1 to 20.
let i = 1;
let count = 0;
let sum = 0;

while (i <= 20) {
    if (i % 3 === 0) {
        sum += i;
        count += 1;
    }
    i++;
}

console.log(sum, count);
*/

/*
// Task: Print numbers starting from 1 and stop after printing 8.
let i = 1;

while (i <= 20) {
    console.log(i);

    if (i === 8) {
        break;
    }

    i++;
}
*/

/*
// Task: Find the first number from 1 to 50 divisible by both 4 and 7.
let i = 1;

while (i <= 50) {
    if (i % 4 === 0 && i % 7 === 0) {
        break;
    }
    i++;
}

console.log(i);
*/

/*
// Task: Use a while loop to calculate the sum of odd numbers in an array.
let numbers = [3, 8, 5, 12, 7, 10, 9];
let sum = 0;
let i = 0;

while (i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
        sum += numbers[i];
    }
    i++;
}

console.log(sum);
*/

/*
// Task: Count array elements greater than 6 and print the final loop index.
// Note: The variable named sum acts as a counter in this exercise.
let numbers = [4, 7, 12, 3, 18, 5, 10];
let i = 0;
let sum = 0;

while (i < numbers.length) {
    if (numbers[i] > 6) {
        sum++;
    }
    i++;
}

console.log(sum);
console.log(i);
*/
