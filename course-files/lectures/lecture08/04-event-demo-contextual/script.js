// 1) all event handlers take 1 and only 1 argument:
//    the event object
const changeColor = (ev) => {
   console.log(ev);
   const domElement = ev.currentTarget;
   const message = domElement.dataset.message;
   const color = domElement.dataset.color;
   document.querySelector('body').style.background = color;
   document.querySelector('#greeting').innerHTML = message;
};

// event listener attach to all of the buttons:
document.querySelector('#color1').onclick = changeColor;
document.querySelector('#color2').onclick = changeColor;
document.querySelector('#color3').onclick = changeColor;