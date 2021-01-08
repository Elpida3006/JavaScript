// function subtract() {

//     let first = Number(document.getElementById('firstNumber').value)
//     let second = Number(document.getElementById('secondNumber').value)
//     let result = document.getElementById('result').textContent = first - second
//     console.log(result);
// }

subtract = () => {
    const firstNumber = document.querySelector('#firstNumber');
    const secondNumber = document.querySelector('#secondNumber');
    let result = document.querySelector('#result');

    const firstValue = Number(firstNumber.value)
    const secondValue = Number(secondNumber.value)

    result.value = firstValue - secondValue



}