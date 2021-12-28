let snowflakes = [];

function setup() {
    // put setup code here
    const height = document.querySelector('#section1').clientHeight;
    const canvas = createCanvas(windowWidth, height);
    canvas.parent('section1');
    fill(240);
    noStroke();
    for (let i = 0; i < 300; i++) {
        snowflakes.push(new snowflake(height)); // append snowflake object
    }
}

function draw() {
    background('black');
    let t = frameCount / 60; // update time
  
    // create a random number of snowflakes each frame
    for (let i = 0; i < random(3); i++) {
        snowflakes.push(new snowflake(0)); // append snowflake object
    }
  
    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
        flake.update(t); // update snowflake position
        flake.display(); // draw snowflake
    }
}
  
// snowflake class (controls each individual snowflake)
function snowflake(y) {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, y);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);
  
    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));
  
    this.update = function(time) {
        // x position follows a circle
        let w = 0.6; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);
  
        // different size snowflakes fall at slightly different y speeds
        this.posY += pow(this.size, 0.5);
  
        // delete snowflake if past end of screen
        if (this.posY > height) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };
  
    this.display = function() {
         ellipse(this.posX, this.posY, this.size);
    };
}