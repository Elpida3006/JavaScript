function primeChecker(numberForCheck) {
    let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    primeNumbers.includes(numberForCheck) ? console.log(`true`) : console.log(`false`);
}
// let firstSymbol = 0;

// if (numberForCheck >= 10) {
//     firstSymbol = parseInt(numberForCheck / 10)
// } else {
//     firstSymbol = numberForCheck;
// }




primeChecker(7);
primeChecker(8);
primeChecker(81);
primeChecker(10);