let operator;
let a;
let b;
let total = 0;
displayValue = '';

function add(a, b) {
    return +(a*10 + +b*10)/10;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return ((a*10)*(b*10)/100);
}
function divide(a, b) {
    if(b==0){
        return 'What are you doing?'
    } 
    return a / b;
}
function operate(operator, a ,b){

    if (!operator){
        return display.textContent;
    }else{
        return operator(a ,b);
    }

}
function updateDisplay() {
    if(displayValue.includes('.') && this.textContent == '.' || displayValue.length > 30){
        return displayValue;
    }
    if(displayValue == '' && this.textContent == '.'){
        displayValue = '0' + this.textContent;
    }else{
        displayValue = displayValue + this.textContent;
    }
    
    display.textContent = displayValue;
    reSize();
    b=display.textContent;
    
   
}
function storeValue(){
    a = total;
    displayValue = '';
    b = '';
} 
function resetValues(){
    operator = null;
    display.textContent = '';
    a = 0;
    total = 0;
    displayValue = '';
    b = 0;
}
function reSize(){
    if (display.textContent.length > 20){
        display.style.cssText = `font-size:17px`;
    }else if(display.textContent.length > 15){
        display.style.cssText = `font-size:20px`;
    }else if(display.textContent.length > 10){
        display.style.cssText = `font-size:30px`;
    }else{
        display.style.cssText = `font-size:40px`;
    }
}

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('p');
const operateButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear');

numbers.forEach(number => {
    number.addEventListener('click', updateDisplay);
});

decimal.addEventListener('click',updateDisplay);
operateButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if(b && total||total == 0){
            total = operate(operator,a,b);
            display.textContent = total;
            operator = null;
        }
        storeValue();
        switch (true) {
            case button.textContent == 'x':
                operator = multiply;
                break;
            case button.textContent == '+':
                operator = add;
                break;
            case button.textContent == '-':
                operator = subtract;
                break;
            case button.textContent == '÷':
                operator = divide;
                break;
            default:
                operator = null;
        }  
    });
});

equalButton.addEventListener('click', ()=>{
    displayValue = '';
    total = operate(operator,a,b);
    display.textContent = total;
    reSize();
    operator = null;
});

clearButton.addEventListener('click',resetValues);



