const gridContainer = document.querySelector(".grid-container");
const buttons = document.querySelectorAll(".btn");

function createGrid(gridSize){
    for (let i = 0; i < gridSize*gridSize; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        gridContainer.appendChild(gridDiv);
        getBackgroundChoice(gridDiv);
    }
}

function getBackgroundChoice(gridDiv){
    buttons[0].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.background = "black"
        })
    });
    buttons[1].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => {
            let x = Math.floor(Math.random()*255);
            let y = Math.floor(Math.random()*255);
            let z = Math.floor(Math.random()*255);
            gridDiv.style.backgroundColor = `rgb(${x},${y},${z})`; 
        })
    });
    buttons[2].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = "white"
        })
    });
}

createGrid(16);