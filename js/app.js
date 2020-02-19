const canvas = document.querySelector('#jsCanvas'),
      ctx = canvas.getContext('2d'); //canvas의 context에 액세스
const colors = document.querySelector('#jsColors');
const range = document.querySelector('#jsrange');

let paintOption = false;
ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;
//나머지 할 일 
//fill 기능 넣기
//저장 기능 넣기
//끝

function mouseDown() {
  paintOption = true;
}

function paintOff() {
  paintOption = false;
}

function mouseMove(e) {
  const coord_x = e.offsetX;
  const coord_y = e.offsetY;
  if (!paintOption) {
    ctx.beginPath();
    ctx.moveTo(coord_x, coord_y);
  }else{
    paintPath(coord_x, coord_y);
  }
}

function paintPath(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

function changeColor(e) {
  const clickColor = e.target.style.backgroundColor;
  ctx.strokeStyle = clickColor;
}

function changeWidth(e) {
  const inputWidth = e.target.value;
  ctx.lineWidth = inputWidth;  
}

function init() {
  canvas.addEventListener('mousemove', mouseMove);
  canvas.addEventListener('mousedown', mouseDown);
  canvas.addEventListener('mouseup', paintOff);
  canvas.addEventListener('mouseleave', paintOff);
  colors.addEventListener('click', changeColor);
  range.addEventListener('input', changeWidth);
}
init();
