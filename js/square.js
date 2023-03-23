var container = document.querySelector(".container__game")

var squares

function createSquares(value) { 

    let squareTypes = ["squares__arctic", "squares__cerulean", "squares__ocean", "squares__sapphire"]

    squares = new Array(value)

    for(let i = 0; i < value; i++) {

        let type = Math.ceil(Math.random() * 4)
        squares[i] = document.createElement("div")
        let number = document.createTextNode(i+1)
        squares[i].appendChild(number)
        squares[i].classList.add("squares")
        squares[i].classList.add(squareTypes[type-1])
        container.appendChild(squares[i])

    }

}

function invisibleNumber() {
    
    let squares = document.querySelectorAll(".squares")
    squares.forEach(square => square.classList.add("invisibleNumber"))

}

function visisbleNumber() {
    
    let squares = document.querySelectorAll(".squares")
    squares.forEach(square => square.classList.remove("invisibleNumber"))

}

function deleteSquares() {

    squares.forEach(square => {
        square.remove()

    })

}