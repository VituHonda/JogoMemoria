let startButton = document.querySelector("#start")

startButton.addEventListener("click", function () {

    startButton.classList.add("invisible")
    createSquares(5)
    setTimeout(invisibleNumber, 1000)
    // +3s from invisible
    setTimeout(moveSquare, 4000)
    // timeout igual ao de cima
    setTimeout(clickOrder, 4000)

})