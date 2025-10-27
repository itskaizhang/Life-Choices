const lunchButtons = document.querySelectorAll('.lunch-choices button');

lunchButtons.forEach(button => {
  button.addEventListener('click', () => {
    choice = button.id;
    scene = 1;

    // Hide all buttons
    lunchButtons.forEach(btn => btn.style.display = 'none');

    // Optionally, show new choices
    showNext1_C_Choices();
  });
});


function showNext1_C_Choices() {
    const nextButtons = document.querySelectorAll('.scene1-C-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; //'inline-block'; // or 'block'
    });
}


///// CHINESE FOOD
const scene1_C_Buttons = document.querySelectorAll('.scene1-C-choices button');

    scene1_C_Buttons.forEach(button => {
    button.addEventListener('click', () => {
    choice = button.id;
    scene = 2;

    // Hide all buttons
    scene1_C_Buttons.forEach(btn => btn.style.display = 'none');

    // Optionally, show new choices
    showNext2_C_J_Choices();
  });
});

function showNext2_C_J_Choices() {
    const nextButtons = document.querySelectorAll('.scene2-C-J-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; //'inline-block'; // or 'block'
    });
}