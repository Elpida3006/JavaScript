// function solve() {
//     const anchors = Array.from(document.querySelectorAll('a'))

//     const counters = anchors.map(el => +(el).nextElementSibling.innerText.split(' ')[1])
//     const container = document.querySelector('#page1 > .middled');


//     container.addEventListener('click', function(e) {

//         const target = e.target
//         const parent = e.target.parentElement
//         const nottargetAnchor = target.localName !== 'a';
//         const nottargetParentAnchor = (parent && parent.localName !== 'a');

//         if (nottargetAnchor && nottargetParentAnchor) {
//             return;
//         }

//         const targetAnchor = nottargetAnchor ? parent : target;
//         const targetIndex = anchors.indexOf(targetAnchor)

//         if (targetIndex === -1) {
//             return
//         }
//         counters[targetIndex]++
//             const paragraph = targetAnchor.nextElementSibling;
//         paragraph.innerText = `visited ${counters[targetIndex]} times`




//     });

// }


// solve = () => {
//         let a = document.querySelectorAll(' a')

//         for (const el of a) {
//             el.addEventListener('click', function(e) {
//                 let p = e.currentTarget.nextElementSibling
//                 let counter = Number(p.textContent.split(' ')[1])
//                 counter++
//                 p.innerText = `visited ${counter} times`
//             })
//         }
//     }

function solve() {
    let linksElement = Array.from(document.getElementsByClassName('link-1'));

    linksElement.forEach(neshto => {
        let currentLinkElement = neshto.children[0];
        let paragraphElement = neshto.children[1].innerHTML;

        currentLinkElement.addEventListener('click', function() {
            let words = paragraphElement.split(' ')
            let counter = Number(paragraphElement.split(' ')[1])
            counter++
            neshto.children[1].innerHTML = words.join(' ');

        });
    });
}
