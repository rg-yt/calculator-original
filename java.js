let operator;
let a;
let b;
let total;
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
    }else if(total){
        return operator(a = total,b);
    }else{
        return operator(a ,b);
    }

}
function updateDisplay() {
    if(displayValue.includes('.') && this.textContent == '.'){
        return displayValue;
    }
    if(displayValue == '' && this.textContent == '.'){
        displayValue = '0' + this.textContent;
    }else{
        displayValue = displayValue + this.textContent;
    }
    display.textContent = displayValue;
    b=display.textContent;
    
   
}
function storeValue(){
    displayValue = '';
    a = b;
    if(!total){
     total = b
    }
    b = '';
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
        
        if(b && total){
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
    operator = null;
});

clearButton.addEventListener('click',()=>{
    operator = null;
    display.textContent = '';
    a = 0;
    total = 0;
    displayValue = '';
    b = 0;
    
})

