let button = document.querySelector(".button")

let startPause = true

button.addEventListener("click", function () {

    if (startPause == true) {
        startMovement()
        startSquare()
        startPause = false
    } else {
        pauseMovement()
        startPause = true
    }

})