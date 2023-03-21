var container = document.querySelector(".container__game")

var squares

function createSquares(value) { 

    squares = new Array(value)

    for(let i = 0; i < value; i++) {

        squares[i] = document.createElement("div")
        let number = document.createTextNode(i+1)
        squares[i].appendChild(number)
        squares[i].classList.add("squares")
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