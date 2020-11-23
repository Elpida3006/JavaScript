function numberArray(array) {
    let numbers = array.shift().split(' ').map(Number)
    let command = array.shift().split(' ')

    function swich(index, collection) {
        if (index >= 0 && index <= collection.length) {
            collection[index] = -collection[index];
        }
    }

    function change(index, value, collection) {
        if (index <= collection.length) {
            collection[index] = value;
        }

    }

    function sumNegative(collection) {
        let sum = 0;
        collection.forEach(el => {
            if (el < 0) {
                sum += el;
            }
        });
        return sum;
    }

    function sumPositive(collection) {
        let sum = 0;
        collection.forEach(el => {
            if (el >= 0) {
                sum += el;
            }
        });
        return sum;
    }

    function sumAll(collection) {
        let sum = 0;
        collection.forEach(el => { sum += el; });
        return sum;
    }


    while (command[0] !== "End") {
        switch (command[0]) {
            case "Switch":
                swich(command[1], numbers)
                break;
            case "Change":
                change(command[1], +command[2], numbers);
                break;
            case 'Sum':
                if (command[1] == 'Negative') {
                    console.log(sumNegative(numbers));
                } else if (command[1] == 'Positive') {
                    console.log(sumPositive(numbers));
                } else if (command[1] == 'All') {
                    console.log(sumAll(numbers));
                }
                break;


        }
        command = array.shift().split(' ')
    }
    let collection = [];
    for (let num of numbers) {
        if (num >= 0) {
            collection.push(num)
        }
    }
    console.log(collection.join(' '));
}
// numberArray(['1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End']);
numberArray(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
]);
//23
// 2 3 4 5 4 3 2 1 0