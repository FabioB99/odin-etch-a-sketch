console.log("Hello World");

function createSquare(divNumber) {

    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.classList.add("square");
    //square.textContent = divNumber;
    container.appendChild(square);
}

function createGrid(sideLength) {
    let numberOfSquares = sideLength * sideLength;
    for (let i = 0; i < numberOfSquares; i++) {
        let counter = i + 1;
        createSquare(counter);
    }
}

function addHoverEffect() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            // console.log(e.target.textContent);
            e.target.classList.add("hover-effect");
        });

        //square.addEventListener("mouseout", (e) => {
        //    e.target.classList.toggle("hover-effect");
        //});

    });
}

// Create first grid
createGrid(16);
addHoverEffect();


// Generate new grid button
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {

    const container = document.querySelector(".container");
    console.log(container);

    // Remove current grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const numberOfSquares = prompt("Please enter the number of squares per side:");
    createGrid(numberOfSquares);
    addHoverEffect();

})
