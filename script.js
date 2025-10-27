// // let scene = 0;
// let chinese = 0
// let mexican = 0;
// let sweetgreen = 0;
// let choice = "";

const lunchButtons = document.querySelectorAll('.lunch-choices button');

lunchButtons.forEach(button => {
  button.addEventListener('click', () => {
    choice = button.id;
    scene = 1;

    // Hide all buttons
    lunchButtons.forEach(btn => btn.style.display = 'none');

    // Show next choices based on selection
    if (choice === "chinese") {
        showNext1_C_Choices();
    } else if (choice === "mexican") {
        showNext1_M_Choices();
    }

  });
});

function showNext1_C_Choices() {
    const nextButtons = document.querySelectorAll('.scene1-C-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; //'inline-block'; // or 'block'
    });
}

function showNext1_M_Choices() {
    const nextButtons = document.querySelectorAll('.scene1-M-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; //'inline-block'; // or 'block'
    });
}

// CHINESE FOOD
// Scene 1
const scene1_C_Buttons = document.querySelectorAll('.scene1-C-choices button');

scene1_C_Buttons.forEach(button => {
    button.addEventListener('click', () => {
    choice = button.id;
    scene = 2;

    // Hide all buttons
    scene1_C_Buttons.forEach(btn => btn.style.display = 'none');

    // Show next scene choices depending on if junzi/chef jiang is selected
    if (choice == "junzi") {
        showNext2_C_J_Choices();
    } else if (choice == "chef-jiang") {
        showNext2_C_C_Choices();
    }
  });
});

// Scene 2
function showNext2_C_J_Choices() {
    const nextButtons = document.querySelectorAll('.scene2-C-J-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; 
    });
}

function showNext2_C_C_Choices () {
    const nextButtons = document.querySelectorAll('.scene2-C-C-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; 
    });
}

// Scene 3
const scene2_C_J_Buttons = document.querySelectorAll('.scene2-C-J-choices button');
const scene2_C_C_Buttons = document.querySelectorAll('.scene2-C-C-choices button');

scene2_C_J_Buttons.forEach(button => {
    button.addEventListener('click', () => {
    choice = button.id;
    scene = 3;
    console.log('Hello')

    // Hide all buttons
    scene2_C_J_Buttons.forEach(btn => btn.style.display = 'none');
  });
}); 

// END OF CHINESE FOOD

/////// /////// /////// /////// /////// /////// /////// 

// MEXICAN FOOD
const scene1_M_Buttons = document.querySelectorAll('.scene1-M-choices button');

scene1_M_Buttons.forEach(button => {
    button.addEventListener('click', () => {
    mexicanChoice = button.id;
    scene = 2;
    mexican = 1; //track Mexican

    // Hide all buttons
    scene1_M_Buttons.forEach(btn => btn.style.display = 'none');

    // Show next scene choices depending on if junzi/chef jiang is selected
    if (mexicanChoice == "birria") {
        showNext2_M_B_Choices();
    } else if (mexicanChoice == "fish") {
        showNext2_M_F_Choices();
    }
  });
});

// Scene 2
function showNext2_M_B_Choices() {
    const nextButtons = document.querySelectorAll('.scene2-M-B-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; 
    });
}

function showNext2_M_F_Choices () {
    const nextButtons = document.querySelectorAll('.scene2-M-F-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; 
    });
}

// Scene 3
const scene2_M_B_Buttons = document.querySelectorAll('.scene2-M-B-choices button');
const scene2_M_F_Buttons = document.querySelectorAll('.scene2-M-F-choices button');

scene2_M_B_Buttons.forEach(button => {
    button.addEventListener('click', () => {
    mexicanChoice = button.id;
    scene = 3;
    console.log('Hello')

    // Hide all buttons
    scene2_M_B_Buttons.forEach(btn => btn.style.display = 'none');
  });
}); 

scene2_M_F_Buttons.forEach(button => {
    button.addEventListener('click', () => {
    mexicanChoice = button.id;
    scene = 3;

    console.log('Hello')
    // Hide all buttons
    scene2_M_F_Buttons.forEach(btn => btn.style.display = 'none');
  });
});

// END OF MEXICAN FOOD