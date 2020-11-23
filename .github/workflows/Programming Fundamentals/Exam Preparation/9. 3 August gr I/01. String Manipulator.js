function stringManipulatorI(stringofarray) {


    let string = stringofarray.shift()
    let commands = stringofarray.shift()

    while (commands !== 'End') {
        let command = commands.split(' ');

        switch (command[0]) {
            case 'Translate':
                translated(command[1], command[2]);
                break;
            case 'Includes':
                included(command[1]);
                break;
            case 'Start':
                start(command[1]);
                break;
            case 'Lowercase':
                lower();
                break;
            case 'FindIndex':
                finded(command[1]);
                break;
            case 'Remove':
                rem(command[1], command[2]);
                break;
        }
        commands = stringofarray.shift()
    }


    function translated(char, replacement) {
        while (string.indexOf(char) > -1) {
            string = string.replace(char, replacement)
        }
        console.log(string);
    }

    function included(string1) {
        if (string.includes(string1)) {
            console.log(`True`);
        } else {
            console.log(`False`);
        }
    }

    function start(string1) {
        if (string.startsWith(string1)) {
            console.log(`True`);
        } else {
            console.log(`False`);
        }

    }

    function lower() {
        string = string.toLowerCase()
        console.log(string);
    }

    function finded(char) {
        let index = string.lastIndexOf(char);
        console.log(index);
    }

    function rem(startIndex, count) {
        startIndex = Number(startIndex);
        count = Number(count)
        let lastIndex = startIndex + count;
        let firstPart = string.substring(0, startIndex);
        let lastPart = string.substring(lastIndex)
        string = firstPart + lastPart;
        console.log(string);
    }











}






stringManipulatorI([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
])