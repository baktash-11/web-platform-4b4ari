console.log('Welcome to events');
//getting btn refrence
const btn2 = document.querySelector('.btn-2');
function log(e) {
  //loging message to console
  console.log('I love javascript');
  // console.log(e.target.tagName);
}
//adding event listener
btn2.addEventListener('click', log);

const box3 = document.querySelector('.box-3');

function bgColor(color) {
  box3.style.background = '#0D1321';
}
function bgColorRevers() {
  box3.style.background = '#1D2D44';
}

let btn3 = document.querySelector('.btn-3');
btn3.addEventListener('mouseover', bgColor);
btn3.addEventListener('click', bgColorRevers);

const btn = document.querySelectorAll('.btn');
for (let i = 0; i < btn.length; i++) {
  btn[i].style.cursor = 'pointer';
}
