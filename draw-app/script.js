const canvas = document.querySelector('.draw');
const sizeInput = document.querySelector('.num');
const crt = canvas.getContext('2d');
const colorInput = document.querySelector('.color');
let fillColor = colorInput.value;
let radius = sizeInput.value;
const clearButton = document.querySelector('.clear');
let xAxis;
let yAxis;
let x2;
let y2;
let isPressed = false;

const setRadius = function() {
  radius = sizeInput.value;
  // console.log('radius', radius);
}

const setColor = function() {
  fillColor = colorInput.value;
  // console.log('fillColor', fillColor);
}



colorInput.addEventListener('change', setColor);
sizeInput.addEventListener('change', setRadius);

const drawCircle = function() {
  // console.log(radius);
  crt.fillStyle = fillColor;
  crt.beginPath();
  crt.moveTo(xAxis, yAxis);
  crt.arc(xAxis, yAxis, radius, 0, Math.PI * 2, true);
  crt.fill();
}

const drawLine = function(x, y, x2, y2) {
  crt.beginPath();
  crt.moveTo(x, y);
  crt.lineTo(x2, y2);
  crt.lineWidth = radius * 2;
  // crt.fillStyle = fillColor;
  crt.strokeStyle = fillColor;
  crt.stroke();
  // console.log(fillColor);
}

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  crt.clearRect(0, 0, 1200, 700);
})

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  xAxis = e.offsetX;
  yAxis = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  xAxis = e.offsetX;
  yAxis = e.offsetY;
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    x2 = e.offsetX; 
    y2 = e.offsetY;
    drawLine(xAxis, yAxis, x2, y2);
    drawCircle();
    xAxis = e.offsetX; 
    yAxis = e.offsetY;
    //console.log(e); console.log(e.offsetX, e.offsetY); console.log(xAxis, yAxis);
  // if (e.movementX || e.movementY) {
    // x2 = xAxis + e.movementX;
    // y2 = yAxis + e.movementY;
  // }
  }

})