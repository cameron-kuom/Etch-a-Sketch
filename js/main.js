const contentContainer = document.querySelector(".content-container");
const rightContainer = document.querySelector(".right-container");
let gridContainer = document.querySelector(".grid-container");
const buttonsLeft = document.querySelectorAll(".btn-left");
const buttonsRight = document.querySelectorAll(".btn-right");

// Creates grid and gridDiv dimensions
function getStartingGrid(gridSize){
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

function getNewGrid(){
    buttonsRight[1].addEventListener("click", () => {
        gridContainer.remove("div");
        gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");
        contentContainer.insertBefore(gridContainer, rightContainer);

        let gridSize = window.prompt("How big?")
        for (let i = 0; i < gridSize*gridSize; i++){
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-div");
            gridContainer.appendChild(gridDiv);
            let gridDivSize = (700 / gridSize);
            gridDiv.style.width = `${gridDivSize}px`;
            gridDiv.style.height = `${gridDivSize}px`;
            getButtonInput(gridDiv, gridSize);
        }
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

    // Reset button
    buttonsLeft[3].addEventListener("click", () => {
        const gridDivAll = document.querySelectorAll(".grid-div");
        gridDivAll.forEach(div => div.style.backgroundColor = "white");
        gridDiv.addEventListener("mouseover", () => gridDiv.style.backgroundColor = "white")

        gridDivSize = (700 / gridSize);
        gridDiv.style.border = "none";
        gridDiv.style.width = `${gridDivSize}px`;
        gridDiv.style.height = `${gridDivSize}px`;
        buttonsRight[0].classList.remove("btn-border");
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