// function solve() {
//     const addButton = document.getElementsByTagName('button')[0];
//     const input = document.querySelector("input");
//     let fLetter = '';

//     addButton.addEventListener('click', function() {
//         let name = input.value;
//         fLetter = name[0].toUpperCase();
//         let index = fLetter.charCodeAt(0) - 65;
//         let list = document.querySelectorAll("ol li");
//         //wyrnat e masiw ot wsichki li-ta


//         if (list[index].textContent === '') {
//             list[index].textContent += name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//         } else {
//             list[index].textContent += ", " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//         }
//         input.value = '';
//     });
// }

solve = () => {

    const input_Line = document.querySelector("input")
    const buttonADD = document.querySelector("button");

    buttonADD.addEventListener('click', () => {

        let inputText = input_Line.value
        let inputFistLetter = inputText[0].toUpperCase();
        let indexFistLetter = inputFistLetter.charCodeAt() - 65
        let database = document.querySelectorAll("ol li")


        if (database[indexFistLetter].textContent === '') {
            database[indexFistLetter].textContent += inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        } else {
            database[indexFistLetter].textContent += ", " + inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
        }

        input_Line.value = '';
    })

}