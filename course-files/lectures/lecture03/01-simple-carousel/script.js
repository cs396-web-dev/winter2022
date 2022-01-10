/**
 * This script's job is to move the top-most slide to the 
 * bottom every three seconds (or else when the user clicks
 * the slide): 
 */

const timeInterval = 2000; //milliseconds (2s)
const carousel = document.querySelector('.carousel');
let timer;


const rotate = () => {
    console.log('rotating...')
    const currentSlide = carousel.querySelector("section");
    // moves the slide to the bottom:
    carousel.appendChild(currentSlide);
};

const manualAdvance = ev => {
    clearInterval(timer); // turn off timer
    rotate();
    timer = setInterval(rotate, timeInterval); // turn on timer again
}

const initialize = () => {

    // carousel.scrollTop = 0;

    // attach rotate function to click event
    carousel.onclick = manualAdvance;

    // call the setInterval built-in function to put
    // the rotate function on a timer:
    timer = setInterval(rotate, timeInterval);
};

initialize();