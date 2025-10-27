function setup() {
    // Get the container size
    const container = document.getElementById('canvas-container');
    const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('canvas-container'); // attach canvas to the div
  
    ellipseColor = color(255, 0, 0);
}

function draw() {
    // Attach button events
    const container = document.getElementById('canvas-container');
    const lunchButtons = document.querySelectorAll('.lunch-choices button');

    lunchButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'chinese') {
                ellipseColor = color(255, 200, 0);
            } else if (button.id === 'mexican') {
                ellipseColor = color(0, 255, 0);
            } else if (button.id === 'indian') {
                ellipseColor = color(255, 100, 0);
            }
        });
    });

    // document.getElementById('chinese').addEventListener('click', () => {
    //     ellipseColor = color(255, 200, 0);

    // });

    // document.getElementById('mexican').addEventListener('click', () => {
    //     ellipseColor = color(0, 255, 0);
    // });

    // document.getElementById('indian').addEventListener('click', () => {
    //     ellipseColor = color(255, 100, 0);
    // });

    background(100, 150, 200);
    fill(ellipseColor);
    ellipse(width / 2, height / 2, 50, 50);
}
  