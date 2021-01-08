function shopping(array) {

    let shoppingList = array.shift().split('!')

    function urgent(item) {
        if (!shoppingList.includes(item)) {
            shoppingList.unshift(item)
        }
    }

    function unnecessary(item) {
        if (shoppingList.includes(item)) {
            shoppingList.splice(shoppingList.indexOf(item), 1);
        }
    }

    function correct(oldItem, newItem) {
        if (shoppingList.includes(oldItem)) {
            shoppingList.splice(shoppingList.indexOf(oldItem), 1, newItem);
        }
    }

    function rearrange(item) {
        if (shoppingList.includes(item)) {
            shoppingList.push(item)
            shoppingList.splice(shoppingList.indexOf(item), 1)
        }
    }


    let commands = array.shift()
    while (commands !== 'Go Shopping!') {
        let command = commands.split(' ')
        switch (command[0]) {
            case 'Urgent':
                urgent(command[1]);
                break;
            case 'Unnecessary':
                unnecessary(command[1]);
                break;
            case 'Correct':
                correct(command[1], command[2])
                break;
            case 'Rearrange':
                rearrange(command[1])
                break;
        }
        commands = array.shift()
    }
    console.log(shoppingList.join(', '));

}
shopping([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);
//Tomatoes, Potatoes, Bread
shopping([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);
//Milk, Onion, Salt, Water, Banana