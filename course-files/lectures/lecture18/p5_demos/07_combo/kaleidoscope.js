const kaleidoscopeObj = p => {
    let symmetry = 6;   
    let angle = 360 / symmetry;

    p.setup = function() {
        p.createCanvas(700, 410);
        const w = document.querySelector('#kaleidoscope').clientWidth;
        const h = document.querySelector('#kaleidoscope').clientHeight;
        p.createCanvas(w, h);
        p.angleMode(DEGREES);
        p.background(255);
    };

    p.draw = function () {
        p.translate(width / 2, p.height / 2);
      
        if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
            let mx = p.mouseX - p.width / 2;
            let my = p.mouseY - p.height / 2;
            let pmx = p.pmouseX - p.width / 2;
            let pmy = p.pmouseY - p.height / 2;
          
            if (p.mouseIsPressed) {
                for (let i = 0; i < symmetry; i++) {
                    p.rotate(angle);
                    let sw = 3;
                    p.strokeWeight(sw);
                    p.line(mx, my, pmx, pmy);
                    p.push();
                    p.scale(1, -1);
                    p.line(mx, my, pmx, pmy);
                    p.pop();
                }
            }
        }
    }
};
new p5(kaleidoscopeObj, 'kaleidoscope');