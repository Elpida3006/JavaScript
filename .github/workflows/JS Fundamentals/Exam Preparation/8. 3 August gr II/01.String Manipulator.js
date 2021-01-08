function stringManipulatorII(stringofarray) {

    let string = stringofarray.shift()
    let commands = stringofarray.shift()

    while (commands !== 'Done') {
        let command = commands.split(' ')

        switch (command[0]) {
            case 'Change':
                changed(command[1], command[2]);
                break;
            case 'Includes':
                included(command[1]);
                break;
            case 'End':
                ended(command[1]);
                break;
            case 'Uppercase':
                upper();
                break;
            case 'FindIndex':
                finded(command[1]);
                break;
            case 'Cut':
                cutted(command[1], command[2]);
                break;


        }
        commands = stringofarray.shift()
    }


    function changed(char, replacement) {
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


    function ended(string1) {
        if (string.endsWith(string1)) {
            console.log(`True`);
        } else {
            console.log(`False`);
        }
    }

    function upper() {
        string = string.toUpperCase()
        console.log(string);
    }

    function finded(char) {
        let index = string.indexOf(char);
        console.log(index);
    }

    function cutted(startIndex, length) {
        startIndex = Number(startIndex);
        length = Number(length)
        let lastIndex = startIndex + length;

        string = string.substring(startIndex, lastIndex)

        console.log(string);
    }















}
stringManipulatorII([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
])