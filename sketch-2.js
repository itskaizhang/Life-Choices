let scene = 0;
let chinese = 0
let mexican = 0;
let sweetgreen = 0;
let choice = "";
let newFont;

function preload() {
    newFont = loadFont('assets/MontaguSlab_48pt-Regular.ttf')
}

function setup() {
    // Get the container size
    const container = document.getElementById('canvas-container');
    const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('canvas-container'); // attach canvas to the div
  
    textFont(newFont);
    textAlign(CENTER, CENTER);
    textSize(40);

    // Event listeners -- Will learn more about this I'm sure
    const lunchButtons = document.querySelectorAll('.lunch-choices button');

    lunchButtons.forEach(button => {
        button.addEventListener('click', () => {
            choice = button.id; // "chinese", "mexican", or "indian"
            scene = 1;
        });
    });

    const scene1_C_Buttons = document.querySelectorAll('.scene1-C-choices button');

    scene1_C_Buttons.forEach(button => {
        button.addEventListener('click', () => {
            choice = button.id;
            scene = 2;
        });
    })
}

function draw() {
    background('#4e529a');
    fill('#ededed');
    
    // const container = document.getElementById('canvas-container');
    
    // if (scene == 0) {
    //     text('So, what do you want for lunch?', width/2, height/2);
    // }
    // // CHINESE FOOD
    // else if (scene == 1 && chinese >= 1) {
    //     text('Which Chinese restaurant do you want to go to?');
    // }
    // else if (scene == 1 && mexican >= 1) {
    //     text("What kind of tacos are you getting?")
    // }

    if (scene == 0) {
        text('So, what do you want for lunch?', width/2, height/2);
    } else if (scene == 1) {
        if (choice === "chinese") {
            textAlign(CENTER);
            textSize(30);
            text('Which Chinese restaurant do you want to go to?', width/2, height/2);
        } else if (choice === "mexican") {
            textAlign(CENTER);
            textSize(40);
            text('What kind of tacos are you getting?', width/2, height/2);
        } else if (choice === "indian") {
            textAlign(CENTER);
            textSize(45);
            text('When are you going to Sweetgreen?', width/2, height/2);
        }
    } else if (scene == 2) {
        if (choice == "junzi") {
            textAlign(CENTER);
            textSize(25);
            text('It is the 10-year anniversary of Junzi, \nand everyone gets a free bowl. What is going in your bowl?', width/2, height/2);
        } else if (choice == "mexican") {
            textAlign(CENTER);
            textSize(40);
            text('What kind of tacos are you getting?', width/2, height/2);
        } else if (choice === "indian") {
            textAlign(CENTER);
            textSize(45);
            text('When are you going to Sweetgreen?', width/2, height/2);
        }
    }
}



// CODE SNIPPETS

   // lunchButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         if (button.id === 'chinese') {
    //             chinese = chinese + 1;
    //             scene = 1;
    //         } else if (button.id === 'mexican') {
    //             mexican++;
    //             scene = 1;
    //         } else if (button.id === 'indian') {
    //             currentImage = imgIndian;
    //             // ellipseColor = color(255, 100, 0);
    //         }
    //     });
    // });


 // document.getElementById('mexican').addEventListener('click', () => {
    //     ellipseColor = color(0, 255, 0);
    // });

    // document.getElementById('indian').addEventListener('click', () => {
    //     ellipseColor = color(255, 100, 0);
    // });

    // background(100, 150, 200);

    // if (currentImage) {
    //     image(currentImage, 0, 0, width, height);
    // } else {
    //     // fallback if no image is selected
    //     fill(ellipseColor);
    //     ellipse(width / 2, height / 2, 80, 80);
    // }