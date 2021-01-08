function addOrRemove(commands) {

    let result = [];
    let currentNumber = 1;

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];

        if (command == "add") {

            result.push(currentNumber);

        } else {
            result.pop()

        }
        currentNumber++
    }
    if (result.length == 0) {
        console.log('Empty');

    } else {
        console.log(result.join('\n'));
    }

}
addOrRemove(['add',
    'add',
    'add',
    'add'
])
addOrRemove(['add',
    'add',
    'remove',
    'add',
    'add'
])

function addOrRemove(commands) {

    let result = [];

    let number = 1;
    commands.forEach((command, index) => {
        command === 'add' ? result.push(number) : result.pop();
        number++;
    })
    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}