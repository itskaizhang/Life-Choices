const lunchButtons = document.querySelectorAll('.lunch-choices button');

lunchButtons.forEach(button => {
  button.addEventListener('click', () => {
    choice = button.id;
    scene = 1;

    // Hide all buttons
    lunchButtons.forEach(btn => btn.style.display = 'none');

    // Optionally, show new choices
    showNextChoices();
  });
});


function showNextChoices() {
    const nextButtons = document.querySelectorAll('.scene1-C-choices button');

    nextButtons.forEach(button => {
        button.style.display = 'flex'; //'inline-block'; // or 'block'
    });
}