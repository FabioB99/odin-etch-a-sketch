console.log("Hello World");

function createSquare(divNumber) {
    
    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = divNumber;
    container.appendChild(square);
}

// Add squares
for (let i = 0; i < 256; i++) {
    let counter = i + 1;
    createSquare(counter);
}


// Hover effect
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => console.log(e.target.textContent));
});