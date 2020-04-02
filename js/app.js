const canvas = document.querySelector("#jsCanvas"),
  ctx = canvas.getContext("2d"); //canvas의 context에 액세스
const colors = document.querySelector("#jsColors");
const range = document.querySelector("#jsrange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave");

let paintOption = false;
let drawMode = true;
const INITIAL_COLOR = "#2c2c2c";
const CAVAS_SIZE = 650;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
canvas.width = CAVAS_SIZE;
canvas.height = CAVAS_SIZE;

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
  } else {
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

function handleMode() {
  if (drawMode) {
    mode.innerHTML = "DRAW";
    drawMode = false;
    colors.addEventListener("click", changeBGC);
  } else {
    mode.innerHTML = "FILL";
    drawMode = true;
    colors.removeEventListener("click", changeBGC);
  }
}

function changeBGC(e) {
  const bgColor = e.target.style.backgroundColor;
  ctx.fillStyle = bgColor;
  ctx.rect(0, 0, CAVAS_SIZE, CAVAS_SIZE);
  ctx.fill();
}

function saveImg() {
  const url = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = url;
  link.download = "My_Drawing.png";
  link.click();
}

function init() {
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mouseup", paintOff);
  canvas.addEventListener("mouseleave", paintOff);
  colors.addEventListener("click", changeColor);
  range.addEventListener("input", changeWidth);
  mode.addEventListener("click", handleMode);
  save.addEventListener("click", saveImg);
}
init();
