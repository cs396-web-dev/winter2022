class Card {
    constructor(selector) {
        this.el = document.querySelector(selector);
        this.height = this.el.offsetWidth;
        this.width = this.el.offsetHeight;
        console.log(this.height, this.width);
        // this.el.querySelector('button').onclick = this.toggleSize;
        this.el.querySelector('button').onclick = this.toggleSize.bind(this);
    }

    // Getter
    get area() {
        return this.calcArea();
    }
    
    // Method
    toggleSize(ev) {
        console.log(this);
        
        const text = ev.currentTarget.innerHTML;
        let newText;
        
        if (text === 'bigger') {
            this.width *= 2;
            this.height *= 2;
            newText = 'smaller';
        } else {
            this.width /= 2;
            this.height /= 2;
            newText = 'bigger';
        }

        this.el.style.width = this.width + 'px';
        this.el.style.height = this.height + 'px';
        ev.currentTarget.innerHTML = newText
    }
}
  
const card1 = new Card('#card1');
const card2 = new Card('#card2');
  