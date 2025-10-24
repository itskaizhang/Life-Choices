let currentPage = "start";
let img;
let button1, button2, button3;

function preload() {
  img = loadImage('https://www.google.com/imgres?q=hungry&imgurl=https%3A%2F%2Fimages.medicinenet.com%2Fimages%2Farticle%2Fmain_image%2Fman-hungry-angery-plate-utensils-eating-diet-nutrition.jpg%3Foutput-quality%3D75&imgrefurl=https%3A%2F%2Fwww.medicinenet.com%2Fwhy_do_i_constantly_feel_hungry_even_after_eating%2Farticle.htm&docid=58xg53_In2JmgM&tbnid=7RWU8-WkwVVcFM&vet=12ahUKEwi-mqyR3buQAxX8D1kFHWE1DiMQM3oECBIQAA..i&w=650&h=442&hcb=2&ved=2ahUKEwi-mqyR3buQAxX8D1kFHWE1DiMQM3oECBIQAA');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(20);

 
  button1 = createButton('Chinese Food');
  button2 = createButton('Mexican Food');
  button3 = createButton('Fast Food');


  button1.position(windowWidth / 2 - 150, windowHeight / 2 - 100);
  button2.position(windowWidth / 2 + 50, windowHeight / 2 - 100);
  button3.position(windowWidth / 2, windowHeight / 2 - 200)

 
  button1.mousePressed(() => {
    currentPage = "page1";
  });

  button2.mousePressed(() => {
    currentPage = "page2";
  });

  button3.mousePressed(() => {
    currentPage = "page3";
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
 } else if (currentPage === "page3") {
    showPage("YOu are on Page 3. Something else happens.");
 }
}

function showStartPage() {
  image(img, 0, 0, width, height / 2);

  fill(0);
  text("What are you hungry for?", width / 2, height / 2 + 100);

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

