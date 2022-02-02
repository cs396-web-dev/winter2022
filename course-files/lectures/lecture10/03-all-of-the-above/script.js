const changeColor = () => {
    alert('change background color.');
};

const changeTitle = () => {
    alert('change title.');
}

const addImage = () => {
    alert('add image.');
};

const clearImages = () => {
    alert('remove images.');
};


// attach event handlers:
document.getElementById("color_button").addEventListener('click', changeColor);
document.getElementById("title_button").addEventListener('click', changeTitle);
document.getElementById("cat_button").addEventListener('click', addImage);
document.getElementById("clear_button").addEventListener('click', clearImages);
