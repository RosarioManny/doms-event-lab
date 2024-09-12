/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const operator = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/
let calcDisplay; 
let sbTract;
let mltIply;
let dVide; 
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
let updateDisplay = (value) => {
    display.innerText = value
}


calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    if (event.target.classList.contains('number')) {
        calcDisplay += event.target.innerText
        console.log(calcDisplay)
    } else if (event.target.innerText === '+') {
        addPlus()
    } else if (event.target.innerText === '-'){

    } else if (event.target.innerText === '/') {

    } else if (event.target.innerText === '*') {

    } else if (event.target.innerText === "=") {

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
const addPlus = () => {
     return eval(`${calcDisplay} + ${calcDisplay}`)
}
const clearBut = () => {
    calcDisplay = ""
}
/*-------------------------------- Functions --------------------------------*/

// addPlus = () => {
//   buttons.
// }