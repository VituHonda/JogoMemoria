let startButton = document.querySelector("#start")

startButton.addEventListener("click", function () {

    startInvisible()
    createSquares(5)
    setTimeout(invisibleNumber, 1000)
    // +3s from invisible
    setTimeout(moveSquare, 4000)
    // timeout igual ao de cima
    setTimeout(clickOrder, 4000)

})

function startVisible() {
    startButton.classList.remove("invisible")
}

function startInvisible() {
    startButton.classList.add("invisible")
}