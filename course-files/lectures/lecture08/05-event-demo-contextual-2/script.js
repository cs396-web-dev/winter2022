// 1) all event handlers take 1 and only 1 argument:
//    the event object
const showText = (ev) => {
   console.log(ev);
   const domElement = ev.currentTarget;
   document.querySelector('#output').innerHTML = domElement.value;
};

// event listener attach to all of the buttons:
document.querySelector('#textbox').onkeyup = showText;