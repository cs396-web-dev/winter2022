
// https://editor.p5js.org/leftlife/sketches/cFD-TFQqe
let capture;
let scaleFactor = 1;
let offsetX = 0;
let offsetY = 0;

const BASE_X = 390;
const BASE_Y = 240;

function setup() {
    const width = document.querySelector('#video').clientWidth;
    const height = document.querySelector('#video').clientHeight;
    scaleFactor = width / BASE_X;  
    offsetX = width / scaleFactor * .66;
    offsetY = 0;

    const canvas = createCanvas(width, height);
    frameRate(10);
    pixelDensity(3);
    noStroke();
    fill(0);
    capture = createCapture(VIDEO);
    capture.size(BASE_X * scaleFactor, BASE_Y * scaleFactor);
    canvas.parent('video');
    capture.hide();
}

function draw() {
    background(255);
    capture.loadPixels();

    const stepSize = 7;
    for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
            const i = y * width + x;
            // const pix = capture.get(x, y);
            // fill(pix, 128);
            const darkness = (255 - capture.pixels[i * 4]) / 255;
            const radius = (stepSize + 5) * darkness;
            let scaledX = x * scaleFactor - offsetX;
            let scaledY = y * scaleFactor - offsetY;
            ellipse(scaledX, scaledY, radius, radius);
        }
    }
}