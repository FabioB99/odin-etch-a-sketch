console.log("Hello World");

function createSquare() {
    
    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

for (let i = 0; i < 256; i++) {
    createSquare();
}
