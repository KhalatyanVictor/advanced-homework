function Calculator(){};

const calculator = new Calculator();

Calculator.prototype.add = function (a, b) {
    return a + b;
}

Calculator.prototype.subtract = function (a, b) {
    return a - b;
}

Calculator.prototype.multiply = function (a, b) {
    return a * b;
}

Calculator.prototype.divide = function (a, b) {
    return a / b;
}

console.log(calculator.add(10, 5),
calculator.subtract(10, 5),
calculator.multiply(10, 5),
calculator.divide(10, 5)
);
