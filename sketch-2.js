let ellipseColor;
let currentImage;
let imgChinese, imgMexican, imgIndian;

function preload() {
  // preload your images (update these file paths as needed)
  imgChinese = loadImage('assets/Chinese-Food.jpg');
  imgMexican = loadImage('assets/Mexican-Food.jpg');
  imgIndian = loadImage('assets/Indian-Food.jpg');
}

function setup() {
    // Get the container size
    const container = document.getElementById('canvas-container');
    const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('canvas-container'); // attach canvas to the div
  
    ellipseColor = color(255, 0, 0);
    background(100, 150, 200);

    const lunchButtons = document.querySelectorAll('.lunch-choices button');

    lunchButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'chinese') {
                currentImage = imgChinese;
                // ellipseColor = color(255, 200, 0);
            } else if (button.id === 'mexican') {
                currentImage = imgMexican;
                // ellipseColor = color(0, 255, 0);
            } else if (button.id === 'indian') {
                currentImage = imgIndian;
                // ellipseColor = color(255, 100, 0);
            }
        });
    });

}

function draw() {
    // Attach button events
    // const container = document.getElementById('canvas-container');
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

    if (currentImage) {
        image(currentImage, 0, 0, width, height);
    } else {
        // fallback if no image is selected
        fill(ellipseColor);
        ellipse(width / 2, height / 2, 80, 80);
    }
}
  