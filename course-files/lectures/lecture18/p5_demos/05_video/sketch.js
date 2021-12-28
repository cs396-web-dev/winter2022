let capture;
let scaleFactor = 1;

function setup() {
    const height = document.querySelector('#section1').clientHeight;
    const width = windowWidth / 2;
    const canvas = createCanvas(width, height);
    capture = createCapture(VIDEO);
    capture.size(390, 240);
    canvas.parent('section1');
    capture.hide();
}

function draw() {
  background(255);
  capture.loadPixels();

  // scale video to fit to canvas:
  image(capture, 0, 0, capture.width, capture.height);
}