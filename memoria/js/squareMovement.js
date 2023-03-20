let right = Math.floor(Math.random() * 2)
let up = Math.floor(Math.random() * 2)
let velocity = Math.ceil(Math.random() * 2)

console.log(right,up,velocity)

let squareMove

function startMovement() {

    const container = document.querySelector(".container__game")
    const square = document.querySelector("#square1")

    squareMove = setInterval(() => {

        let squarebounds = square.getBoundingClientRect()
        let containerbounds = container.getBoundingClientRect()
        let squareboundsleft = parseInt(squarebounds.left)
        let squareboundsright = parseInt(squarebounds.right)
        let squareboundstop = parseInt(squarebounds.top)
        let squareboundsbottom = parseInt(squarebounds.bottom)

        let squaretop = parseInt(window.getComputedStyle(square).getPropertyValue("top"))
        let squareleft = parseInt(window.getComputedStyle(square).getPropertyValue("left"))

        if (right && up) {
            square.style.top = squaretop - velocity + "px"
            square.style.left = squareleft + velocity + "px"
        }

        if (!right && up) {
            square.style.top = squaretop - velocity + "px"
            square.style.left = squareleft - velocity + "px"
        }

        if (right && !up) {
            square.style.top = squaretop + velocity + "px"
            square.style.left = squareleft + velocity + "px"
        }

        if (!right && !up) {
            square.style.top = squaretop + velocity + "px"
            square.style.left = squareleft - velocity + "px"
        }


        if (squareboundstop <= containerbounds.top) {
            up = false
        }

        if (squareboundsbottom >= containerbounds.bottom) {
            up = true
        }

        if (squareboundsright >= containerbounds.right) {
            right = false
        }

        if (squareboundsleft <= containerbounds.left) {
            right = true
        }

    }, 10)

}

function pauseMovement() {
    clearInterval(squareMove)
}