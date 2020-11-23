function taskPlanner(array) {
    let numbers = array.shift().split(' ').map(Number)
    let command = array.shift().split(' ')


    function complete(index, collection) {
        if (index >= 0 && index < collection.length) {
            collection[index] = 0;
        }
    }

    function change(index, time, collection) {
        if (index >= 0 && index < collection.length) {
            collection[index] = time;

        }
    }

    function drop(index, collection) {
        if (index >= 0 && index < collection.length) {
            collection[index] = -1;

        }
    }

    while (command[0] !== "End") {
        switch (command[0]) {
            case "Complete":
                complete(command[1], numbers)
                break;
            case "Change":
                change(command[1], +command[2], numbers);
                break;
            case "Drop":
                drop(command[1], numbers)
                break;
            case 'Count':
                if (command[1] == 'Completed') {
                    console.log(numbers.filter(n => n == 0).length);
                } else if (command[1] == 'Incomplete') {
                    console.log(numbers.filter(n => n > 0).length);
                } else if (command[1] == 'Dropped') {
                    console.log(numbers.filter(n => n < 0).length);
                }
                break;
        }
        command = array.shift().split(' ')
    }

    console.log(numbers.filter(n => n > 0).join(' '));
}
taskPlanner([
    '1 -1 2 3 4 5',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
]);