let msg = "-->";
let cols = 10;
let rows = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //we can divide the canvas width & height byt the number of columns and rows to get the dimensions of each grid.
  grid_w = width / cols;
  grid_h = height / rows;
  textAlign(CENTER);
}

function draw() {
  background(220);
  //let's start by drawing each column only
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      //we are going to use the grid_w to space out the columns,
      //we drawing a square of dimensions grid_w and grid_h
      let x = i * grid_w;
      let y = j * grid_h;
      let distance = dist(mouseX, mouseY,x, y); // Calculating distance of mouse to (x,y)

      push();
      translate(x, y);
      rotate(distance/150);
      textSize(map(distance,0,width,50,2))
      //rect(0, 0, grid_w, grid_h);
      text(msg, grid_w / 2, grid_h / 2);
      // fill(i*20,j*20,200)
      // rect(x,y,x+grid_w,y+grid_h)
      // text(msg,x+grid_w/2,y+grid_h/2)
      pop();
    }
  }
}
