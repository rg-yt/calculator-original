let operator;
let a;
let b;
let total;
displayValue = '';
function add(a, b) {
    return +a + +b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
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
const numbers = document.querySelectorAll('.number');
const display = document.querySelector('p');
numbers.forEach(number => {
    number.addEventListener('click', updateDisplay);
});
function updateDisplay() {
    
    displayValue = displayValue + this.textContent;
    display.textContent = displayValue;
    b=display.textContent;
    
}
const operateButtons = document.querySelectorAll('.operator');
operateButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue = '';
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
function storeValue(){
   a = b;
   if(!total){
    total = b
   }
   b = '';
   
}
const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', ()=>{
    displayValue = '';
    total = operate(operator,a,b);
    display.textContent = total;
    operator = null;
});

