let num1 = 0;
let num2 = 0;
let operatorValue = "";
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

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    displayValue = "0";
    num1 = 0;
    num2 = 0;
    operatorValue = "";
    display.textContent = displayValue;
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operatorValue === "") {
            num1 = parseInt(displayValue);
            operatorValue = operator.id;
            displayValue = "0";
        }
        else {
            num2 = parseInt(displayValue);

            num1 = operate(operatorValue, num1, num2);
            displayValue = num1 + "";
            display.textContent = displayValue;
            operatorValue = "";
        }
    });
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    num2 = parseInt(displayValue);

    const solution = operate(operatorValue, num1, num2);
    displayValue = solution + "";
    display.textContent = displayValue;
    operatorValue = "";
});