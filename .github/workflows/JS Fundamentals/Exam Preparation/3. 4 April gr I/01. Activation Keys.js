function actiovationKey(arrayOfstring) {
    let letter = arrayOfstring.shift()

    let commands = arrayOfstring.shift()
    while (commands !== 'Generate') {
        let command = commands.split('>>>');

        switch (command[0]) {
            case 'Contains':
                contains(command[1]);
                break;
            case 'Flip':
                flip(command[1], command[2], command[3]);
                break;
            case 'Slice':
                slice(command[1], command[2]);
                break;

        }
        commands = arrayOfstring.shift()
    }

    function contains(substring) {
        if (letter.includes(substring)) {
            console.log(`${letter} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }


    }

    function flip(caseUppOrLower, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex)
        let firstPart = letter.substring(0, startIndex)
        let secFLIPpart = letter.substring(startIndex, endIndex)
        let lastPart = letter.substring(endIndex)
        if (caseUppOrLower == 'Upper') {
            secFLIPpart = secFLIPpart.toUpperCase()
        } else if (caseUppOrLower === 'Lower') {
            secFLIPpart = secFLIPpart.toLowerCase()
        }
        letter = firstPart + secFLIPpart + lastPart;
        console.log(letter);
    }

    function slice(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex)
        firstLetter = letter.substring(0, startIndex)
        secondletter = letter.substring(endIndex);
        letter = firstLetter + secondletter;
        console.log(letter);
    }
    console.log(`Your activation key is: ${letter}`);
}
// actiovationKey([
//     'abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate'
// ])
actiovationKey([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])