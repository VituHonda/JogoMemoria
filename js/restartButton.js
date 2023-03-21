let restartButton = document.querySelector("#restart")

restartButton.addEventListener("click", function () {

    deleteSquares()
    restartInvisible()
    createSquares(5)
    setTimeout(invisibleNumber, 1000)
    // +3s from invisible
    setTimeout(moveSquare, 4000)
    // timeout igual ao de cima
    setTimeout(clickOrder, 4000)

})

function restartVisible() {
    restartButton.classList.remove("invisible")
}

function restartInvisible() {
    restartButton.classList.add("invisible")
}