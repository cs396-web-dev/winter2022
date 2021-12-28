let nu_logo;

function preload(){
    // preload all images in this function:
    nu_logo = loadImage("https://common.northwestern.edu/v8/css/images/northwestern.svg");
}

function setup() {
  // put setup code here
  const height = document.querySelector('#section1').clientHeight;
  const canvas = createCanvas(windowWidth, height);
  canvas.parent('section1');
}

i = -100;
function draw() {
    // clear out the last picture
    background('#401F68');

    drawFace(i);
    ++i;

    if (i > windowWidth) {
        i = -100;
    }

    // move logo:
    image(nu_logo, i*2, 100);
}

function drawFace(xPosition) {
    // face:
    ellipse(50 + xPosition, 50, 80, 80);

    // left eye:
    ellipse(40 + xPosition, 40, 10, 15);

    // right eye:
    ellipse(60 + xPosition, 40, 10, 15);
}