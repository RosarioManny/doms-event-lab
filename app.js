const numbers = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('.display')

let lastOperator = false; 

numbers.forEach(elem => {
    elem.addEventListener("click", () => {
let keypadValue = elem.textContent;
let displayValue = display.innerText;
lastOperator = false

if (displayValue === "0") {
    display.innerText = keypadValue
} else {
    display.innerText += keypadValue
}
    })
});

function reset() {
    display.innerText = "";
    lastOperator = false; 
};

operators.forEach(elem => {
    elem.addEventListener("click", () => {
        let operator = elem.textContent

        if (operator === "C") {
            reset() 
        } else if (lastOperator == false) {
            display.innerText += operator;
            lastOperator = true; 
        }
    })
})

equals.addEventListener("click", () => {
    display.innerText = eval(display.textContent)
})

