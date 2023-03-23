var points = document.querySelector("#points")

console.log(points.textContent)

function addPoints() {
    
    points.textContent = parseInt(points.textContent) + 10
    
}

function addVPoints() {

    points.textContent = parseInt(points.textContent) + 50

}

function emptyPoints() {

    points.textContent = 0

}