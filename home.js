// DOM manipulation

//traverse the DOM

//parent Node traverse
let ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);
ul.parentNode.parentNode.parentNode.style.background = 'red';
ul.parentElement.style.background = 'white';
ul.parentElement.style.padding = '50px';
//child Node traverse
console.log(ul.childNodes);
console.log(ul.childElementCount);
console.log(ul.firstChild);
console.log(ul.lastChild);
// fristElementChild
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
//siblings Node traverse

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElmentSibling);


