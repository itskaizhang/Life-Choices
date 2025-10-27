// Description: 
// The p5.js file that changes the canvas which only includes text

let scene = 0;
let choice = "";
let mexicanChoice = "";
let newFont;


function preload() {
    newFont = loadFont('assets/MontaguSlab_48pt-Regular.ttf')
}

function setup() {
    const container = document.getElementById('canvas-container');
    const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('canvas-container');

    textFont(newFont);
    textAlign(CENTER, CENTER);
    textSize(40);

    // Lunch buttons
    const lunchButtons = document.querySelectorAll('.lunch-choices button');
    lunchButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            choice = btn.id; // "chinese" or "mexican"
            scene = 1;

            // Hide all lunch buttons
            lunchButtons.forEach(b => b.style.display = "none");

            if (choice === "chinese") showNext1_C_Choices();
            else if (choice === "mexican") showNext1_M_Choices();
        });
    });

    // Scene 1 Chinese
    const scene1_C_Buttons = document.querySelectorAll('.scene1-C-choices button');
    scene1_C_Buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            choice = btn.id; // junzi or chef-jiang
            scene = 2;
            scene1_C_Buttons.forEach(b => b.style.display = "none");

            if (choice == "junzi") showNext2_C_J_Choices();
            else if (choice == "chef-jiang") showNext2_C_C_Choices();
        });
    });

    // Scene 1 Mexican
    const scene1_M_Buttons = document.querySelectorAll('.scene1-M-choices button');
    scene1_M_Buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            mexicanChoice = btn.id; // birria or fish
            scene = 2;
            scene1_M_Buttons.forEach(b => b.style.display = "none");

            if (mexicanChoice == "birria") showNext2_M_B_Choices();
            else if (mexicanChoice == "fish") showNext2_M_F_Choices();
        });
    });
}


function draw() {
    background('#4e529a');
    fill('#ededed');
    
    if (scene == 0) {
        text('So, what do you want for lunch?', width/2, height/2);
    } else if (scene == 1) {
        if (choice === "chinese") {
            textSize(30);
            text('Which Chinese restaurant do you want to go to?', width/2, height/2);
        } else if (choice === "mexican") {
            textSize(40);
            text('What kind of tacos are you getting?', width/2, height/2);
        }
    } else if (scene == 2) {
        if (choice == "junzi") {
            textSize(25);
            text('It is the 10-year anniversary of Junzi, \nand everyone gets a free bowl. What is going in your bowl?', width/2, height/2);
        } else if (choice == "chef-jiang") {
            textSize(25);
            text('You go eat at Chef Jiang and get an \nallergic reaction from the food. What do you do?', width/2, height/2);
        } else if (mexicanChoice == "birria") {
            textSize(25);
            text('When you pick up your tacos, someone \nwaiting behind you wacks you with a baguette and \nsteals your taco. What do you do?', width/2, height/2);
        } else if (mexicanChoice == "fish") {
            textSize(30);
            text('You order your fish tacos. A seagull approaches.', width/2, height/2);
        }
    
    } else if (scene == 3) {
        if (choice === "canto-chicken" || choice === "tofu") {
            textSize(30);
            text('Fantastic choice!', width/2, height/2);
        } else if (choice === "butt") {
            textSize(30);
            text('Your butt could not press the right number \non your phone, so you are dead now.', width/2, height/2);
        } else if (choice === "waiter") {
            textSize(30)
            text('The waiter saw you and injected you \nwith the appropriate epipen. \nYou live to eat another day.', width/2, height/2);
        } else if (mexicanChoice === "dine-together") {
            textSize(25)
            text('Wow. Your kindness got rewarded with a new friend. Congrats!', width/2, height/2);
        }  else if (mexicanChoice === "run") {
            textSize(25)
            text('You run after that man and trip on a rock. \nYour taco gets stolen and you take quite a knock. \nYou just lost so much aura.', width/2, height/2);
        }   else if (mexicanChoice === "shoo") {
            textSize(30)
            text('That seagull was a mother trying to feed its kids. \nYou just shooed a poor single mother away.\n How do you feel?', width/2, height/2);
        }   else if (mexicanChoice === "split") {
            textSize(30)
            text('That seagull was a mother trying to feed its kids. \nNow she can go home early to look after her kids.', width/2, height/2);
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