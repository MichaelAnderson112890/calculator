
let pressed = '';
let currentNumber = 0;

let firstOperand = '';
let firstOperandSet = false;
let operator = '';
let secondOperand = '';
let decimalFlag = false;

const display = document.getElementById('current');
const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstOperandSet === false){
            firstOperand += numberPressed(button.id);
        } else {
            secondOperand += numberPressed(button.id);
        }
    
        display.innerHTML = firstOperand + operator + secondOperand;
    })
 
});

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'equal'){
            if (secondOperand != '') {
                firstOperand = operate(parseFloat(firstOperand), parseFloat(secondOperand), operator).toString();
                operator = '';
                secondOperand = '';
                firstOperandSet = false;
                if (firstOperand.includes('.')){
                    decimalFlag = true;
                } else decimalFlag = false;
            }
        } else {
            operator = operatorPressed(button.id);
            decimalFlag = false;
            firstOperandSet = true;
        }
        display.innerHTML = firstOperand + operator + secondOperand;
    })
});

const allClear = document.getElementById('all_clear');
allClear.addEventListener('click', () => {
    firstOperand = '';
    operator = '';
    secondOperand = '';
    firstOperandSet = false;
    display.innerHTML = '&nbsp;';
    decimalFlag = false;
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    if (firstOperandSet === true){
        if (secondOperand === ''){
            operator = '';
            firstOperandSet = false;
        }
        else {
            secondOperand = '';
            decimalFlag = false;
        }
        display.innerHTML = firstOperand + operator + secondOperand;

    } else {
        firstOperand = '';
        display.innerHTML = '&nbsp;';
    }
});

const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    if (decimalFlag === false){
        if (firstOperandSet === false){
            firstOperand += '.';
            decimalFlag = true;
        } else {
            secondOperand += '.';
            decimalFlag = true;
        }
        display.innerHTML = firstOperand + operator + secondOperand;

    }
});

const posNeg = document.getElementById('positive_negative');
posNeg.addEventListener('click', () => {
    if (firstOperandSet === false){
        if (firstOperand.charAt(0) === '-'){
            firstOperand = firstOperand.substring(1,firstOperand.length);
        } else firstOperand = '-' + firstOperand;
    } else {
        if (secondOperand.charAt(0) === '-'){
            secondOperand = secondOperand.substring(1,secondOperand.length);
        } else secondOperand = '-' + secondOperand;
    }
    display.innerHTML = firstOperand + operator + secondOperand;
});

function add(a,b){
    return (a + b).toString();
}

function subtract(a,b){
    return (a - b).toString();
}

function multiply(a,b){
    return( a * b).toString();
}

function divide(a,b){
    if (b === 0){
        return "ERROR";
    } else return (a/b).toString();
}

function operate(a, b, operator){
    switch(operator){
        case ' / ':
            return divide(a,b);
        case ' - ':
            return subtract(a,b);
        case ' * ':
            return multiply(a,b);
        default:
            return add(a,b);
    }
}

function numberPressed(x){
    switch (x) {
        case ("one"):
            return '1';
        case ('two'):
            return '2';
        case ('three'):
            return '3';
        case ('four'):
            return '4';
        case ('five'):
            return '5';
        case ('six'):
            return '6';
        case ('seven'):
            return '7';
        case ('eight'):
            return '8';
        case ('nine'):
            return '9';
        default: 
            return '0';
    }
}

function operatorPressed(x){
    switch (x) {
        case 'divide':
            return ' / ';
        case 'multiply':
            return ' * ';
        case 'plus':
            return ' + ';
        case 'subtract':
            return ' - ';
        default:
            return ' = ';
    }
}



