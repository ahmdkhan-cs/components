const rows = document.getElementById('rows');
const columns = document.getElementById('columns');
const error = document.getElementById('error');
const color = document.getElementById('color');

const generateRandomBoard = document.getElementById('generate-random-grid');
const generateGrid = document.getElementById('generate-grid');
const eraseGrid = document.getElementById('erase-grid');
const draw = document.getElementById('draw');
const erase = document.getElementById('erase');

const gridContainer = document.getElementById('grid');


let isDraw = false;
let isErase = false;
let isMouseClicked = false;


(()=>{
    generateBoxes(56, 56);
    disableButtons(false);

    generateRandomBoard.addEventListener('click', (e) => {
        const randomRows = generateRandomNumber();
        const randomColumns = generateRandomNumber();
        console.log(randomRows, randomColumns);
        generateBoxes(randomRows, randomColumns);
        disableButtons(false);
        clearInputs();
    });

    generateGrid.addEventListener('click', (e) => {
        e.preventDefault();
        if(rows.value && columns.value){
            if(rows.value > 56 || columns.value > 56){
                setError("Rows and columns must be less than 56.");
            }else{
                generateBoxes(rows.value, columns.value);
                disableButtons(false);
            }
        }else{
            setError("Please enter rows and columns.");
        }
        clearInputs();
    });

    eraseGrid.addEventListener('click', (e) => {
        e.preventDefault();
        eraseBoxes();
        clearInputs();
    });

    draw.addEventListener('click', (e) => {
        e.preventDefault();
        isDraw = true;
        isErase = false;
    });

    erase.addEventListener('click', (e) => {
        e.preventDefault();
        isDraw = false;
        isErase = true;
    });

    document.body.onmousedown = () => {
        isMouseClicked = true;
    };

    document.body.onmouseup = () => {
        isMouseClicked = false;
    };
})();




function generateBoxes(rows, columns){
    eraseBoxes();
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 0fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 0fr)`;
    for(let i = 1; i <= rows * columns; i++){
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridContainer.append(gridBox);
    }
    addBoxHoverEventListener();
}

function eraseBoxes(){
    gridContainer.innerHTML = "";
    disableButtons(true);
}

function setError(text){
    error.innerText = text;
    setTimeout(() => {
        error.innerText = "";
    }, 5000);
}


function disableButtons(disable){
    eraseGrid.disabled = disable;
    draw.disabled = disable;
    erase.disabled = disable;
}

function clearInputs(){
    rows.value = "";
    columns.value = "";
}

function addBoxHoverEventListener(){
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            e.preventDefault();
            const classes = item.classList;
            if(isDraw && !classes.contains('done') && isMouseClicked){
                item.style.backgroundColor = color.value;
                item.classList.add('done');
            }

            if(isErase && classes.contains('done') && isMouseClicked){
                item.style.backgroundColor = "#ffffff";
                item.classList.remove('done');
            }
        });
    });
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 56) + 1;
}