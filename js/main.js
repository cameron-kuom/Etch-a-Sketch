const header = document.querySelector(".header");
let scaleText = document.createElement("div");
header.appendChild(scaleText);
const contentContainer = document.querySelector(".content-container");
let gridContainer = document.querySelector(".grid-container");
const rightContainer = document.querySelector(".right-container");
const buttonsAll = document.querySelectorAll(".btn");
const buttonsLeft = document.querySelectorAll(".btn-left");
const buttonsRight = document.querySelectorAll(".btn-right");

// Creates starting grid and gridDiv dimensions
function getStartingGrid(gridSize){
    scaleText.textContent = `${gridSize}x${gridSize}`;
    
    for (let i = 0; i < gridSize*gridSize; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        gridContainer.appendChild(gridDiv);
        let gridDivSize = (700 / gridSize);
        gridDiv.style.width = `${gridDivSize}px`;
        gridDiv.style.height = `${gridDivSize}px`;
        getButtonInput(gridDiv, gridSize);
    }
}

// Deletes current grid and creates new grid
function getNewGrid(){
    buttonsRight[1].addEventListener("click", () => {
        gridContainer.remove("div");
        gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");
        contentContainer.insertBefore(gridContainer, rightContainer);

        let gridSize = window.prompt("What scale would you like? Maximum of 25");
        if (gridSize == null){
            gridSize = 16
        } else if (gridSize > 25){
            gridSize = 25
        } else if (gridSize < 1){
            gridSize = 1
        } else if (gridSize <= 25 || gridSize >= 1){
            gridSize = gridSize
        } else {
            gridSize = 16
        }

        header.removeChild(scaleText);
        scaleText = document.createElement("div");
        header.appendChild(scaleText);
        scaleText.textContent = `${gridSize}x${gridSize}`;
        
        for (let i = 0; i < gridSize*gridSize; i++){
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div");
            gridContainer.appendChild(gridDiv);
            let gridDivSize = (700 / gridSize);
            gridDiv.style.width = `${gridDivSize}px`;
            gridDiv.style.height = `${gridDivSize}px`;
            getButtonInput(gridDiv, gridSize);
        }

        buttonsAll.forEach(button => button.classList.remove("btn-border"));
    })
}

function getButtonInput(gridDiv, gridSize){
    // Black button
    buttonsLeft[0].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => gridDiv.style.background = "black")
    });
    
    // RGB button
    buttonsLeft[1].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => {
            let x = Math.floor(Math.random()*255);
            let y = Math.floor(Math.random()*255);
            let z = Math.floor(Math.random()*255);
            gridDiv.style.backgroundColor = `rgb(${x},${y},${z})`; 
        })
    });

    // Erase button
    buttonsLeft[2].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => gridDiv.style.backgroundColor = "white")
    });

    // Reset color button
    buttonsLeft[3].addEventListener("click", () => {
        const gridDivAll = document.querySelectorAll(".grid-div");
        gridDivAll.forEach(div => div.style.backgroundColor = "white");
        gridDiv.addEventListener("mouseover", () => gridDiv.style.backgroundColor = "white")
    });

    // Grid mode and border for right button container
    buttonsRight[0].addEventListener("click", () => {
        if (gridDiv.style.border == "1px solid mediumpurple"){
            gridDivSize = (700 / gridSize);
            gridDiv.style.border = "none";
            gridDiv.style.width = `${gridDivSize}px`;
            gridDiv.style.height = `${gridDivSize}px`;
            buttonsRight[0].classList.remove("btn-border");
        } else {
            gridDivSize = (700 / gridSize) - 2;
            gridDiv.style.border = "1px solid mediumpurple";
            gridDiv.style.width = `${gridDivSize}px`;
            gridDiv.style.height = `${gridDivSize}px`;
            buttonsRight[0].classList.add("btn-border")
        }
    })

    // Border for left button container
    buttonsLeft.forEach(button => button.addEventListener("click", (e) => {
        buttonsLeft.forEach(button => button.classList.remove("btn-border"));
        if (e.target !== buttonsLeft[3]){
            e.target.classList.add("btn-border");
        }
    }));
}

getStartingGrid(16);
getNewGrid();