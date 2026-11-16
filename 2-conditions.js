/*
// Task: Check whether a car can switch to electric mode based on driving conditions or Eco mode.
if (speed < 40 && batteryLevel > 20 && engineTemperature > 80 || isEcoMod) {
    console.log("The car can switch to electric mod");
} else {
    console.log("The car can`t switch to electric mod");
}
*/

/*
// Task: Check whether a person is at least 21 and has a driver's license to rent a car.
let year = 21;
let driverLicence = true;

if (year >= 21 && driverLicence) {
    console.log("Can rent the car");
} else {
    console.log("Can't rent car");
}
*/

/*
// Task: Apply a 15% discount if the customer has a coupon or the price exceeds 100.
let price = 100;
let hasCoupon = true;
let discountRate = 0.15;
let finalPrice;

if (hasCoupon || price > 100) {
    finalPrice = price - (price * discountRate);
} else {
    finalPrice = price;
}

console.log("Total price: " + finalPrice + " Dollar.");
*/

/*
// Task: Provide free delivery for orders over 50 or premium customers; otherwise, charge 5.
let price = 51;
let isPremium = false;
let deliveryPrice;

if (price > 50 || isPremium) {
    deliveryPrice = 0;
} else {
    deliveryPrice = 5;
}

console.log("Delivery: " + deliveryPrice + " dollar.");
*/

/*
// Task: Create an array of fruits and print its fourth element.
let fruits = ['apple', 'orange', 'pitch', 'banana'];
console.log(fruits[3]);
*/

/*
// Task: Practice object property shorthand using an existing model variable.
const router = {
    model
};
*/

/*
// Task: Create a product review object and print its product name.
const amazonRev = {
    product: 'smartwatch',
    rating: 5,
    comment: 'awsome wach, really good item.',
    isVerPurchase: true
};

console.log(amazonRev.product);
*/

/*
// Task: Create and call a function that prints numbers from 10 down to 1.
function printNumbers() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

printNumbers();
*/

/*
// Task: Declare variables, print a null value, and display the type of a city name.
let h = 5;
const name = "Erlan";

let data = null;
console.log(data);

const city = "Chicago";
console.log(typeof city);
*/

/*
// Task: Explore arithmetic operations and automatic type conversion.
console.log(10 - 4);
console.log("5" * 2);
console.log(true + 1);
console.log(false + 5);
console.log("hello" * 2);
console.log("Hello" / 2);
*/

/*
// Task: Print whether a student passed based on a minimum score of 60.
let score = 60;

if (score >= 60) {
    console.log("passed");
} else {
    console.log("failed");
}
*/

/*
// Task: Check whether the server room temperature is at most 30.
let serverRoomTemperature = 31;

if (serverRoomTemperature <= 30) {
    console.log("Passed");
} else {
    console.log("Failed");
}
*/

/*
// Task: Determine the discount based on the purchase amount and customer status.
let amount = 1300;
let status = "regular";

if (amount > 1000 && status === "gold") {
    console.log("Discount: 15%");
} else if (amount > 1000 && status === "regular") {
    console.log("Discount: 10%");
} else {
    console.log("No discount");
}
*/

/*
// Task: Calculate the final price with a 15% or 10% discount based on amount and customer status.
let amount = 1100;
let status = "Regular";
let finalPrice;

if (amount > 1000 && status === "Gold") {
    let discount = amount * 0.15;
    finalPrice = amount - discount;
    console.log("Price with 15% discount:" + finalPrice);
} else if (amount > 1000 && status === "Regular") {
    let discount = amount * 0.10;
    finalPrice = amount - discount;
    console.log("Price with 10% discount:" + finalPrice);
} else {
    finalPrice = amount;
    console.log("No discount; ");
    console.log(finalPrice);
}
*/

/*
// Task: Classify a person as a child, teenager, or adult based on age.
let age = 15;

if (age <= 13) {
    console.log("Small kids");
} else if (age > 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
*/

/*
// Task: Determine shipping cost based on the balance and premium membership.
let balance = 1000;
let isPremium = false;

if (balance >= 1000 && isPremium === true) {
    console.log("free shipping");
} else if (balance === 1000 && isPremium === false) {
    console.log("Shipping cost $5");
} else {
    console.log("Shipping cost $10");
}
*/

/*
// Task: Grant access to users aged 18 or older and deny access to younger users.
let age = 18;

if (age >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
*/
