let currentPage = "start";
let img;
let button1, button2, button3;

function preload() {
  img = loadImage('https://images.medicinenet.com/images/article/main_image/man-hungry-angery-plate-utensils-eating-diet-nutrition.jpg');
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
  button3.position(windowWidth / 2, windowHeight / 2 - 300)

 
  button1.mousePressed(() => {
    currentPage = "page1";
  });

  button2.mousePressed(() => {
    currentPage = "page2";
  });

  button3.mousePressed(() => {
    currentPage = "page3";
  });

  tacoButton = createButton('Chipotle');
  burritoButton = createButton('Tomatillo');
  nachosButton = createButton('Vivaz Cantina');

  tacoButton.position(windowWidth / 2 - 100, windowHeight / 2);
  burritoButton.position(windowWidth / 2, windowHeight / 2);
  nachosButton.position(windowWidth / 2 + 100, windowHeight / 2);

  tacoButton.hide();
  burritoButton.hide();
  nachosButton.hide();

  tacoButton.mousePressed(() => currentPage = "tacoPage");
  burritoButton.mousePressed(() => currentPage = "burritoPage");
  nachosButton.mousePressed(() => currentPage = "nachoPage");

}


function draw() {
  background(220);

  if (currentPage === "start") {
    showStartPage();
  } else if (currentPage === "page1") {
    showPage("You are on Page 1. Something happens here.");
  } else if (currentPage === "page2") {
    showPage2();
 } else if (currentPage === "page3") {
    showPage("YOu are on Page 3. Something else happens.");
 }else if (currentPage === "tacoPage") {
    showFoodPage("Uh oh! Chipotle is closed due to RATS!! Guess you're going to bed hungry :(");
  } else if (currentPage === "burritoPage") {
    showFoodPage("Great choice, local establishment and great for grabbing a good bite on the go!");
  } else if (currentPage === "nachoPage") {
    showFoodPage("A great spot for food or drinks (as long as you're over 21) have a seat and grab a meal.");
  }
}
function showPage2() {
  button1.hide();
  button2.hide();
  button3.hide();

  tacoButton.show();
  burritoButton.show();
  nachosButton.show();

  background(255, 240, 200);
  img = loadImage ('https://domesticfits.com/wp-content/uploads/2024/05/mexican-cuisine-more-than-640x427.jpeg');
  fill(0);
  text("Where do you want to get Mexican food from?", width / 2, height / 2 - 100);
}

function showStartPage() {
  image(img, 0, 0, width, height / 2);

  fill(0);
  text("What are you hungry for?", width / 2, height / 2 + 100);

  button1.show();
  button2.show();
  button3.show();
}

function showPage(message) {
  button1.hide();
  button2.hide();
  button3.hide();

  background(200);
  fill(0);
  text(message, width / 2, height / 2);
}

