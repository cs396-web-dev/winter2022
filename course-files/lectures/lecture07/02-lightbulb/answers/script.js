const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";

const change = () => {
    const img = document.querySelector("#my_image");
    const h1 = document.querySelector("h1");
    if (img.src === imgOn) {
        img.src = imgOff;
        h1.innerHTML = "The Light is Off";
    } else {
        img.src = imgOn;
        h1.innerHTML = "The Light is On";
    }
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = change;