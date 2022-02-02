const makeRed = (ev) => {
    document.querySelector('body').style.backgroundColor = 'red';
};

const makeBlue = (ev) => {
    document.querySelector('body').style.backgroundColor = 'blue';
};

const makePink = (ev) => {
    document.querySelector('body').style.backgroundColor = 'pink';
};

const makeOrange = (ev) => {
    document.querySelector('body').style.backgroundColor = 'orange';
};

document.querySelector('#btn1').addEventListener('click', makeRed);
document.querySelector('#btn2').addEventListener('click', makeBlue);
document.querySelector('#btn3').addEventListener('click', makePink);
document.querySelector('#btn4').addEventListener('click', makeOrange);


// // Alternate strategy: just use one function...
// const setBackgroundColor = ev => {
//     const elem = ev.currentTarget;
//     document.querySelector('body').style.backgroundColor = elem.innerHTML;
// }

// document.querySelector('#btn1').addEventListener('click', setBackgroundColor);
// document.querySelector('#btn2').addEventListener('click', setBackgroundColor);
// document.querySelector('#btn3').addEventListener('click', setBackgroundColor);
// document.querySelector('#btn4').addEventListener('click', setBackgroundColor);
