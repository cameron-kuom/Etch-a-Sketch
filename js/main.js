const gridContainer = document.querySelector(".grid-container");
const buttonsLeft = document.querySelectorAll(".btn-left");
const buttonsRight = document.querySelectorAll(".btn-right");

function createGrid(gridSize){
    for (let i = 0; i < gridSize*gridSize; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-div");
        getGridDiv(gridDiv, gridSize)
        gridContainer.appendChild(gridDiv);
        getBackgroundChoice(gridDiv, gridSize);
    }
}

function getGridDiv(gridDiv, gridSize){
    let gridDivSize = (700 / gridSize);
    gridDiv.style.width = `${gridDivSize}px`;
    gridDiv.style.height = `${gridDivSize}px`;

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
}

function getBackgroundChoice(gridDiv, gridSize){
    buttonsLeft[0].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => gridDiv.style.background = "black")
    });
    buttonsLeft[1].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => {
            let x = Math.floor(Math.random()*255);
            let y = Math.floor(Math.random()*255);
            let z = Math.floor(Math.random()*255);
            gridDiv.style.backgroundColor = `rgb(${x},${y},${z})`; 
        })
    });
    buttonsLeft[2].addEventListener("click", () => {
        gridDiv.addEventListener("mouseover", () => gridDiv.style.backgroundColor = "white")
    });
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
}

buttonsLeft.forEach(button => button.addEventListener("click", (e) => {
    buttonsLeft.forEach(button => button.classList.remove("btn-border"));
    if (e.target !== buttonsLeft[3]){
        e.target.classList.add("btn-border");
    }
}))

createGrid(16);