const changeColor = () => {
    let color = prompt('What color?: ');
    document.getElementById("panel1").style.backgroundColor = color;
};

const changeTitle = () => {
    let title = prompt('New title: ');
    document.querySelector("h1").innerText = title;
}

const addImage = () => {
    const image_html = '<img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" />';
    document.getElementById("panel1").innerHTML += image_html;
};

const clearDivs = () => {
    document.getElementById("panel1").innerHTML = "";
};


// attach event handlers:
document.getElementById("color_button").addEventListener('click', changeColor);
document.getElementById("title_button").addEventListener('click', changeTitle);
document.getElementById("cat_button").addEventListener('click', addImage);
document.getElementById("clear_button").addEventListener('click', clearDivs);
