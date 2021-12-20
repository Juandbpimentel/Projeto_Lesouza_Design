const canvas = document.querySelector('#signature');
const clearButton = document.querySelector('#clear');
const displayButton = document.querySelector('#display');
const downloadButton = document.querySelector('#download');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.strokeStyle = '#272631';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function display() {
    const dataURI = canvas.toDataURL("image/jpeg");
    console.log(dataURI);
}

function download() {
    
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

clearButton.addEventListener('click', clear);
displayButton.addEventListener('click', display);
downloadButton.addEventListener('click', download);
