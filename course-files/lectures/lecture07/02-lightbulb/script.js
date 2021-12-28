const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

const change = () => {
    // write some code to switch the image's src attribute
    // when the user clicks the image:
    console.log('Image was clicked!');
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = change;