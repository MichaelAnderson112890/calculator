
let pressed = '';
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === 'number'){
            console.log(numberPressed(button.id));
        }
        else console.log(button.id);
        pressed = button.id;
        
    })
});







function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function operate(a, b, operator){
    switch(operator){
        case '/':
            return divide(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        default:
            return add(a,b);
    }
}

function numberPressed(x){
    switch (x) {
        case ("one"):
            return 1;
        case ('two'):
            return 2;
        case ('three'):
            return 3;
        case ('four'):
            return 4;
        case ('five'):
            return 5;
        case ('six'):
            return 6;
        case ('seven'):
            return 7;
        case ('eight'):
            return 8;
        case ('nine'):
            return 9;
        default: 
            return 0;
    }
}