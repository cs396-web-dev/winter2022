class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }
    
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
  
const square = new Rectangle(10, 10);
const panel = new Rectangle(10, 100);
  
console.log(square.calcArea()); // 100
console.log(panel.calcArea()); // 100