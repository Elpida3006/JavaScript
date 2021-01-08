function rotate(array) {
    let countrotate = Number(array.pop()) % 10;



    for (i = 0; i < countrotate; i++) {

        array.unshift(array.pop())

    }
    console.log(array.join(' '));
}

function rotate(array) {

    // let countrotate = Number(array.pop()) % 10

    let countrotate = Number(array.pop()) % array.length

    while (countrotate > 0) {
        array.unshift(array.pop())
        countrotate--
    }
    console.log(array.join(' '));
}
rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
])