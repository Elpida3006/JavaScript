function binaryToDecimal(binary) {
    return parseInt((binary + '')
        .replace(/[^01]/gi, ''), 2);


}
binaryToDecimal(00001001)