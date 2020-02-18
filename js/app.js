const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d'); //canvas의 context에 액세스



let paintOption = false;


function mouseDown() {
  paintOption = true;
}

function paintOff() {
  paintOption = false;
}

function mouseMove(e) {
  if (paintOption) {
    const coord_x = e.offsetX;
    const coord_y = e.offsetY;
    paintPath(coord_x, coord_y);
  }
}

function paintPath(x, y) {
  console.log(x, y);
}



function init() {
  canvas.addEventListener('mousemove', mouseMove);
  canvas.addEventListener('mousedown', mouseDown);
  canvas.addEventListener('mouseup', paintOff);
  canvas.addEventListener('mouseleave', paintOff);
}
init();
