// function growingWord() {
// const p = document.querySelector('#exercise > p');





// let px = 2;
// let colorChanges = {
//     'blue': 'green',
//     'green': 'red',
//     'red': 'blue'
// };

// if (!p.hasAttribute("style")) {
//  p.setAttribute("style", `color:blue; font-size: ${px}px`);
// } else {
// let currentPx = p.style["font-size"];
// px = currentPx.substr(0, currentPx.length - 2) * 2;
// let currColor = p.style.color;

// p.setAttribute("style", `color:${colorChanges[currColor]}; font-size: ${px}px`)

function growingWord() {
    let parentElement = document.getElementById('exercise')
    let growP = parentElement.lastElementChild;
    let colorElements = document.getElementById('colors')

    if (!growP.style.fontSize) {
        growP.style.fontSize = '2px'
    } else {
        growP.style.fontSize = parseInt(growP.style.fontSize) * 2 + 'px';
    }
    let firstColorEl = colorElements.firstElementChild
    let color = firstColorEl.innerHTML.toLowerCase()
    growP.style.color = color;
    colorElements.appendChild(firstColorEl)
}
//TODO...
// }