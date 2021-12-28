/**
 * This script's job is to move the top-most slide to the 
 * bottom every three seconds (or else when the user clicks
 * the slide): 
 */

const carousel = document.querySelector(".carousel");

const rotate = () => {
    const currentSlide = carousel.querySelector("section");
    // moves the slide to the bottom:
    carousel.appendChild(currentSlide);
};

const initialize = () => {

    // attach rotate function to click event
    document.querySelector(".carousel").onclick = rotate;

    // call the setInterval built-in function to put
    // the rotate function on a timer:
    setInterval(rotate, 3000);
};

initialize();