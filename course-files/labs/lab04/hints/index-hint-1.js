//Hint 1:

// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);

    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).
document.querySelectorAll('.image').forEach(elem => {
    elem.onclick = showImage;
});