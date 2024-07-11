let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;
let shouldClearDisplay = false;

function appendNumber(number) {
    if (shouldClearDisplay) {
        currentOperand = '';
        shouldClearDisplay = false;
    }
    currentOperand += number;
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    shouldClearDisplay = false; // Reset shouldClearDisplay flag
    updateDisplay();
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    shouldClearDisplay = true; // Set shouldClearDisplay to true after calculation
    updateDisplay();
}

function updateDisplay() {
    if (operation) {
        display.innerText = `${previousOperand} ${operation} ${currentOperand || ''}`;
    } else {
        display.innerText = currentOperand;
    }
}
