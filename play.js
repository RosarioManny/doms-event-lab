/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const operator = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let calcDisplay; 
let num1;
let num2;
let operation;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
let updateDisplay = (value) => {
    display.innerText = value
}

calculator.addEventListener('click', (event) => {
    // console.dir(event.target.innerText);
    if (event.target.classList.contains('number')) {
        if (!num1) {
            num1 = parseInt(event.target.innerText)
        } else if (!num2) {
            num2 = parseInt(event.target.innerText)
        }
        calcDisplay += event.target.innerText
        updateDisplay(`${event.target.innerText}`)
    } else if (event.target.innerText === '+') {
        operation = "add"
    } else if (event.target.innerText === '-'){
        operation = "subtract"
    } else if (event.target.innerText === '/') {
          operation = "divide"
    } else if (event.target.innerText === '*') {
          operation = "multiply"
    } else if (event.target.innerText === "=") {
        if (num1 & num2) {
            if (operation === "add") {
                addPlus(num1, num2)
            } else if (operation === "subtract") {
                subTract(num1, num2)
            } else if (operation === "divide") {
                diVide(num1, num2)
            } else if (operation === "multiply") {
                mltIply(num1, num2)
            }
        }
    } else if (event.target.innerText === "C") {
        clearBut()
    }
});
  
// buttons.forEach ((button) => {
//     button.addEventListener('click', (event) => {
//         calcDisplay += event.target.innerText
//         console.log(calcDisplay)
//     })
// })

/*-------------------------------- Functions --------------------------------*/

const addPlus = (num1, num2) => {
    let sum = num1 + num2
    updateDisplay(sum)
}

const subTract = (num1, num2) => {
    let tra =  num1 - num2
    updateDisplay(tra)
    // console.log(tra)
}

const diVide = (num1, num2) =>  {
    let vide = num1 / num2 
    updateDisplay(vide)
}

const mltIply = (num1, num2) => {
    let tiply = num1 * num2
    updateDisplay(tiply)
}
const clearBut = () => {
    calcDisplay = ""
    updateDisplay(calcDisplay)
}