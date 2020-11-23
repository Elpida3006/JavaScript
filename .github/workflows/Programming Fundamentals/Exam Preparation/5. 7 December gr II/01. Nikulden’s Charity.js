function nickuldenCharity(stringArray) {

    let stemptan = stringArray.shift()
    let commands = stringArray.shift()

    function replace(currentChar, newChar) {
        while (stemptan.indexOf(currentChar) > -1) {
            stemptan = stemptan.replace(currentChar, newChar)
        }
        console.log(stemptan);
    }

    function cut(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex)
        if (startIndex < 0 || endIndex < startIndex || endIndex > stemptan.length) {
            console.log(`Invalid indexes!`);
        } else {
            let first = stemptan.substring(0, startIndex);
            let last = stemptan.substring(endIndex + 1);
            stemptan = first + last
            console.log(stemptan);
        }

    }

    function make(command) {
        if (command == 'Upper') {
            stemptan = stemptan.toUpperCase()
        } else if (command == 'Lower') {
            stemptan = stemptan.toLowerCase()
        }
        console.log(stemptan);
    }

    function check(string) {
        if (stemptan.includes(string)) {
            console.log(`Message contains ${string}`);
        } else {
            console.log(`Message doesn't contain ${string}`);
        }
    }

    function sum(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex)
        if (startIndex < 0 || endIndex < startIndex || endIndex > stemptan.length) {
            console.log(`Invalid indexes!`);
            return;
        }

        let text = stemptan.substring(startIndex, endIndex + 1);
        let sum = 0;
        for (let i = 0; i < text.length; i++) {
            let el = text[i]
            sum += el.charCodeAt(0)

        }
        console.log(sum);
    }
    while (commands !== 'Finish') {
        let command = commands.split(' ')
        switch (command[0]) {
            case 'Replace':
                replace(command[1], command[2]);
                break;
            case 'Cut':
                cut(command[1], command[2]);
                break;
            case 'Make':
                make(command[1]);
                break;
            case 'Check':
                check(command[1]);
                break;
            case 'Sum':
                sum(command[1], command[2]);
                break;
        }

        commands = stringArray.shift()
    }





}
// nickuldenCharity([
//     'ILikeSharan',
//     'Replace a e',
//     'Make Upper',
//     'Check SHEREN',
//     'Sum 1 4',
//     'Cut 1 4',
//     'Finish'
// ])
// nickuldenCharity([
//     'HappyNameDayHappyNameDayHappyNameDayHappyNameDayHappyNameDayHappyNameDay',
//     'Replace p r',
//     'Make Lower',
//     'Cut 2 23',
//     'Sum 2 50',
//     'Finish'
// ])
nickuldenCharity([
    'DinnerIsServed',
    'Make Upper',
    'Check Dinner',
    'Replace N M',
    'Finish'
])