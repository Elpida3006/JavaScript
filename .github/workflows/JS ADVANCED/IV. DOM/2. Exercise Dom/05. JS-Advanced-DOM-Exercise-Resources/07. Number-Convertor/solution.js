function solve() {
    const inputNumber = document.getElementById('input');
    const convertButton = document.getElementsByTagName('button')[0];
    const selectMenuTo = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');
    const options = ["Binary", "Hexadecimal"]

    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.toLowerCase();
        newOption.innerText = option;
        selectMenuTo.value = option;
        selectMenuTo.appendChild(newOption);
    });

    convertButton.addEventListener('click', function() {

        if (selectMenuTo.value == "binary") {
            result.value = (+inputNumber.value).toString(2);
        } else if (selectMenuTo.value == "hexadecimal") {
            result.value = (+inputNumber.value).toString(16).toUpperCase();
        } else {
            inputNumber.value = '';
            selectMenuTo.value = '';
            result.value = '';
        }
    });
}

const number = 78326782634
let final = number.toString(16)
console.log(final);