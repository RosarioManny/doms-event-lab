/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const operator = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);

    if (event.target.classList.contains('number')) {
  
    } else if (event.target.innerText === '+') {
      buttons.innerText + buttons.innerText
    } else if (event.target.innerText === '-'){

    } else if (event.target.innerText === '/') {

    } else if (event.target.innerText === '*') {

    } else (event.target.innerText === "=") {
      return 
    }
  });
  
  buttons.forEach ((button) => {
    button.addEventListener('click', (event) => {
console.log(event.target.innerText);
    })
})
/*-------------------------------- Functions --------------------------------*/