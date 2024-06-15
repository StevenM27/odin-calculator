let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = "0";

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(operator, a, b) {

    switch (operator) {
        case "add":
            return add(a, b);

        case "subtract":
            return subtract(a, b);

        case "multiply":
            return multiply(a, b);

        case "divide":
            return divide(a, b);

        default:
            return "Invalid operation";

    }
}


const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (displayValue === "0") {
            if (button.id === "0") {
                return;
            }
            else {
                displayValue = button.id;
            }
        }
        else {
            displayValue += button.id;
        }

        display.textContent = displayValue;
    });
})