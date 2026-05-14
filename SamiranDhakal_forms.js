function calculateResult() {

    let firstNumber = Number(document.getElementById("num1").value);
    let secondNumber = Number(document.getElementById("num2").value);

    let selectedOperator =
        document.querySelector('input[name="operator"]:checked');

    if (!selectedOperator) {
        alert("Please choose an arithmetic operator.");
        return;
    }

    let operator = selectedOperator.value;

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    }

    else if (operator === "-") {
        result = firstNumber - secondNumber;
    }

    else if (operator === "*") {
        result = firstNumber * secondNumber;
    }

    else if (operator === "/") {

        if (secondNumber === 0) {
            alert("Division by zero is not allowed.");
            return;
        }

        result = firstNumber / secondNumber;
    }

    alert("Result: " + result);
}


function findFactorial() {

    let number =
        Number(document.getElementById("factorialInput").value);

    if (number < 0) {
        alert("Factorial cannot be calculated for negative numbers.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }

    alert(number + "! = " + factorial);
}


function findFibonacci() {

    let n =
        Number(document.getElementById("fibonacciInput").value);

    let first = 0;
    let second = 1;

    if (n === 0) {
        alert("Fibonacci Number: 0");
        return;
    }

    for (let i = 2; i <= n; i++) {

        let next = first + second;

        first = second;
        second = next;
    }

    alert("Fibonacci Number: " + second);
}


function analyzeNumbers() {

    let first =
        Number(document.getElementById("value1").value);

    let second =
        Number(document.getElementById("value2").value);

    let third =
        Number(document.getElementById("value3").value);

    let maximum =
        Math.max(first, second, third);

    let minimum =
        Math.min(first, second, third);

    let range =
        maximum - minimum;

    alert(
        "Maximum: " + maximum +
        "\nMinimum: " + minimum +
        "\nRange: " + range
    );
}


function saveSignup(event) {

    event.preventDefault();

    let firstName =
        document.getElementById("firstName").value;

    let lastName =
        document.getElementById("lastName").value;

    let email =
        document.getElementById("email").value;

    let zipCode =
        document.getElementById("zipCode").value;

    let signupInformation =
        "<p>" +
        firstName + " " + lastName +
        " | " +
        email +
        " | ZIP: " +
        zipCode +
        "</p>";

    document.getElementById("signupResults").innerHTML +=
        signupInformation;
}