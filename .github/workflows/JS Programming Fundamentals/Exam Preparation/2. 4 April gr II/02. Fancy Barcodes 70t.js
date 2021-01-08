function fancyBarcode(arrayOfString) {

    let countEventuallyBarcode = Number(arrayOfString.shift());
    let pattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/;
    // s grupi dawa 80, dori s otdelen regeks za digit, bez match , s exec i izvaden group i obhojdane za sabirane na digit -- 70 - mizernik!!!
    for (let barcode = 0; barcode < countEventuallyBarcode; barcode++) {
        let eventuallyBarcode = arrayOfString.shift()
        let digit = /\d+/g
        if (valid = pattern.exec(eventuallyBarcode)) {
            if (numbers = eventuallyBarcode.match(digit)) {
                console.log(`Product group: ${numbers.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

fancyBarcode(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##'])
fancyBarcode([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'

])