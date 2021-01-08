import { monkeys as monkeys } from './monkeys.js'
// console.log(monkeys);
const selectors = {
    allmonkey: () => document.querySelector('.monkeys')
}

fetch('./monkey.hbs')
    .then(res => res.text())
    .then((hbsDataString) => {
        const hbsObj = Handlebars.compile(hbsDataString)
        const htmlView = hbsObj({ monkeys })
            //data = monkeys

        selectors.allmonkey().innerHTML = htmlView
        hide();


    })
    .catch((e) => console.error(e))

function hide() {
    selectors.allmonkey().addEventListener('click', (e) => {

        if (e.target.tagName === 'BUTTON') {
            let { display } = e.target.parentNode.children[3].style;
            if (display === 'none') {
                e.target.parentNode.children[3].style.display = 'block';
            } else {
                e.target.parentNode.children[3].style.display = 'none';
            }
        }

    })
}