/*
// Task: Create functions to add numbers to an array and print their sum and average.
let numbers = [];

function number(n) {
    numbers.push(n);
    console.log(`Number ${n} added to the array.`);
}

number(5);
number(7);
number(1);
console.log(numbers);

function avarage() {
    let sum = 0;

    for (let n = 0; n < numbers.length; n++) {
        sum = sum + numbers[n];
    }

    console.log(sum);

    let avarageNumber = sum / numbers.length;
    console.log(avarageNumber);
}

avarage();

// Study questions:
// 1. Why is the array initially empty?
// 2. How do number(5), number(7), and number(1) call the function without console.log?
// 3. In what order does the code execute, including the loop iterations?
// 4. Why did we create the avarage function?
// 5. Why is the loop variable named n? Can we use another name?
// 6. How does the avarage function access the numbers array?
*/
