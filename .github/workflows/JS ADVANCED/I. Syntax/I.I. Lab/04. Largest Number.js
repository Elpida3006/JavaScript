// function mathmax(number1, number2, number3) {
//     number1 = Number(number1)
//     number2 = Number(number2)
//     number3 = Number(number3)
//     let max = Math.max(number1, number2, number3)
//     console.log(`The largest number is ${max}.`);
// }
mathmax = (...numbers) => {

    const max = Math.max(...numbers)
    return (`The largest number is ${max}.`);
}
mathmax(5, -3, 16)
mathmax(-3, -5, -22.5)