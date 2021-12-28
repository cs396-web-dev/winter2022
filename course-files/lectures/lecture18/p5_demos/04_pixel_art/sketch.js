
// https://p5js.org/examples/image-pointillism.html
let img;
let numPixels = 0;
let scaleFactor;
let limit;

function preload() {
    img = loadImage('parrot-color.png');
}
function setup() {
    // put setup code here
    const height = document.querySelector('#section1').clientHeight;
    const canvas = createCanvas(windowWidth, height);
    canvas.parent('section1');
    scaleFactor = width / img.width;
    noStroke();
    background(255);
    img.loadPixels();
    imageMode(CENTER);
    if (height > width) {
        scaleFactor = height / img.height;  
    } else {
        scaleFactor = width / img.width;
    }
}

function draw() {
    // stop drawing after 12,000 pixels have been drawn:
    if (numPixels > 12000) { return; }
    renderPixelatedDrawing();
}



function renderPixelatedDrawing() {
    // draw 30 circles (i.e. "pixels" each time the frame redraws)
    for(let i = 0; i < 30; i++) {
        const pixel = floor(random(20, 40))
        const x = floor(random(img.width));
        const y = floor(random(img.height));
        const pix = img.get(x, y);
        fill(pix, 128);
        ellipse(x * scaleFactor, y * scaleFactor, pixel, pixel);
        ++numPixels;
    }
}
