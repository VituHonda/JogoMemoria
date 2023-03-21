function clickOrder() {
    
    let squares = document.querySelectorAll(".squares")
    let order = 0;

    for(let i = 0; i < squares.length; i++) {

        squares[i].addEventListener('click', e => {

            if(e.target != squares[order]) {
                
                pauseMovement()
                visisbleNumber()
                let button = document.querySelector("#restart")
                button.classList.remove("invisible")
        
            } else {

                squares[i].classList.add("invisible")
                order++

            }

        })

    }

}

