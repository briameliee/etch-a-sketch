const sketchBoard = document.querySelector(".sketch-board");

const colorsDiv = document.querySelector(".colors");

const colors = ["#C11A1B","#EBEBEB", "#5A5D64", "#0F1012", "#FF595E", "#FF924C", "#FFCA3A","#8AC926", "#1982C4", "#6A4C93", "#FF60B5", "#25CEA1", "#D62246 ", "#3A0CA3", "#3D5A80", "#E07A5F", "#F4F1DE", "#606C38",  "#FFADAD", "#FFD166", "#9BF6FF", "#BDB2FF", "#C1FBA4", "#00FFC6", "#FF007F"];

//Creating 16x16 squares in sketchBoard

function createBoard() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const boardSquare = document.createElement("div");
            boardSquare.classList.add("boardSquare");
            sketchBoard.appendChild(boardSquare);
            
            boardSquare.addEventListener('click', function(e) {
                boardSquare.style.backgroundColor = "red";
            });
        }
    }
}

function createColors() {
    for(let i = 0; i < colors.length; i++) {
        const color = document.createElement("div");
        color.classList.add("color");
        color.style.backgroundColor = colors[i];
        colorsDiv.appendChild(color);
    }
}

createColors();

createBoard();

function color() {

}