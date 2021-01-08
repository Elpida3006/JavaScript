function lastStop(array) {

    let collectionPaintingNumbers = array.shift().split(' ').map(Number);

    function change(paintingNumber, changedNumber) {
        if (collectionPaintingNumbers.includes(paintingNumber)) {
            collectionPaintingNumbers.splice(collectionPaintingNumbers.indexOf(paintingNumber), 1, changedNumber);

        }
    }

    function hide(paintingNumber) {
        if (collectionPaintingNumbers.includes(paintingNumber)) {
            collectionPaintingNumbers.splice(collectionPaintingNumbers.indexOf(paintingNumber), 1)
        }

    }

    function swich(paintingNumber, paintingNumber2) {
        if (collectionPaintingNumbers.includes(paintingNumber) && collectionPaintingNumbers.includes(paintingNumber2)) {
            let index1 = collectionPaintingNumbers.indexOf(paintingNumber)
            let index2 = collectionPaintingNumbers.indexOf(paintingNumber2)
            collectionPaintingNumbers.splice(index1, 1, paintingNumber2);
            collectionPaintingNumbers.splice(index2, 1, paintingNumber);
        }
    }


    function insert(place, paintingNumber) {
        let index = place + 1
        if (collectionPaintingNumbers[index] !== undefined) {
            collectionPaintingNumbers.splice(index, 0, paintingNumber);
        }
    }

    function reverse() {
        collectionPaintingNumbers.reverse()
    }

    let commands = array.shift()

    while (commands !== "END") {
        let command = commands.split(' ')

        switch (command[0]) {
            case 'Change':
                change(+command[1], +command[2]);
                break;
            case 'Hide':
                hide(+command[1]);
                break;
            case 'Switch':
                swich(+command[1], +command[2]);
                break;
            case 'Insert':
                insert(+command[1], +command[2]);
                break;
            case 'Reverse':
                reverse();
                break;

        }


        commands = array.shift()
    }
    console.log(collectionPaintingNumbers.join(' '));
}
// lastStop([
//     '115 115 101 114 73 111 116 75',
//     'Insert 5 114',
//     'Switch 116 73',
//     'Hide 75',
//     'Reverse ',
//     'Change 73 70',
//     'Insert 10 85',
//     'END'
// ])
lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
])