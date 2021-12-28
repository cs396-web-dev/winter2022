// event handler:
const greeting = (ev) => {
    const buttonElement = ev.srcElement;
    // console.log(ev);
    // console.log(buttonElement.value, buttonElement.innerHTML);
    if (buttonElement.innerHTML === 'Say Hello') {
        document.querySelector('#greeting').innerHTML = 'Hello';
        buttonElement.innerHTML = 'Say Goodbye';
    } else {
        document.querySelector('#greeting').innerHTML = 'Goodbye';
        buttonElement.innerHTML = 'Say Hello';
    }
};

// event listener:
document.querySelector('#my_button').onclick = greeting;