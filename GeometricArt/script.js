const totalArts = 20;

const generateBtn = document.getElementById('generate-art-btn');

const arts = [
    'cone1',
    'cone2',
    'cone3',
    'cone4',
    'triangle1',
    'triangle2',
    'triangle3',
    'triangle4',
    'circle'
];

const colors = [
    "#4cd137",
    "#00a8ff",
    "#f1c40f",
    "#78e08f",
    "#e55039",
    "#a29bfe"
];

function randomNumber(len){
    return Math.round(Math.random() * (len - 1));
}

function drawShapes(e){
    e.preventDefault();
    for(let i = 1; i <= totalArts; i++){
        const art = document.getElementById(`art-${i}`);
        art.className = "";
        art.classList.add(arts[randomNumber(arts.length)]);
        art.style.backgroundColor = colors[randomNumber(colors.length)];
    }
}

window.onload = drawShapes;
generateBtn.addEventListener('click', drawShapes);


