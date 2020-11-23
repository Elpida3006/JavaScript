function weapobsmith(array) {
    let wordjungle = array.shift().split('|')

    function moveLeft(index) {
        if (index > 0) {
            [wordjungle[index - 1], wordjungle[index]] = [wordjungle[index], wordjungle[index - 1]]
        }
    }

    function moveRight(index) {
        if (index + 1 < wordjungle.length) {
            [wordjungle[index], wordjungle[index + 1]] = [wordjungle[index + 1], wordjungle[index]]
        }
    }

    function checkEven() {
        let even = []
        for (let index in wordjungle) {
            let el = wordjungle[index]
            if (index % 2 == 0) {
                even.push(el)

            }
        }
        return even.join(' ')
    }

    function checkOdd() {
        let odd = []
        for (let index in wordjungle) {
            let el = wordjungle[index]
            if (index % 2 !== 0) {
                odd.push(el)

            }
        }
        return odd.join(' ')
    }
    let commands = array.shift()
    while (commands !== "Done") {
        let command = commands.split(' ');


        switch (command[0]) {
            case 'Move':
                switch (command[1]) {
                    case 'Left':
                        moveLeft(Number(command[2]))
                        break;
                    case 'Right':
                        moveRight(Number(command[2]))
                        break;
                }
                break;

            case 'Check':
                switch (command[1]) {
                    case 'Even':
                        console.log(checkEven());
                        break;
                    case 'Odd':
                        console.log(checkOdd());
                        break;

                }
                break;
        }
        commands = array.shift()
    }

    console.log(`You crafted ${wordjungle.join('')}!`);

}
weapobsmith([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]);