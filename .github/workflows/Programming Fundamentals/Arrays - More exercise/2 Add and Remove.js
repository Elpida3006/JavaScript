function addOrRemove(commands) {

    let result = [];
    isEmpty = true;
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        let currentNumber = 0;


        if (command == "add" && commands[i + 1] !== "remove") {
            currentNumber = 1 + i;
            result += `${currentNumber} `;
            isEmpty = false;
        } else if (commands[i + 1] == "remove") {
            isEmpty = true;
            continue;
        } else if (command == "remove") {
            isEmpty = true;
            continue;
        }

    }
    if (isEmpty) {
        console.log('Empty');

    } else {
        console.log(result);
    }

}
addOrRemove(['add', 'add', 'add', 'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['add', 'remove', 'add', 'remove']);