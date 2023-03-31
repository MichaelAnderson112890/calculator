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