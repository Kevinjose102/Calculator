const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear")
const screen = document.querySelector(".display-screen")
const equalto = document.querySelector(".equalto")

numbers.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
)

operators.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

equalto.addEventListener('click', () => calculate(screen.textContent))

clearButton.addEventListener('click', () => clear())


function appendNumber(number){
    if(screen.textContent === '0'){
        clearFull()
    }
    screen.textContent += number
}

function setOperation(operator){
    if(screen.textContent === '0'){
        clear()
    }
    else if(screen.textContent[screen.textContent.length - 1] == '+' || 
            screen.textContent[screen.textContent.length - 1] == '-' || 
            screen.textContent[screen.textContent.length - 1] == '*' || 
            screen.textContent[screen.textContent.length - 1] == '/'){
                console.log("nothing")
    }   
    else{
        screen.textContent += operator
    }
}

function calculate(expression){
    screen.textContent = eval(expression)
}

function clear(){
    screen.textContent = '0'
}

function clearFull(){
    screen.textContent = ''
}