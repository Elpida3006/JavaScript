// function solve() {

//     const inputparagraph = document.querySelector('#input')
//     const divPar = document.querySelector('#output')
//     const paragraphContent = inputparagraph.innerText

//     let sentence = Array.from(paragraphContent.split('. '))

//     let counter = 0;
//     let currParag = document.createElement('p')

//     for (let i = 0; i < sentence.length; i++) {
//         counter++
//         currParag.innerText += sentence[i]

//         if (counter == 3) {
//             divPar.appendChild(currParag);
//             currParag = document.createElement('p')
//             counter = 0
//         }

//     }
//     if (counter != 0) {
//         divPar.appendChild(currParag);
//     }

// }

solve = () => {

    let text = document.getElementById('input')
    let generateText = document.getElementById('output');

    let newParagraph = document.createElement('p');
    let counter = 0;

    Array.from(text.textContent.split('. '))
        .forEach(sentence => {

            counter++
            newParagraph.textContent += sentence

            if (counter == 3) {
                generateText.appendChild(newParagraph);
                newParagraph = document.createElement('p');
                counter = 0;
            }
        });
    if (counter != 0) {
        generateText.appendChild(newParagraph)
    }

}