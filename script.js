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
    screen.setAttribute("style", "background-color: rgba(147, 219, 211, 0.678); \
                                border: 2px solid rgb(0, 0, 0); \
                                color: black; \
                                width: 307.778px; \
                                height: 100px; \
                                font-size: 50px; \
                                font-weight: bold; \
                                padding: 20px; \
                                margin: 0; \
                                text-align: right; \
                                border-radius: 9px; \
                                max-width: 307.778px; \
                                word-wrap: break-word; \
                                white-space: normal;\
                                height: auto; \
                                overflow: scroll; \
                                overflow-x: hidden; \
                                scrollbar-width: none; \
                                max-height: 200px; \
                                scroll-behavior: smooth;")
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
    screen.setAttribute("style", "background-color: rgba(147, 219, 211, 0.678); \
                                    border: 2px solid rgb(0, 0, 0); \
                                    color: rgb(23, 15, 83); \
                                    width: 307.778px; \
                                    height: 100px; \
                                    font-size: 50px; \
                                    font-weight: bold; \
                                    padding: 20px; \
                                    margin: 0; \
                                    text-align: right; \
                                    border-radius: 9px; \
                                    max-width: 307.778px; \
                                    word-wrap: break-word; \
                                    white-space: normal;\
                                    height: auto; \
                                    overflow: scroll; \
                                    overflow-x: hidden; \
                                    scrollbar-width: none; \
                                    max-height: 200px; \
                                    scroll-behavior: smooth;")
}

function clear(){
    screen.textContent = '0'
}

function clearFull(){
    screen.textContent = ''
}