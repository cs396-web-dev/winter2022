//Hint 2: currentIndex as a global variable:
let currentIndex = 0;

// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
    // update .featured_image
};

const showNext = (ev) => {
    currentIndex += 1;
    console.log("currentIndex:", currentIndex);
    // update .featured_image
};

const showPrev = (ev) => {
    currentIndex -= 1;
    console.log("currentIndex:", currentIndex);
    // update .featured_image
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).
document.querySelectorAll('.image').forEach(elem => {
    elem.onclick = showImage;
});

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;