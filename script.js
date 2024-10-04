const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const clearButton = document.querySelector(".clear")
const lastscreen = document.querySelector(".lastScreen")
const screen = document.querySelector(".current-screen")
const equalto = document.querySelector(".equalto")

numbers.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
)

operators.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

operators.forEach((button) =>
    button.addEventListener('click', (e) => calculate(e.target))
)

equalto.addEventListener('click', (e) => calculate(e.target))

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
    else if(lastscreen.textContent[lastscreen.textContent.length - 1] == '+' || 
            lastscreen.textContent[lastscreen.textContent.length - 1] == '-' || 
            lastscreen.textContent[lastscreen.textContent.length - 1] == '*' || 
            lastscreen.textContent[lastscreen.textContent.length - 1] == '/'){
                console.log("nothing")
    }   
    else{
        screen.textContent += operator
    }
}

function calculate(e){
    console.log(e)
    if(lastscreen.textContent == "0"){
        lastscreen.textContent = screen.textContent
        screen.textContent = "0"
    }
    else{
        if(lastscreen.textContent[lastscreen.textContent.length - 1] == '+'){
            lastscreen.textContent = parseInt(screen.textContent) + parseInt(lastscreen.textContent.slice(0,-1))
            if(e == equalto){
                screen.textContent = lastscreen.textContent
                lastscreen.textContent = "0"
            }
            else{
                lastscreen.textContent = lastscreen.textContent + e.textContent
                screen.textContent = "0"
            }
        }
        else if(lastscreen.textContent[lastscreen.textContent.length - 1] == '-'){
            lastscreen.textContent = parseInt(lastscreen.textContent.slice(0,-1)) - parseInt(screen.textContent)
            if(e == equalto){
                screen.textContent = lastscreen.textContent
                lastscreen.textContent = "0"
            }
            else{
                lastscreen.textContent = lastscreen.textContent + e.textContent
                screen.textContent = "0"
            }
        }
        else if(lastscreen.textContent[lastscreen.textContent.length - 1] == '*'){
            lastscreen.textContent = parseInt(lastscreen.textContent.slice(0,-1)) * parseInt(screen.textContent)
            if(e == equalto){
                screen.textContent = lastscreen.textContent
                lastscreen.textContent = "0"
            }
            else{
                lastscreen.textContent = lastscreen.textContent + e.textContent
                screen.textContent = "0"
            }
        }
        else if(lastscreen.textContent[lastscreen.textContent.length - 1] == '/'){
            lastscreen.textContent = parseInt(lastscreen.textContent.slice(0,-1)) / parseInt(screen.textContent)
            if(e == equalto){
                screen.textContent = lastscreen.textContent
                lastscreen.textContent = "0"
            }
            else{
                lastscreen.textContent = lastscreen.textContent + e.textContent
                screen.textContent = "0"
            }
        }
    }
}

function clear(){
    screen.textContent = '0'
    lastscreen.textContent = "0"
}

function clearFull(){
    screen.textContent = ''
}