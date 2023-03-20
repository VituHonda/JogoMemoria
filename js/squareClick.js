function startSquare() {

    let invisibleSquare = document.querySelector(".squares")

    invisibleSquare.addEventListener("click", function (e) {

        if (e.target.id == "square1") {

            invisibleSquare.classList.add("invisivel")

        } else {

            pauseMovement()

        }

    })

}