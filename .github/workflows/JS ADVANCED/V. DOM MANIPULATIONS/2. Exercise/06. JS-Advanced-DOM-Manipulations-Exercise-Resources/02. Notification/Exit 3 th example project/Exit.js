let left = document.querySelector('.left');
let right = document.querySelector('.right');


// left.style.backgroundColor = 'green';
// right.style.backgroundColor = 'red';

setInterval(() => {

    right.style.backgroundColor = 'green'
    setTimeout(() => {
        right.style.backgroundColor = 'red'
    }, 1000)

}, 2000)
setInterval(() => {

    left.style.backgroundColor = 'red';
    setTimeout(() => {
        left.style.backgroundColor = 'green';
    }, 1000)
}, 2000)