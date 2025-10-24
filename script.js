let currentPage = "start";
let img;
let button1, button2;

function preload() {
  img = loadImage('https://placehold.co/600x400');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(20);

 
  button1 = createButton('Go to Page 1');
  button2 = createButton('Go to Page 2');


  button1.position(windowWidth / 2 - 150, windowHeight / 2 - 100);
  button2.position(windowWidth / 2 + 50, windowHeight / 2 - 100);

 
  button1.mousePressed(() => {
    currentPage = "page1";
  });

  button2.mousePressed(() => {
    currentPage = "page2";
  });
}

function draw() {
  background(220);

  if (currentPage === "start") {
    showStartPage();
  } else if (currentPage === "page1") {
    showPage("You are on Page 1. Something happens here.");
  } else if (currentPage === "page2") {
    showPage("You are on Page 2. Something else happens.");
  }
}

function showStartPage() {
  image(img, 0, 0, width, height / 2);

  fill(0);
  text("You are at the beginning of your journey. What do you want to do?", width / 2, height / 2 + 100);

  button1.show();
  button2.show();
}

function showPage(message) {
  button1.hide();
  button2.hide();

  background(200);
  fill(0);
  text(message, width / 2, height / 2);
}

