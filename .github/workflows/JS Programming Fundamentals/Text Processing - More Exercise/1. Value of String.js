function asciiSum(input) {
    let string = input.shift()
    let command = input.shift()


    function lowerCase(string) {
        let regex = /[a-z]/g
        let result = ""
        while (resultString = regex.exec(string)) {
            result += resultString
        }

        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            let char = result[i];
            sum += char.charCodeAt()
        }
        return sum;
    }

    function upperCase(string) {
        let regex = /[A-Z]/g
        let result = ""
        while (resultString = regex.exec(string)) {
            result += resultString
        }

        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            let char = result[i];
            sum += char.charCodeAt()
        }
        return sum;
    }


    switch (command) {
        case 'LOWERCASE':
            console.log(`The total sum is: ${lowerCase(string)}`);
            break;
        case 'UPPERCASE':
            console.log(`The total sum is: ${upperCase(string)}`);
            break;

    }




}
asciiSum(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])
asciiSum(['AC/DC', 'UPPERCASE'])