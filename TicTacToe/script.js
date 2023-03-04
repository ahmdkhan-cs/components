let turn = "X";
let isGameFinished = false;
let board = ['', '', '', '', '', '', '', '', ''];
let combination = [];
let turnCount = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const result = document.getElementById('result');
const boxes = document.getElementsByClassName('box');
const reset = document.getElementById('reset');
const start = document.getElementById('start');

changeTurn();

start.addEventListener('click', function(e){
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('board-container').style.display = 'block';
})

for(box of boxes){
    box.addEventListener('click', function(e){
        if(!isGameFinished){
            e.preventDefault();
            if(board[this.id[this.id.length - 1]] === ''){
                changeTurn();
                this.innerText = turn;
                board[this.id[this.id.length - 1]] = turn;
                winningLogic();
                turnCount++;
                if(turnCount === 9 && !isGameFinished){
                    finishGame(true);
                }
            }
        }
    });
}

reset.addEventListener('click', function(e){
    e.preventDefault();
    for(box of boxes){
        box.innerText = '';
    }
    for(let i=0; i<board.length; i++){
        board[i] = '';
    }
    isGameFinished = false;
    this.style.display = 'none';
    turn = 'X';
    turnCount = 0;
    combination = [];
    changeTurn();
    for(box of boxes){
        box.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }
});

function changeTurn(){
    result.innerText = 'Player ' + turn + ' turn';
    turn = turn === 'X' ? 'O' : 'X';
}

function winningLogic(){
    for(let i=0; i<winningCombinations.length; i++){
        let currCombination = winningCombinations[i];

        if(board[currCombination[0]] === board[currCombination[1]] 
            && board[currCombination[1]] === board[currCombination[2]] 
            && board[currCombination[0]] !== '' 
            && board[currCombination[1]] !== '' 
            && board[currCombination[1]] !== ''){
                combination = currCombination;
                finishGame(false);
            }
    }
}

function finishGame(draw){
    let message = 'Game draw';
    if(!draw){
        message = 'Player ' + turn + ' wins'; 
    }
    result.innerText = message;
    reset.style.display = 'block';
    isGameFinished = true;
    for(box of boxes){
        const id = parseInt(box.id[box.id.length - 1]);
        if(combination.includes(id)){
            box.style.backgroundColor = "rgba(46, 204, 113, 0.8)";
        }else{
            box.style.backgroundColor = "rgba(231, 76, 60, 0.8)";
        }
    }
}


