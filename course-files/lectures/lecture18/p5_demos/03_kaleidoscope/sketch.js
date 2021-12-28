let symmetry = 6;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;


function setup() {
  // put setup code here
  const height = document.querySelector('#section1').clientHeight;
  const canvas = createCanvas(windowWidth, height);
  canvas.parent('section1');
  angleMode(DEGREES);
  background(127);
}

  
function draw() {
    translate(width / 2, height / 2);
  
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;
      
        if (mouseIsPressed) {
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                let sw = 3;
                strokeWeight(sw);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            }
        }
    }
}