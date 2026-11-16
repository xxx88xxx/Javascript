/*
// Task: Use a while loop to calculate the sum of array elements greater than 7.
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

/*
// Task: Find the first number from 1 to 50 divisible by both 4 and 7.
// Stop searching when a matching number is found.
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
// Task: Calculate and print the sum of odd numbers from 1 to 15.
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
// Task: Use a while loop to count down from 10 to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i -= 1;
}
*/

/*
// Task: Count even numbers from 1 to 10.
// Expected result: 5.
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
