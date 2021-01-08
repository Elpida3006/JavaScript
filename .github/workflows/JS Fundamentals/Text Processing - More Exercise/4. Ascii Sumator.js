function asciiSumator(symbolsString) {
    let firstSymbol = symbolsString.shift().charCodeAt()
    let secondSymbol = symbolsString.shift().charCodeAt()
    let string = symbolsString.shift()


    let maxChar = 0;
    let minChar = 0;
    if (firstSymbol >= secondSymbol) {
        maxChar = firstSymbol
        minChar = secondSymbol
    } else {
        maxChar = secondSymbol
        minChar = firstSymbol
    }

    // console.log(firstSymbol);
    // console.log(secondSymbol);

    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let asciichar = char.charCodeAt()
        if (asciichar < maxChar && asciichar > minChar) {
            sum += asciichar
        }
    }
    console.log(sum);
}
asciiSumator(['.', '@', 'dsg12gr5653feee5'])
    //363
asciiSumator(['?', 'E', '@ABCEF'])
    //262