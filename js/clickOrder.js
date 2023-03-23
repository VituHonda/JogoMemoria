function clickOrder() {
    
    let squares = document.querySelectorAll(".squares")
    let order = 0;

    for(let i = 0; i < squares.length; i++) {

        squares[i].addEventListener('click', e => {

            if(e.target != squares[order]) {
                
                pauseMovement()
                visisbleNumber()
                restartVisible()
                emptyPoints()

            } else {

                if(order == (squares.length - 1)) {

                    squares[i].classList.add("invisible")
                    deleteSquares()
                    startVisible()
                    addPoints()
                    addVPoints()
                    alert("venceu")
                    
                } else {

                    addPoints()
                    squares[i].classList.add("invisible")
                    order++
                    
                }

            }

        })

    }

}

