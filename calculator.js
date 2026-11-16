/*
// Task: Create a calculator function that takes two numbers and an operator.
// Support addition, subtraction, multiplication, and division.
// Return an error message when attempting to divide by zero.
function calculator(a, b, operator) {
    if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "*") {
        return a * b;
    } else if (operator == "/") {
        if (b == 0) {
            return "Cannot divide by zero.";
        }
        return a / b;
    }
}

console.log(calculator(5, 0, "/"));
*/
