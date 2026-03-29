console.log("Hello World");


function createSquare(divNumber) {
    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.classList.add("square");
    // square.textContent = divNumber;
    container.appendChild(square);
}

function createGrid(numberOfSquares) {
    
    let gridDimensions = numberOfSquares * numberOfSquares;
    for (let i = 0; i < gridDimensions; i++) {
        let counter = i + 1;
        createSquare(counter);
    }

    // Define grid width
    const squareSize = 40;
    const gapSize = 1;
    const horizontalPadding = 64;
    const container = document.querySelector(".container");
    container.style.width = `${numberOfSquares * squareSize + (numberOfSquares - 1) * gapSize + horizontalPadding}px`;
}

function addHoverEffect() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.classList.add("hover-effect");
        });

        //square.addEventListener("mouseout", (e) => {
        //    e.target.classList.toggle("hover-effect");
        //});

    });
}

function defineNumberOfSquares() {
    const numberOfSquares = prompt("Please enter the number of squares per side:");
    return numberOfSquares;
}

// Create first grid
createGrid(16);
addHoverEffect();


// Grid button event handling
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {

    const container = document.querySelector(".container");
    console.log(container);

    // Remove current grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(defineNumberOfSquares());
    addHoverEffect();

})
