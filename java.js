//All math functions plus operate function to call math functions
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
    return a / b;
}
function operate(operator,a,b){
    return operator(a,b);
}

//First grab all the numbers

const numbers = document.querySelectorAll('.number');
//Grab the display
const display = document.querySelector('p');

//Add event listener so that when click it updates the display
numbers.forEach(number =>{
    number.addEventListener('click',updateDisplay);
});

//Create a function to update the display
function updateDisplay(){
    display.textContent = display.textContent + this.textContent;
    return a = display.textContent;
}

//grab the operator buttons
const operateButtons = document.querySelectorAll('operator');

