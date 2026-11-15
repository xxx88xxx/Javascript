function calculator(a, b, operator) {

    if (operator == "+") {
        return a + b;
    }
    else if (operator == "-") {

        return a - b;
    } else if (operator == "*") {

        return a * b;
    } else if (operator == "/") {
        if (b == 0) {
            return "do not devide 0"
        }
        return a / b;
    }

}
console.log(calculator(5, 0, "/"))